"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckoutFormData } from "@/lib/types";

interface BillingFormProps {
  formData: CheckoutFormData;
  onFormChange: (data: Partial<CheckoutFormData>) => void;
}

export function BillingForm({ formData, onFormChange }: BillingFormProps) {
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Poland",
    "Portugal",
    "Ireland",
    "New Zealand",
    "Japan",
    "Singapore",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-white tracking-wide">
        Billing Information
      </h3>

      <div className="space-y-4">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => onFormChange({ email: e.target.value })}
            className="bg-[#141414] border-[#262626] text-white placeholder:text-[#737373] focus:border-white h-11"
            required
          />
          <p className="text-xs text-[#D4D4D4]">
            Receipt and download link will be sent here
          </p>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-white">
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => onFormChange({ fullName: e.target.value })}
            className="bg-[#141414] border-[#262626] text-white placeholder:text-[#737373] focus:border-white h-11"
            required
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country" className="text-white">
            Country
          </Label>
          <Select
            value={formData.country}
            onValueChange={(value) => onFormChange({ country: value })}
          >
            <SelectTrigger
              id="country"
              className="bg-[#141414] border-[#262626] text-white h-11"
            >
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="bg-[#0A0A0A] border-[#262626]">
              {countries.map((country) => (
                <SelectItem
                  key={country}
                  value={country}
                  className="text-white focus:bg-[#1A1A1A] focus:text-white"
                >
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Postal Code (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="postalCode" className="text-white">
            Postal Code <span className="text-[#737373]">(Optional)</span>
          </Label>
          <Input
            id="postalCode"
            type="text"
            placeholder="12345"
            value={formData.postalCode || ""}
            onChange={(e) => onFormChange({ postalCode: e.target.value })}
            className="bg-[#141414] border-[#262626] text-white placeholder:text-[#737373] focus:border-white h-11"
          />
        </div>
      </div>
    </div>
  );
}
