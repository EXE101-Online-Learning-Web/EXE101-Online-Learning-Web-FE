import AdminLayout from "../../Common/Admin/AdminLayout";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
ChartJS.register(...registerables);

export default function Statistic() {
    const [barData, setBarData] = useState(null);
    const [doughnutData, setDoughnutData] = useState(null);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        fetch("https://localhost:7091/api/statistic/statistic")
            .then(response => response.json())
            .then(data => {
                console.log("API Data:", data); // Debug dữ liệu trả về

                if (data) {
                    // Cập nhật Bar Chart
                    setBarData({
                        labels: data.topCourses.map(c => c.courseTitle), // Tên khóa học
                        datasets: [
                            {
                                label: "Quantity Purchased",
                                data: data.topCourses.map(c => c.totalSales), // Tổng lượt mua
                                backgroundColor: "rgba(30, 0, 255, 0.47)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                                borderRadius: 5,
                            },
                        ],
                    });

                    // Cập nhật Doughnut Chart
                    setDoughnutData({
                        labels: data.revenueDistribution.map(r => r.courseTitle), // Tên khóa học
                        datasets: [
                            {
                                label: "Revenue Share",
                                data: data.revenueDistribution.map(r => r.revenuePercentage), // Phần trăm doanh thu
                                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#8e44ad", "#f39c12"],
                                hoverOffset: 4,
                            },
                        ],
                    });

                    // Cập nhật tổng doanh thu
                    setTotalRevenue(data.totalRevenue);
                }
            })
            .catch(error => console.error("Error fetching statistics:", error));
    }, []);

    const options = {
        responsive: true,
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <AdminLayout>
            <h1 style={{ textAlign: "left", fontSize: "25px", fontWeight: "bold", color: "#4e73df" }}>
                System Statistic
            </h1>
            <h3 style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold", color: "rgba(171, 43, 8, 0.86)", marginLeft: "30px" }}>
                Total Revenue: {totalRevenue} $
            </h3>
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "60%" }}>
                    {barData ? <Bar data={barData} options={options} /> : <p>Loading...</p>}
                </div>
                <div style={{ width: "40%" }}>
                    {doughnutData ? <Doughnut data={doughnutData} options={options} /> : <p>Loading...</p>}
                </div>
            </div>
        </AdminLayout>
    );
}
