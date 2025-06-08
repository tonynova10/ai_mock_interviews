import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const FeedbackCard = async ({
  feedbackId,
  role,
  tryNumber,
  score,
  createdAt,
  areasForImprovement,
}: FeedbackCardProps) => {
  const formatedDate = dayjs(createdAt).format("MMM D, YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">Try: {tryNumber}</p>
          </div>
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formatedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{score}/100</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image src="/globe.svg" alt="globe" width={22} height={22} />
              <p>Areas for Improvement: {areasForImprovement}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between ml-auto">
          <Button className="btn-primary">
            <Link href={`/feedback/${feedbackId}`}>Check Feedback</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
