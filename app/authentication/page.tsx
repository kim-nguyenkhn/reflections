"use client";

import React from "react";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AccountConnection from "@/components/AccountConnection";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slack = searchParams.get("slack");
  const github = searchParams.get("github");

  const isSlackAllowed = slack === "true";
  const isGithubAllowed = github === "true";

  const handleContinue = () => {
    console.log("Continue button clicked");
    router.push("/channels");
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Connect your accounts</CardTitle>
          <CardDescription>
            We&apos;ll use your GitHub and Slack activity to help you summarize your contributions this cycle.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AccountConnection />
        </CardContent>
        {isSlackAllowed && isGithubAllowed && (
          <CardFooter className="flex justify-between">
            <Button variant="outline" >Cancel</Button>
            <Button onClick={handleContinue}>Continue</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default Page;