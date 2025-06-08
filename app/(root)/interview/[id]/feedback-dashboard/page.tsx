import FeedbackCard from "@/components/FeedbackCard";
import TestChart from "@/components/TestChart";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getAllFeedbacksByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const feedbacks = await getAllFeedbacksByInterviewId({
    interviewId: id,
    userId: user?.id,
  });

  const interview = await getInterviewById(id);

  const tableData = feedbacks?.map((feedback, index) => {
    return { try: `Try ${index + 1}`, score: feedback.totalScore };
  }) as ScoreData[];

  return (
    <>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Feedback Dashboard</h2>
        <div className="interviews-section">
          {feedbacks?.map((feedback, index) => (
            <FeedbackCard
              key={feedback.id}
              tryNumber={index + 1}
              feedbackId={feedback.id}
              score={feedback.totalScore}
              role={interview.role}
              createdAt={feedback.createdAt}
              areasForImprovement={feedback.areasForImprovement.length}
            ></FeedbackCard>
          ))}
        </div>
        <TestChart tableData={tableData} />
      </section>
    </>
  );
};

export default Page;
