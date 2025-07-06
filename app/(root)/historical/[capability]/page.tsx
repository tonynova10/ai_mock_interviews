import { historicColumns } from "@/columns/historical/columns";
import { GenericTable } from "@/components/GenericTable";
import { getFeedbacksByCapability } from "@/lib/actions/general.action";

const Page = async ({ params }: RouteParams) => {
  const { capability } = await params;

  const feedbacks = await getFeedbacksByCapability(capability);

  const historicData = feedbacks.map((feedback) => {
    const data: HistoricData = {
      feedbackId: feedback.id,
      username: feedback.username,
      role: feedback.interviewRole,
      score: feedback.totalScore.toString(),
      dateTaken: feedback.createdAt,
    };

    return data;
  });

  return (
    <>
      <section className="flex flex-col gap-6 mt-8">
        <h2>User Historical</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2 items-center">
              <GenericTable data={historicData} columns={historicColumns} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
