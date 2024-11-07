"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewProjectForm } from "@/components/NewProjectForm";
export default function NewProject() {
  return (
    <Card>
      <>
        <CardHeader>
          <CardTitle>Add a project</CardTitle>
          <CardDescription>
            Start by telling us a bit about your project. Then select the Slack
            channels and Git repositories used for it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewProjectForm />
        </CardContent>
      </>
    </Card>
  );
}
