import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackById,
  getInterviewById,
} from "@/lib/actions/general.action";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const feedback = await getFeedbackById({ feedbackId: id, userId: user?.id });
  const interviewId = feedback?.interviewId as string;
  const interview = await getInterviewById(interviewId);

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span>
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          <div className="flex flex-row gap2">
            <Image src="/calendar.svg" width={22} height={22} alt="center" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("D MMM, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>{feedback?.finalAssessment}</p>

      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Questions to focus & helpful resources</h3>
        <ul>
          {feedback?.resources?.map((resource, index) => (
            <div key={index}>
              <p className="mb-3">{resource.question}</p>
              <ul>
                {resource.links.map((link, index) => (
                  <li key={index}>
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${feedback?.interviewId}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Page;
