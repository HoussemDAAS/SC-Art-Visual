"use client";

import { Check } from "lucide-react";

interface IncludedItem {
  label: string;
  value: string;
}

interface IncludedListProps {
  items: IncludedItem[];
}

export function IncludedList({ items }: IncludedListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 p-4 md:p-5 bg-[#141414] border border-[#262626] rounded-lg hover:border-[#404040] transition-colors group"
        >
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-5 h-5 rounded-full bg-white/10 border border-[#404040] flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="text-sm font-medium text-white tracking-wide">
                {item.label}
              </span>
              <span className="text-sm text-[#E5E5E5]">
                {item.value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
