"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FancyMultiSelect } from "./ui/fancy-multi-select";
import { Loader2 } from "lucide-react"; // Import the Loader2 component
import { Textarea } from "./ui/textarea";

const slackChannels = [
  {
    value: "emb-canada-epd",
    label: "#emb-canada-epd",
  },
  {
    value: "emb-api-infrastructure",
    label: "#emb-api-infrastructure",
  },
  {
    value: "emb-eng-internal",
    label: "#emb-eng-internal",
  },
  {
    value: "emb-eng-react-sdk",
    label: "#emb-eng-react-sdk",
  },
  {
    value: "emb-epd-team",
    label: "#emb-epd-team",
  },
  {
    value: "emb-proj-frontend-sdk",
    label: "#emb-proj-frontend-sdk",
  },
  {
    value: "emb-dev-portal",
    label: "#emb-dev-portal",
  },

  {
    value: "product-design",
    label: "#product-design",
  },
];

const repos = [
  {
    value: "reflections",
    label: "reflections",
  },
  {
    value: "embedded-react-sdk",
    label: "embedded-react-sdk",
  },
  {
    value: "embedded-javascript-sdk",
    label: "embedded-javascript-sdk",
  },
  {
    value: "embedded-cx-portal",
    label: "embedded-cx-portal",
  },
  {
    value: "embedded-member-portal",
    label: "embedded-member-portal",
  },
  {
    value: "developer-portal",
    label: "developer-portal",
  },
  {
    value: "Gusto-Partner-API",
    label: "Gusto-Partner-API",
  },
  {
    value: "zenpayroll",
    label: "zenpayroll",
  },
];

const formSchema = z.object({
  ProjectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  channels: z.string(),
  repos: z.string(),
  description: z.string(),
});

export function NewProjectForm() {
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ProjectName: "React Frontend SDK",
      channels: "",
      repos: "",
      description: "A set of super cool developer tools that make it super easy to build a payroll experience. Gusto partners are now able to build a functional product much faster.",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/refinement");
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="ProjectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project name</FormLabel>
              <FormControl>
                <Input placeholder="The name of the project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A description of the project"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="channels"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Slack channels</FormLabel>
              <FormControl>
                <FancyMultiSelect
                  data={slackChannels}
                  placeholder="Select Slack channels"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Git repositories</FormLabel>
              <FormControl>
                <FancyMultiSelect
                  data={repos}
                  placeholder="Select Git repositories"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

const Loading = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-600"></div>
        <div className="text-center mt-8">
          <h1 className="text-2xl font-semibold">
            We're doing some serious math over here.
          </h1>
          <p className="text-muted-foreground mt-2">
            This may take a few seconds.
          </p>
        </div>
      </div>
    </div>
  );
};
