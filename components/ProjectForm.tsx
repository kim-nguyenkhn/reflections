"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { promptData } from "@/app/data/data";

const formSchema = z.object(
  promptData.reduce((acc, prompt) => {
    acc[prompt.id] = z.string();
    return acc;
  }, {} as Record<string, z.ZodTypeAny>)
);

export function ProjectForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {promptData.map((prompt) => (
          <FormField
            key={prompt.id}
            control={form.control}
            name={prompt.id}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{prompt.prompt}</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
