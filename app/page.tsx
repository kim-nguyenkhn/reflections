import { BasicInfo } from "@/components/BasicInfo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>A little about you</CardTitle>
          <CardDescription>
            We need a little information about you before me continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BasicInfo />
        </CardContent>
      </Card>
    </div>
  );
}
