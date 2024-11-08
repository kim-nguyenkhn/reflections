"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AccountConnection() {
  const [isSlackAllowed, setIsSlackAllowed] = useState(false);
  const [isGithubAllowed, setIsGithubAllowed] = useState(false);
  const router = useRouter();

  const handleAllowSlack = () => {
    setIsSlackAllowed(true);
    console.log("Allow button clicked");
    router.push(`/authentication?slack=${true}&github=${isGithubAllowed}`);
  };

  const handleAllowGithub = () => {
    setIsGithubAllowed(true);
    console.log("Allow button clicked");
    router.push(`/authentication?slack=${isSlackAllowed}&github=${true}`);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="border shadow-sm rounded-md p-4 flex items-center justify-between">
        <div className="mr-4">
          <div className="font-medium">Slack</div>
          <div className="text-muted-foreground">
            Summarize your contributions using channel activity.
          </div>
        </div>
        <SlackDialog
          isSlackAllowed={isSlackAllowed}
          onAllowClick={handleAllowSlack}
        />
      </div>
      <div className="border shadow-sm rounded-md p-4 flex items-center justify-between">
        <div className="mr-4">
          <div className="font-medium">Github</div>
          <div className="text-muted-foreground">
            Use your code contributions to summarize your work.
          </div>
        </div>
        <GithubDialog
          isGithubAllowed={isGithubAllowed}
          onAllowClick={handleAllowGithub}
        />
      </div>
    </div>
  );
}

interface SlackDialogProps {
  isSlackAllowed: boolean;
  onAllowClick: () => void;
}

const SlackDialog: React.FC<SlackDialogProps> = ({
  isSlackAllowed,
  onAllowClick,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isSlackAllowed ? (
          <div className="flex items-center gap-2 text-[#2EB67D] font-medium">
            <CheckCircle />
            <div>Connected</div>
          </div>
        ) : (
          <Button variant="outline">Connect</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Gusto is requesting permission to access your Slack account.
          </DialogTitle>
          <DialogDescription>
            What will gusto be able to view?
          </DialogDescription>
        </DialogHeader>

        <ul className="list-disc list-inside">
          <li>Your name and email address</li>
          <li>Content and info about channels and conversations</li>
        </ul>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={onAllowClick}>
              Allow
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface GithubDialogProps {
  isGithubAllowed: boolean;
  onAllowClick: () => void;
}

const GithubDialog: React.FC<GithubDialogProps> = ({
  isGithubAllowed,
  onAllowClick,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isGithubAllowed ? (
          <div className="flex items-center gap-2 text-[#2EB67D] font-medium">
            <CheckCircle />
            <div>Connected</div>
          </div>
        ) : (
          <Button variant="outline">Connect</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Gusto is requesting permission to access your Github account.
          </DialogTitle>
          <DialogDescription>
            What will gusto be able to view?
          </DialogDescription>
        </DialogHeader>

        <ul className="list-disc list-inside">
          <li>Your repositories</li>
          <li>Your commits</li>
        </ul>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={onAllowClick}>
              Allow
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
