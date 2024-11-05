import { Card } from "@/components/ui/card";
import { BasicInfo} from "@/components/BasicInfo";
export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card>
        <div className="p-6">
          <BasicInfo/>
        </div>
        
      </Card>
      </div>
        
  );
}
