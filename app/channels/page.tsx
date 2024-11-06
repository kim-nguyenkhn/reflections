"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlackChannelsList } from "@/components/SlackChannelsList";
import { useRouter } from "next/navigation";

export default function SlackChannels() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleContinue = () => {
    setIsLoading(true);
    // Simulate a delay for loading (e.g., API call)
    setTimeout(() => {
      router.push("/authentication");
      // Perform any further actions here (e.g., navigation)
    }, 4000);
  };

  return (
    <Card>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CardHeader>
            <CardTitle>Select project channels</CardTitle>
            <CardDescription>
              Choose all project channels that you contributed to this cycle.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SlackChannelsList />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleContinue}>Continue</Button>
          </CardFooter>
        </>
      )}
    </Card>
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
          <p className="text-muted-foreground mt-2">This may take a few seconds.</p>
        </div>
      </div>
    </div>
  );
};
