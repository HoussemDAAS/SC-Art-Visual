"use client";

import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PaymentSelector } from "@/components/checkout/PaymentSelector";
import { Shield, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { product } from "@/lib/data/product";
import { PaymentMethod } from "@/lib/types";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("d17");

  return (
    <div className="pt-16 md:pt-20 pb-12 md:pb-20">
      <div className="container-elegant max-w-6xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#A3A3A3] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-sm tracking-wide">العودة للمنتج / Back to Product</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide mb-3">
            اختر طريقة الدفع
          </h1>
          <p className="text-lg text-[#E5E5E5]">
            Choose Your Payment Method
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Method */}
          <div className="lg:col-span-2 space-y-6">
            {/* Security Notice */}
            <Alert className="bg-[#141414] border-[#262626]">
              <Lock className="w-4 h-4 text-white" strokeWidth={1.5} />
              <AlertDescription className="text-[#E5E5E5] text-center">
                🔒 معلوماتك آمنة ومحمية. سيتم تفعيل حسابك فوراً بعد تأكيد الدفع.
                <br />
                Your information is secure. Account activated immediately after payment confirmation.
              </AlertDescription>
            </Alert>

            {/* Payment Method Selector */}
            <PaymentSelector
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <OrderSummary
                productName={product.name}
                productImage={product.images.hero}
                price={product.price}
              />

              {/* Security Badges */}
              <div className="space-y-3 pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-3 text-sm text-[#D4D4D4]">
                  <Shield className="w-4 h-4" strokeWidth={1.5} />
                  <span>ضمان استرجاع المال لمدة 30 يوم</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#D4D4D4]">
                  <Lock className="w-4 h-4" strokeWidth={1.5} />
                  <span>دفع آمن ومحمي 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
