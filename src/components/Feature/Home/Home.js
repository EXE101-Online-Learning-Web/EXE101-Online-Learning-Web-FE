import React from "react";
import "../../../public/assets/css/home.css";
import "../../../public/assets/css/heroSection.css";
import "../../../public/assets/css/pricing.css";
import PageLayout from "../../Common/Page/PageLayout";
import Chatbot from "../../Common/OpenAIChat/Chatbot";
import Subscriptions from "./Subscriptions";
import {About} from "./About";
import Courses from "../Course/Courses";

export default function Home() {
    return (<PageLayout>
        <main className="main">
            <Courses/>
            <About/>
            <Subscriptions/>
        </main>
    </PageLayout>);
}
