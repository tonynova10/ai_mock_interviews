import FeedbackCard from "@/components/FeedbackCard";
import StatsChart from "@/components/StatsChart";
import { categories } from "@/constants";

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
    return {
      try: `Try ${index + 1}`,
      score: feedback.totalScore,
      comSkills: feedback.categoryScores[0].score,
      techKnowledge: feedback.categoryScores[1].score,
      probSolving: feedback.categoryScores[2].score,
      culturalFit: feedback.categoryScores[3].score,
      cAndC: feedback.categoryScores[4].score,
    };
  }) as ScoreData[];

  const commSkillsScores: number[] = [];
  const techKnowledgeScores: number[] = [];
  const probSolvingScores: number[] = [];
  const culturalFitScores: number[] = [];
  const cAndCScores: number[] = [];

  const getScores = () => {
    feedbacks?.map((feedback) => {
      commSkillsScores.push(feedback.categoryScores[0].score);
      techKnowledgeScores.push(feedback.categoryScores[1].score);
      probSolvingScores.push(feedback.categoryScores[2].score);
      culturalFitScores.push(feedback.categoryScores[3].score);
      cAndCScores.push(feedback.categoryScores[4].score);
    });

    return [
      commSkillsScores,
      techKnowledgeScores,
      probSolvingScores,
      culturalFitScores,
      cAndCScores,
    ];
  };

  const findAveragePerCategory = () => {
    const scores = getScores();
    const averages = scores.map((score) => score.reduce((a, b) => a + b));
    return averages;
  };

  const findOpportunityArea = () => {
    const categoryAverages = findAveragePerCategory();
    const index = categoryAverages.findIndex(
      (element) => element === Math.min(...categoryAverages)
    );
    return categories[index];
  };

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
        <StatsChart tableData={tableData} />
      </section>
      <section className="card-cta">
        <div className="flex flex-col gap-6 ">
          <h2>We have detected that your opportinity area is {findOpportunityArea()}</h2>
          <p className="text-lg">
            Here is more info about your progress in that particular area
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
