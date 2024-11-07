"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { ProjectForm } from "@/components/ProjectForm";

export default function Refinement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>We just need a few more details</CardTitle>
        <CardDescription>
          Answering these few questions will help us provide you with a better
          summary of your work.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 mt-2 bg-neutral-100 shadow-sm dark:bg-neutral-800 p-4 border rounded-md">
          <h3 className="text-md font-semibold">React Frontend SDK</h3>
          <p className="text-muted-foreground text-sm">
            A set of super cool developer tools that make it super easy to build
            a payroll experience. Gusto partners are now able to build a
            functional product in just one month. WOW!
          </p>
        </div>
        <ProjectForm />
      </CardContent>
    </Card>
  );
}
