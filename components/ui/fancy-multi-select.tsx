"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type Data = Record<"value" | "label", string>;

interface FancyMultiSelectProps {
  placeholder: string;
  data: Data[];
}

interface HandleUnselect {
  (data: Data): void;
}

interface HandleKeyDown {
  (e: React.KeyboardEvent<HTMLDivElement>): void;
}

export function FancyMultiSelect({ placeholder, data }: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Data[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleUnselect: HandleUnselect = React.useCallback((data: Data) => {
    setSelected((prev) => prev.filter((s) => s.value !== data.value));
  }, []);

  const handleKeyDown: HandleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = data.filter((data) => !selected.includes(data));

  console.log(selectables, selected, inputValue);

  return (
    <>
      <Command
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-transparent"
      >
        <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selected.map((data) => {
              return (
                <Badge key={data.value} variant="secondary">
                  {data.label}
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(data);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(data)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map((data) => {
                    return (
                      <CommandItem
                        key={data.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={(value) => {
                          setInputValue("");
                          setSelected((prev) => [...prev, data]);
                        }}
                        className={"cursor-pointer"}
                      >
                        {data.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
    </>
  );
}
