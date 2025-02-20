import { useParams } from "react-router-dom";
import PageLayout from "../Common/Page/PageLayout";

export default function CourseDetail() {
  const { idCourse } = useParams();

  return <PageLayout>{idCourse}</PageLayout>;
}
