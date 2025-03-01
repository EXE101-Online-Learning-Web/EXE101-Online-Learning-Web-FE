import "../../../public/assets/css/pricing.css";
import PageLayout from "../../Common/Page/PageLayout";
import React from "react";

export default function Subscriptions() {
    return (
        <section id="pricing" className="pricing section">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <div className="row g-3 justify-content-center">
                    <div className="col-lg-4 col-md-5">
                        <div className="pricing-item">
                            <div className="icon">
                                <i className="bi bi-box"></i>
                            </div>
                            <h4 className="fw-semibold fs-5">Free Plan</h4>
                            <h5 className="price">
                                $0<span>/month</span>
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="bi bi-check"></i> Limited free courses
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> AI course recommendations
                                </li>
                                <li className="text-muted">
                                    <i className="bi bi-x"></i> No quizzes & analytics
                                </li>
                                <li className="text-muted">
                                    <i className="bi bi-x"></i> No certification
                                </li>
                            </ul>
                            <button className="buy-btn">Get Started</button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5">
                        <div className="pricing-item">
                            <div className="icon">
                                <i className="bi bi-rocket"></i>
                            </div>
                            <h4 className="fw-semibold fs-5">Premium Plan</h4>
                            <h5 className="price">
                                $29<span>/month</span>
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="bi bi-check"></i> Unlimited course access
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> AI-powered learning
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Personalized quizzes
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Certification included
                                </li>
                            </ul>
                            <button className="buy-btn">Subscribe Now</button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5">
                        <div className="pricing-item">
                            <div className="icon">
                                <i className="bi bi-person-video3"></i>
                            </div>
                            <h4 className="fw-semibold fs-5">Instructor Plan</h4>
                            <h5 className="price">
                                $49<span>/month</span>
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="bi bi-check"></i> Unlimited course uploads
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> AI-powered student insights
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Revenue sharing & analytics
                                </li>
                                <li>
                                    <i className="bi bi-check"></i> Advanced tracking & reports
                                </li>
                            </ul>
                            <button className="buy-btn">Join as Instructor</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

