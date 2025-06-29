interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
  userId: string;
  capability: string;
  username: string;
  interviewRole: string;
  resources: Array<{ links: string[]; question: string }>;
}

interface HistoricData {
  username: string;
  role: string;
  score: number;
  dateTaken: string;
}

interface Interview {
  id: string;
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
}

interface Capability {
  id: string;
  name: string;
  value: string;
}

interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  username: string;
  capability: string;
  transcript: { role: string; content: string }[];
  feedbackId?: string;
  interviewRole?: string;
}

interface User {
  name: string;
  email: string;
  id: string;
  capability: string;
  isAdmin: boolean;
}

interface InterviewCardProps {
  id?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
  level?: string;
}

interface FeedbackCardProps {
  feedbackId?: string;
  userId?: string;
  role: string;
  tryNumber: number;
  score: number;
  createdAt: string;
  areasForImprovement: number;
}

interface ScoreData {
  try: string;
  score: number;
  comSkills: number;
  techKnowledge: number;
  probSolving: number;
  culturalFit: number;
  cAndC: number;
}

interface TableDataProps {
  tableData: ScoreData[];
}

interface BreadcrumbsProps {
  interviewId: string | undefined;
}

interface AgentProps {
  userName: string | undefined;
  userId?: string;
  interviewId?: string;
  role?: string;
  feedbackId?: string;
  type: "generate" | "interview";
  questions?: string[];
  capability: string | undefined;
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string | undefined;
}

interface GetFeedbackByIdParams {
  feedbackId: string;
  userId: string | undefined;
}

interface GetLatestInterviewsParams {
  userId: string | undefined;
  limit?: number;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
  capability: string;
  isAdmin: boolean;
}

type FormType = "sign-in" | "sign-up";

interface InterviewFormProps {
  interviewId: string;
  role: string;
  level: string;
  type: string;
  techstack: string[];
  amount: number;
}

interface TechIconProps {
  techStack: string[];
}
