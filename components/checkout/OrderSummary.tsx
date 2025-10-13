"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface OrderSummaryProps {
  productName: string;
  productImage: string;
  price: number;
}

export function OrderSummary({
  productName,
  productImage,
  price,
}: OrderSummaryProps) {
  const tax = 0; // No tax for digital products
  const total = price + tax;

  return (
    <Card className="p-6 md:p-8 bg-[#141414] border-[#262626]">
      <h2 className="text-xl font-medium text-white tracking-wide mb-6">
        Order Summary
      </h2>

      <div className="space-y-6">
        {/* Product */}
        <div className="flex gap-4">
          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-[#262626] bg-[#0A0A0A]">
            <Image
              src={productImage}
              alt={productName}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium mb-1">{productName}</h3>
            <p className="text-sm text-[#D4D4D4]">Digital Download</p>
          </div>
          <div className="text-right">
            <p className="text-white font-medium">{price} TND</p>
          </div>
        </div>

        <Separator className="bg-[#262626]" />

        {/* Pricing Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[#D4D4D4]">Subtotal</span>
            <span className="text-white">{price} TND</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#D4D4D4]">Tax</span>
            <span className="text-white">{tax} TND</span>
          </div>
        </div>

        <Separator className="bg-[#262626]" />

        {/* Total */}
        <div className="flex justify-between items-baseline">
          <span className="text-lg font-medium text-white">Total</span>
          <span className="text-2xl font-light text-white tracking-tight">
            {total} TND
          </span>
        </div>

        {/* Info */}
        <div className="pt-4 border-t border-[#262626]">
          <p className="text-xs text-[#D4D4D4] leading-relaxed">
            You will receive an email with download instructions immediately
            after completing your purchase. Instant access to all 1500 SC Art Visual.
          </p>
        </div>
      </div>
    </Card>
  );
}
