"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import FormField from "./FormField";
import { Button } from "@/components/ui/button";
import FormSelect from "./FormSelect";
import FormRadioGroup from "./FormRadioGroup";
import { toast } from "sonner";

const interviewCreationSchema = () => {
  return z.object({
    type: z.enum(["technical", "behavioral", "mixed"]),
    role: z.string(),
    level: z.string(),
    techstack: z.string(),
    amount: z.string(),
    capability: z.string(),
  });
};

const InterviewForm = ({ userId }: { userId: string | undefined }) => {
  const router = useRouter();
  const formSchema = interviewCreationSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: undefined,
      amount: "",
      capability: "",
      level: "",
      role: "",
      techstack: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const body = {
        ...values,
        userid: userId,
      };
      const response = await fetch(
        "api/vapi/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      if (!result?.success) {
        toast.error(result?.message);
        return;
      }
      toast.success("Interview created successfuly!");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  return (
    <div className="card-border w-full">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 mt-4 form"
            >
              <FormSelect
                control={form.control}
                name="capability"
                label="Capability"
                placeholder="Select your capability."
              />
              <FormRadioGroup control={form.control} name="type" label="Type" />
              <FormField
                control={form.control}
                name="role"
                label="Role"
                placeholder="Please enter the role for the interview."
              />
              <FormField
                control={form.control}
                name="level"
                label="Level"
                placeholder="Please enter the difficulty level (Junior, Senior, Manager)."
              />
              <FormField
                control={form.control}
                name="techstack"
                label="Technologies or Skills"
                placeholder="Please enter the technologies or skills, e.g (Java, Python)."
              />
              <FormField
                control={form.control}
                name="amount"
                label="Amount of questions"
                placeholder="Please enter the amount of questions"
              />
              <Button className="btn" type="submit">
                Create Interview
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default InterviewForm;
