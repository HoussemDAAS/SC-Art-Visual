"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";

interface PurchaseBarProps {
  productName: string;
  price: number;
}

export function PurchaseBar({ productName, price }: PurchaseBarProps) {
  return (
    <>
      {/* Desktop Version - Sticky Card */}
      <div className="hidden lg:block sticky top-24">
        <Card className="p-8 bg-[#141414] border-[#262626]">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-white tracking-wide mb-2">
                {productName}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-light text-white tracking-tight">
                  {price} TND
                </span>
                <span className="text-sm text-[#A3A3A3] line-through">50 TND</span>
              </div>
              <p className="text-xs text-[#D4D4D4] mt-1">تخفيض 56% - لفترة محدودة / 56% OFF - Limited Time</p>
            </div>

            <Link href="/checkout" className="block">
              <Button
                size="lg"
                className="w-full bg-[#22C55E] text-white hover:bg-[#16A34A] font-medium tracking-wide h-12 transition-all duration-300"
              >
                اشري
              </Button>
            </Link>

            <div className="space-y-3 pt-4 border-t border-[#262626]">
              <div className="flex items-center gap-3 text-sm text-[#D4D4D4]">
                <Lock className="w-4 h-4" strokeWidth={1.5} />
                <span>دفع آمن ومحمي 100%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile Version - Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black/95 backdrop-blur-sm border-t border-[#262626] p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#D4D4D4] mb-1">السعر الكامل / Total Price</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-light text-white tracking-tight">
                {price} TND
              </p>
              <span className="text-xs text-[#A3A3A3] line-through">50 TND</span>
            </div>
          </div>
          <Link href="/checkout" className="flex-1 max-w-[200px]">
            <Button
              size="lg"
              className="w-full bg-[#22C55E] text-white hover:bg-[#16A34A] font-medium tracking-wide h-12"
            >
              اشري
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
