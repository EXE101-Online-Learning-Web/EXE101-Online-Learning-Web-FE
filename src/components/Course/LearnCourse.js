import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageLayout from "../Common/Page/PageLayout";

export default function LearnCourse() {
    const { idCourse } = useParams();
    const [course, setCourse] = useState(null);
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    // Lấy thông tin khóa học và dữ liệu video từ API và dữ liệu giả lập
    const fetchCourseData = async () => {
        try {
            const result = await axios.get(`https://localhost:7091/api/Course/${idCourse}`);
            setCourse(result.data);

            // Giả lập các video và mô tả cho mục lục
            setVideos([
                {
                    id: 1,
                    title: "Introduction to AI",
                    url: "https://www.youtube.com/embed/x0fSBAgBrOQ?si=-Z4aQ2InSGT7eOt9",
                    description: "In this section, we will introduce the basics of AI, its history, and applications."
                },
                {
                    id: 2,
                    title: "Machine Learning Basics",
                    url: "https://www.youtube.com/embed/30sMCciFIAM?si=bq1aEsoe7X3f00CA",
                    description: "Learn the fundamental concepts of machine learning, supervised vs unsupervised learning."
                },
                {
                    id: 3,
                    title: "Deep Learning Overview",
                    url: "https://www.youtube.com/embed/9QeNLypIiZs?si=8WegVQiVm8Ms1AH7",
                    description: "This section covers deep learning algorithms, neural networks, and their applications."
                },
                {
                    id: 4,
                    title: "Data Science 101",
                    url: "https://www.youtube.com/embed/9QeNLypIiZs?si=g1fKz1s1e_cVbjrJ",
                    description: "Introduction to Data Science, the basics of data analysis, and how to interpret data insights."
                },
                {
                    id: 5,
                    title: "Natural Language Processing",
                    url: "https://www.youtube.com/embed/WB6FQdp41hs?si=bsfY4J7dEu8byofI",
                    description: "Learn how machines process and understand human language, including text classification and sentiment analysis."
                },
                {
                    id: 6,
                    title: "Computer Vision Techniques",
                    url: "https://www.youtube.com/embed/Nno-r1Cz_-I?si=uy0qrov0n2on85-h",
                    description: "Exploring the basics of computer vision, object detection, image segmentation, and more."
                },
                {
                    id: 7,
                    title: "Reinforcement Learning",
                    url: "https://www.youtube.com/embed/5KfoXHWzcLw?si=tOs4C1mvI5g-Ic4_",
                    description: "An introduction to reinforcement learning, where machines learn to make decisions through trial and error."
                },
                {
                    id: 8,
                    title: "AI in Healthcare",
                    url: "https://www.youtube.com/embed/SdphnMywCbo?si=DsXxNAV4YTVQaBd7\" title=\"YouTube video player",
                    description: "Discover the applications of artificial intelligence in healthcare, including diagnostics, personalized medicine, and more."
                },
                {
                    id: 9,
                    title: "AI for Robotics",
                    url: "https://www.youtube.com/embed/JN_SxpAujDw?si=53m_sotxZ8xnBhYF",
                    description: "Learn how AI is transforming robotics, covering autonomous robots, motion planning, and decision-making algorithms."
                },
                {
                    id: 10,
                    title: "AI in Business Applications",
                    url: "https://www.youtube.com/embed/JN_SxpAujDw?si=1XqPZ7EB435RYIwi",
                    description: "How AI is being used to optimize business processes, enhance customer experiences, and drive business value."
                }
            ]);


            // Set video đầu tiên là video mặc định khi tải trang
            setCurrentVideo(videos[0]);
        } catch (error) {
            console.log(error);
        }
    };

    // Sử dụng useEffect để fetch dữ liệu khi component được render lần đầu
    useEffect(() => {
        fetchCourseData();
    }, [idCourse]);

    // Cập nhật video khi người dùng chọn mục lục
    const handleVideoSelect = (video) => {
        setCurrentVideo(video);
    };

    if (!course) {
        return <PageLayout>Loading...</PageLayout>;
    }

    return (
        <PageLayout>
            <div className="learn-course">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/* Mục lục bên trái */}
                            <div className="sidebar">
                                <h4>Table of Contents</h4>
                                <ul className="list-unstyled">
                                    {videos.map((video) => (
                                        <li key={video.id} className="content-item">
                                            <button
                                                className="btn btn-link"
                                                onClick={() => handleVideoSelect(video)} // Chuyển video khi nhấn vào mục lục
                                            >
                                                {video.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            {/* Nội dung khóa học */}
                            <h2 className="text-center fw-bold fs-1 text-primary">{course.courseTitle}</h2>
                            <p className="text-center fw-bold text-primary">{course.description}</p>

                            {/* Video và mô tả hiện tại */}
                            {currentVideo && (
                                <div className="video-section">
                                    <h3>{currentVideo.title}</h3>
                                    <iframe
                                        key={currentVideo.id} // Dùng key để buộc React re-render khi thay đổi video
                                        width="100%"
                                        height="400"
                                        src={currentVideo.url}
                                        title={currentVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <p>{currentVideo.description}</p> {/* Hiển thị mô tả cho video hiện tại */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
