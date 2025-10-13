"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/lib/types";

interface SpecsAccordionProps {
  specs: Product["specs"];
}

export function SpecsAccordion({ specs }: SpecsAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem
        value="technical"
        className="bg-[#141414] border border-[#262626] rounded-lg px-6 data-[state=open]:border-[#404040]"
      >
        <AccordionTrigger className="text-white font-medium tracking-wide hover:no-underline py-5">
          Technical Details
        </AccordionTrigger>
        <AccordionContent className="text-[#E5E5E5] pb-5 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                File Count
              </p>
              <p className="text-sm text-white">{specs.fileCount}+ Files</p>
            </div>
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                Formats
              </p>
              <p className="text-sm text-white">{specs.formats.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                Resolution
              </p>
              <p className="text-sm text-white">{specs.resolution.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                Frame Rate
              </p>
              <p className="text-sm text-white">{specs.frameRate}</p>
            </div>
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-1">
                File Size
              </p>
              <p className="text-sm text-white">{specs.fileSize}</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="compatibility"
        className="bg-[#141414] border border-[#262626] rounded-lg px-6 data-[state=open]:border-[#404040]"
      >
        <AccordionTrigger className="text-white font-medium tracking-wide hover:no-underline py-5">
          Software Compatibility
        </AccordionTrigger>
        <AccordionContent className="text-[#E5E5E5] pb-5 space-y-2">
          {specs.compatibility.map((software, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-white"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              {software}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="license"
        className="bg-[#141414] border border-[#262626] rounded-lg px-6 data-[state=open]:border-[#404040]"
      >
        <AccordionTrigger className="text-white font-medium tracking-wide hover:no-underline py-5">
          Usage Rights
        </AccordionTrigger>
        <AccordionContent className="text-[#E5E5E5] pb-5 space-y-3">
          <p className="text-sm text-white font-medium">{specs.license}</p>
          <div className="space-y-2 text-sm">
            <p>✓ Use in unlimited commercial projects</p>
            <p>✓ Use for client work</p>
            <p>✓ Modify and customize as needed</p>
            <p>✓ No attribution required</p>
            <p className="text-[#737373] mt-3">
              ✗ Cannot resell or redistribute as-is
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="installation"
        className="bg-[#141414] border border-[#262626] rounded-lg px-6 data-[state=open]:border-[#404040]"
      >
        <AccordionTrigger className="text-white font-medium tracking-wide hover:no-underline py-5">
          How to Use
        </AccordionTrigger>
        <AccordionContent className="text-[#E5E5E5] pb-5 space-y-3 text-sm">
          <div>
            <p className="text-white font-medium mb-2">Step 1: Download</p>
            <p>After purchase, download the ZIP file from your account dashboard.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Step 2: Extract</p>
            <p>Unzip the downloaded file to your desired location.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Step 3: Import</p>
            <p>Open your video editing software and import the files. For After Effects, open the .AEP project file directly.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Step 4: Customize</p>
            <p>Customize colors, text, and timing to match your brand.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
