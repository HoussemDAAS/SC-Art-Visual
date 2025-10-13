"use client";

import { Card } from "@/components/ui/card";
import { Sparkles, Palette, Zap, Layers, Monitor, Clock, LucideIcon } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  palette: Palette,
  zap: Zap,
  layers: Layers,
  monitor: Monitor,
  clock: Clock,
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.icon] || Sparkles;
        
        return (
          <Card
            key={index}
            className="p-6 md:p-8 bg-[#141414] border-[#262626] hover:border-[#404040] transition-all duration-300 scale-hover group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-[#262626] group-hover:border-[#404040] transition-colors">
                <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
