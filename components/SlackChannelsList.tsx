import { Checkbox } from "@/components/ui/checkbox";
import { slackChannels } from "@/app/data/data";

export function SlackChannelsList() {
  return (
    <>
      
        <div className="space-y-4">
        {slackChannels.map((channel) => (
          <div key={channel.id} className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {channel.name}
            </label>
          </div>
          ))}
        </div>
      
    </>
  );
}
