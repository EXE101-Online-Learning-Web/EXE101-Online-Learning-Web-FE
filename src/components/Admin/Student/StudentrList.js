import AdminLayout from "../../Common/Admin/AdminLayout";

export default function StudentList() {
  const students = [
    {
      name: "Nguyễn Văn A",
      class: "12A1",
      city: "Hà Nội",
      age: 18,
      startDate: "2021/09/01",
      gpa: "3.8",
    },
    {
      name: "Trần Thị B",
      class: "11B2",
      city: "TP. Hồ Chí Minh",
      age: 17,
      startDate: "2022/09/01",
      gpa: "3.5",
    },
    {
      name: "Phạm Hữu C",
      class: "12C3",
      city: "Đà Nẵng",
      age: 18,
      startDate: "2021/09/01",
      gpa: "3.7",
    },
    {
      name: "Lê Minh D",
      class: "10D4",
      city: "Cần Thơ",
      age: 16,
      startDate: "2023/09/01",
      gpa: "3.9",
    },
    {
      name: "Hoàng Thị E",
      class: "11A5",
      city: "Hải Phòng",
      age: 17,
      startDate: "2022/09/01",
      gpa: "3.6",
    },
  ];

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Student List</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Account Management
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Start Date</th>
                    <th>GPA</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.class}</td>
                      <td>{student.city}</td>
                      <td>{student.age}</td>
                      <td>{student.startDate}</td>
                      <td>{student.gpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
