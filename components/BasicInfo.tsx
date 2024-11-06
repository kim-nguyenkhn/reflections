"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

import { roles, gustofiedTerms } from "@/app/data/data";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  role: z.string(),
  level: z.string(),
  term: z.string(),
});

export function BasicInfo() {
  const initialRole = roles[0]?.type || "";
  const initialTerm = gustofiedTerms[0]?.term || "";
  const initialLevels =
    roles.find((role) => role.type === initialRole)?.levels || [];
  const initialLevel = initialLevels.length > 0 ? initialLevels[0] : "";

  const [selectedRole, setSelectedRole] = useState<string>(initialRole);
  const [selectedLevel, setSelectedLevel] = useState<string>(initialLevel);
  const [filteredLevels, setFilteredLevels] = useState<string[]>(initialLevels);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      role: initialRole,
      level: initialLevel,
      term: initialTerm,
    },
  });

  const router = useRouter();

  useEffect(() => {
    form.setValue("role", initialRole);
    form.setValue("level", initialLevel);
  }, [initialRole, initialLevel, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/authentication"); // Redirect to the authentication page
  }

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    form.setValue("role", value);
    const newLevels = roles.find((role) => role.type === value)?.levels || [];
    setFilteredLevels(newLevels);

    if (newLevels.includes(selectedLevel)) {
      form.setValue("level", selectedLevel);
    } else if (newLevels.length > 0) {
      form.setValue("level", newLevels[0]);
      setSelectedLevel(newLevels[0]);
    } else {
      form.setValue("level", "");
      setSelectedLevel("");
    }
  };

  const handleLevelChange = (value: string) => {
    setSelectedLevel(value);
    form.setValue("level", value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job title</FormLabel>
              <Select
                onValueChange={(value) => {
                  handleRoleChange(value);
                  field.onChange(value);
                }}
                value={selectedRole}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your job title" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.id} value={role.type}>
                      {role.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Level</FormLabel>
              <Select
                onValueChange={(value) => {
                  handleLevelChange(value);
                  field.onChange(value);
                }}
                value={selectedLevel}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {filteredLevels.map((level, index) => (
                    <SelectItem key={index} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GustoFIED term</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select GustoFIED term" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gustofiedTerms.map((term) => (
                    <SelectItem key={term.id} value={term.term}>
                      {term.term}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
