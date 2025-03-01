import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../public/assets/css/home.css";
import "../../../public/assets/css/heroSection.css";
import "../../../public/assets/css/pricing.css";
import PageLayout from "../../Common/Page/PageLayout";
import { DivideCircle } from "lucide-react";
import Chatbot from "../../Common/OpenAIChat/Chatbot";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {Banner} from "../../Common/Page/Banner";
import Subscriptions from "./Subscriptions";
import {About} from "./About";
import {DemoCourses} from "./DemoCourses";

export default function Home() {
  return (
    <PageLayout>
      <main class="main">
        <Banner/>
        <DemoCourses/>
        <About/>

        <Subscriptions/>
        <Chatbot></Chatbot>
      </main>
    </PageLayout>
  );
}
