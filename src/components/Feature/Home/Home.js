import React from "react";
import "../../../public/assets/css/home.css";
import "../../../public/assets/css/heroSection.css";
import "../../../public/assets/css/pricing.css";
import PageLayout from "../../Common/Page/PageLayout";
import { DivideCircle, ImageOff } from "lucide-react";
import Chatbot from "../../Common/OpenAIChat/Chatbot";
import Subscriptions from "./Subscriptions";
import {About} from "./About";
import Courses from "../Course/Courses";
import {DemoCourses} from "./DemoCourses";
import Survey from "./Survey";

export default function Home() {
    return (<PageLayout>
        <main className="main">
            <Survey/>
            <Courses/>
            <About/>
            <Subscriptions/>
        </main>
    </PageLayout>);
}
