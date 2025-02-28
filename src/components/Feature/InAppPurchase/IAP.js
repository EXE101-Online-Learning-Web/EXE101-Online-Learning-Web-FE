import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../../public/assets/css/pricing.css";
import PageLayout from "../../Common/Page/PageLayout";

export default function IAP() 
{
    console.log("IAP Component Rendered");
    return (
        <PageLayout>
            <section id="pricing" class="pricing section">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                    <div class="row g-3 justify-content-center">

                        <div class="col-lg-4 col-md-5">
                            <div class="pricing-item">
                                <div class="icon">
                                    <i class="bi bi-box"></i>
                                </div>
                                <h4 class="fw-semibold fs-5">Free Plan</h4>
                                <h5 class="price">
                                    $0<span>/month</span>
                                </h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check"></i> Limited free courses
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> AI course recommendations
                                    </li>
                                    <li class="text-muted">
                                        <i class="bi bi-x"></i> No quizzes & analytics
                                    </li>
                                    <li class="text-muted">
                                        <i class="bi bi-x"></i> No certification
                                    </li>
                                </ul>
                                <button className="buy-btn">Get Started</button>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-5">
                            <div class="pricing-item">
                                <div class="icon">
                                    <i class="bi bi-rocket"></i>
                                </div>
                                <h4 class="fw-semibold fs-5">Premium Plan</h4>
                                <h5 class="price">
                                    $29<span>/month</span>
                                </h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check"></i> Unlimited course access
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> AI-powered learning
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> Personalized quizzes
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> Certification included
                                    </li>
                                </ul>
                                <button className="buy-btn">Subscribe Now</button>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-5">
                            <div class="pricing-item">
                                <div class="icon">
                                    <i class="bi bi-person-video3"></i>
                                </div>
                                <h4 class="fw-semibold fs-5">Instructor Plan</h4>
                                <h5 class="price">
                                    $49<span>/month</span>
                                </h5>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="bi bi-check"></i> Unlimited course uploads
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> AI-powered student insights
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> Revenue sharing & analytics
                                    </li>
                                    <li>
                                        <i class="bi bi-check"></i> Advanced tracking & reports
                                    </li>
                                </ul>
                                <button className="buy-btn">Join as Instructor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

