"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("project");

  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
        <CardDescription>
          Here's a summary for each assessment area based on your recent work on
          the doc-upload project and the discussions in Slack.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select
            onValueChange={(value) => setSelectedOption(value)}
            defaultValue="project"
          >
            <SelectTrigger className="mb-8">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="project">Project & Team Impact</SelectItem>
              <SelectItem value="better-engineering">Better Engineering Impact</SelectItem>
            </SelectContent>
          </Select>

          {selectedOption === "project" && <PeopleImpact />}
          {selectedOption === "better-engineering" && <BetterEngineering />}
        </div>
      </CardContent>
    </Card>
  );
};

const PeopleImpact = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-md font-semibold mb-4">Achievements</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">Scale and Execution</h3>
            <p className="text-sm text-muted-foreground">
              You led a medium-sized project to implement a document upload
              feature with substantial technical and organizational complexity,
              navigating decisions between using a generic endpoint versus
              multiple endpoints. You demonstrated strong ownership by
              progressing the project through both planning and execution
              phases, addressing cross-functional stakeholder feedback from
              multiple teams (Security, Legal, and Product).
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Quality & Iterative Delivery
            </h3>
            <p className="text-sm text-muted-foreground">
              You consistently iterated on feedback from team members, as evidenced by your responsiveness to PR comments and adjustments to the scaffolding, migration, and validation of file types. You maintained quality standards by proactively addressing edge cases like file spoofing, ensuring robust file type validation, and backfilling UUIDs for data consistency.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Strategy and Ownership
            </h3>
            <p className="text-sm text-muted-foreground">
              Your decision to exclude certain compliance documents from the initial release until use cases were clarified reflects an understanding of prioritization and customer needs vs. technical feasibility. You also communicated project dependencies (e.g., security and TS approvals) effectively, ensuring clarity around project timelines.
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h2 className="text-md font-semibold mb-4">Contribution</h2>
        <div className="space-y-4">
          <div className="border rounded-md shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold mb-1">
                Initial PR for scaffolding and project setup
              </h3>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <ExternalLink />
              </Button>
            </div>
          </div>
          <div className="border rounded-md shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold mb-1 mr-4 flex-grow">
                Final PR with the complete feature for doc upload and file
                validation
              </h3>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <ExternalLink />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h2 className="text-md font-semibold mb-4">Improvement areas</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Cross-Team Communication
            </h3>
            <p className="text-sm text-muted-foreground">
              While the project was managed effectively, increasing the cadence
              of proactive updates and clarity on migration blockers to all team
              members could help keep everyone aligned, especially with
              dependencies across teams (e.g., CI stability issues impacting
              deployment).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BetterEngineering = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-md font-semibold mb-4">Achievements</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Reliability and Observability
            </h3>
            <p className="text-sm text-muted-foreground">
              You ensured robust validation for supported file types and
              mitigated potential issues like spoofed files and large file
              handling. This helped to maintain high standards for reliability,
              which aligns with Gusto's emphasis on secure, performant, and
              reliable code. Best Practices & Documentation: You exemplified
              best practices by creating thorough documentation for the feature,
              assisting cross-functional teams in understanding the
              implementation. Your work on migrations and thorough testing
              indicates a clear focus on engineering quality.
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h2 className="text-md font-semibold mb-4">Contribution</h2>
        <div className="space-y-4">
          <div className="border rounded-md shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold mb-1">
                Initial PR for scaffolding and project setup
              </h3>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <ExternalLink />
              </Button>
            </div>
          </div>
          <div className="border rounded-md shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold mb-1 mr-4 flex-grow">
                Final PR with the complete feature for doc upload and file
                validation
              </h3>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <ExternalLink />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h2 className="text-md font-semibold mb-4">Improvement areas</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Technical Vision and Migration Strategy
            </h3>
            <p className="text-sm text-muted-foreground">
            A smoother migration process could enhance reliability. Ensuring stronger coordination with DevOps or CI teams to resolve blockers or using a more incremental migration approach may minimize future delays.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Page;
