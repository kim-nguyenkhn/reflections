"use client";

import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div>
      <Button onClick={() => console.log("hello")}>Click me</Button>
    </div>
  );
}
