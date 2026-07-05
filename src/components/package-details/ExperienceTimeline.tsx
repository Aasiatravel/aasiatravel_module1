import React from 'react';
import * as Icons from 'lucide-react';
import type { StepData } from '@/data/packages';

interface ExperienceTimelineProps {
  steps: StepData[];
}

export default function ExperienceTimeline({ steps }: ExperienceTimelineProps) {
  return (
    <section className="container-custom section-padding bg-background-cream/30 font-sans">
      <div className="mb-16">
        <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-4">
          THE COMPLETE EXPERIENCE
        </span>
        <h2 className="text-4xl font-serif text-primary font-bold">
          Everything handled for you, step by step.
        </h2>
      </div>

      <div className="relative pl-12 md:pl-[300px]">
        <div className="timeline-line"></div>

        <div className="space-y-16">
          {steps.map((step) => {
            // Resolve icon dynamically
            const LucideIcon = (Icons[step.iconName] || Icons.HelpCircle) as React.ComponentType<{
              className?: string;
            }>;

            return (
              <div key={step.id} className="relative group">
                <div className="absolute -left-[37px] md:-left-[108px] w-[50px] h-[50px] bg-white border border-primary-soft rounded-full flex items-center justify-center shadow-custom z-10 group-hover:border-primary-light group-hover:scale-110 transition-all duration-300">
                  <span className="text-primary group-hover:text-primary-light transition-colors">
                    <LucideIcon className="w-5 h-5" />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-medium tracking-widest text-primary-light uppercase">
                    STEP {step.id}
                  </span>
                  <h3 className="text-[20px] font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[16px] font-normal text-primary-light max-w-[700px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
