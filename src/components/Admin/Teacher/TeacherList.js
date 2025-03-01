import AdminLayout from "../../Common/Admin/AdminLayout";

export default function TeacherList() {
  const teachers = [
    {
      name: "Nguyễn Văn A",
      position: "Mathematics Teacher",
      office: "Hà Nội",
      age: 40,
      startDate: "2008/09/15",
      salary: "$45,000",
    },
    {
      name: "Trần Thị B",
      position: "English Teacher",
      office: "TP. Hồ Chí Minh",
      age: 35,
      startDate: "2012/06/23",
      salary: "$50,500",
    },
    {
      name: "Phạm Hữu C",
      position: "Physics Teacher",
      office: "Đà Nẵng",
      age: 42,
      startDate: "2005/04/12",
      salary: "$47,800",
    },
    {
      name: "Lê Minh D",
      position: "Chemistry Teacher",
      office: "Cần Thơ",
      age: 38,
      startDate: "2010/11/08",
      salary: "$48,200",
    },
    {
      name: "Hoàng Thị E",
      position: "Biology Teacher",
      office: "Hải Phòng",
      age: 33,
      startDate: "2015/02/20",
      salary: "$46,000",
    },
  ];

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Teacher List</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Account Management
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={index}>
                      <td>{teacher.name}</td>
                      <td>{teacher.position}</td>
                      <td>{teacher.office}</td>
                      <td>{teacher.age}</td>
                      <td>{teacher.startDate}</td>
                      <td>{teacher.salary}</td>
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
