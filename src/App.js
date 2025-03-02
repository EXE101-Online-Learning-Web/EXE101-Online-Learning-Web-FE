import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/public/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/public/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/public/assets/css/main.css";
import {ToastContainer} from "react-toastify";
import Home from "./components/Feature/Home/Home";
import Test from "./components/Feature/Home/test";
import Courses from "./components/Feature/Course/Courses";
import Login from "./components/System/Login/Login";
import Register from "./components/System/Register/Register";
import AdminManagement from "./components/Admin/Admin";
import TeacherList from "./components/Admin/Teacher/TeacherList";
import PrivateRoute from "./components/System/Authorize/PrivateRoute";
import CourseDetail from "./components/Feature/Course/CourseDetail";
import QuizDetail from "./components/Feature/Quiz/QuizDetail";
import ProfileDetail from "./components/Feature/Profile/ProfileDetail";
import Statistic from "./components/Admin/Statistic/Statistic";
import {PaymentSuccess} from "./components/Feature/Payment/PaymentSuccess";
import CourseCreate from "./components/Feature/Course/CourseCreate";
import LearnCourse from "./components/Feature/Course/LearnCourse";
import StudentList from "./components/Admin/Student/StudentList";
import Subscriptions from "./components/Feature/Home/Subscriptions";
import {About} from "./components/Feature/Home/About";
import PageLayout from "./components/Common/Page/PageLayout";
import {TeacherTest} from "./components/Feature/Teacher/TeacherTest";
import {VipStudentTest} from "./components/Feature/VipStudent/VipStudentTest";
import {PaymentPremium} from "./components/Feature/Payment/PaymentPremium";
import Schedule from "./components/Feature/Schedule/Schedule";
import CourseList from "./components/Admin/Course/CourseList";

const AppContent = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/about" element={<PageLayout><About/></PageLayout>}/>

        {/* Protected Common for Student, Teacher Routes */}
        <Route element={<PrivateRoute allowedRoles={["Student", "Teacher", "Admin"]}/>}>
            <Route path="/profile/:id" element={<ProfileDetail/>}/>
        </Route>

        {/* Protected Student Routes */}
        <Route element={<PrivateRoute allowedRoles={["Student","Admin"]}/>}>
            <Route path="/courses" element={<PageLayout><Courses/></PageLayout>}/>
            <Route path="/course/create" element={<CourseCreate/>}/>
            <Route path="/course/:idCourse" element={<CourseDetail/>}/>
            <Route path="/quiz/:idCourse" element={<QuizDetail/>}/>
            <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
            <Route path="/learn-course/:idCourse" element={<LearnCourse/>}/>
            <Route path="/subscriptions" element={<PageLayout><Subscriptions/></PageLayout>}/>
            <Route path="/paymentPremium" element={<PaymentPremium/>}/>
            <Route path="/schedule" element={<PageLayout><Schedule/></PageLayout>}/>
        </Route>

        {/* Protected Vip Student Routes */}
        <Route element={<PrivateRoute allowedRoles={["VIP Student","Admin"]}/>}>
            <Route path="/vip/test" element={<VipStudentTest/>}></Route>
        </Route>


        {/* Protected Teacher Routes */}
        <Route element={<PrivateRoute allowedRoles={["Admin"]}/>}>
            <Route path="/teacher/test" element={<TeacherTest/>}></Route>
        </Route>
        {/* Protected Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["Admin"]}/>}>
            <Route path="/admin/statistic" element={<Statistic/>}/>
            <Route path="/admin" element={<Statistic/>}/>
            <Route path="/admin/course/courseList" element={<CourseList/>}/>
            <Route path="/admin/teacher/teacherList" element={<TeacherList/>}/>
            <Route path="/admin/student/studentList" element={<StudentList/>}/>
        </Route>
    </Routes>
);

const App = () => (
    <>
        <AppContent/>
        <ToastContainer/>
    </>
);

export default App;
