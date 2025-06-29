import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const FeedbackBreadcrumbs = ({ interviewId }: BreadcrumbsProps) => {
  const feedbackDashboardRoute = `/interview/${interviewId}/feedback-dashboard`;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href={feedbackDashboardRoute}>Feedback Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Feedback</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default FeedbackBreadcrumbs;
