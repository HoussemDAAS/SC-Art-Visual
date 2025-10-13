"use client";

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";
import { PaymentMethod } from "@/lib/types";

interface PaymentSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

export function PaymentSelector({
  selectedMethod,
  onMethodChange,
}: PaymentSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white tracking-wide">
        طريقة الدفع / Payment Method
      </h3>

      <RadioGroup
        value={selectedMethod}
        onValueChange={(value) => onMethodChange(value as PaymentMethod)}
        className="space-y-4"
      >
        {/* D17 Payment */}
        <div className="space-y-3">
          <Label htmlFor="d17" className="cursor-pointer">
            <Card
              className={`p-4 transition-all duration-200 ${
                selectedMethod === "d17"
                  ? "bg-[#1A1A1A] border-white"
                  : "bg-[#141414] border-[#262626] hover:border-[#404040]"
              }`}
            >
              <div className="flex items-center gap-4">
                <RadioGroupItem
                  value="d17"
                  id="d17"
                  className="border-[#404040] text-white"
                />
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/product/logod17.png"
                      alt="D17 Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">D17</p>
                    <p className="text-xs text-[#D4D4D4]">دفع فوري</p>
                  </div>
                </div>
              </div>
            </Card>
          </Label>

          {/* D17 Instructions */}
          {selectedMethod === "d17" && (
            <Card className="p-6 bg-[#0A0A0A] border-[#404040] animate-in fade-in-50 slide-in-from-top-2">
              <div className="space-y-4 text-right" dir="rtl">
                <h4 className="text-white font-medium text-lg">
                  تعليمات الدفع عبر D17
                </h4>
                
                <div className="space-y-3 text-[#E5E5E5]">
                  <p className="text-base">
                    نقبل الدفع على D17 على الرقم:{" "}
                    <span className="text-white font-bold text-xl">52488485</span>
                  </p>
                  
                  <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 space-y-2">
                    <p className="text-sm text-[#D4D4D4]">ملاحظة مهمة:</p>
                    <p className="text-sm">
                      الرجاء إرسال صورة للشاشة أو الوصل لتأكيد الدفع
                    </p>
                  </div>

                  <p className="text-sm">أرسل إثبات الدفع عبر:</p>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button
                    type="button"
                    onClick={() => window.open('https://wa.me/21652488485', '_blank')}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب 52488485
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={() => window.open('https://www.instagram.com/sc_art_visual/', '_blank')}
                    className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    إنستغرام
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Poste Tunisie Payment */}
        <div className="space-y-3">
          <Label htmlFor="poste-tunisie" className="cursor-pointer">
            <Card
              className={`p-4 transition-all duration-200 ${
                selectedMethod === "poste-tunisie"
                  ? "bg-[#1A1A1A] border-white"
                  : "bg-[#141414] border-[#262626] hover:border-[#404040]"
              }`}
            >
              <div className="flex items-center gap-4">
                <RadioGroupItem
                  value="poste-tunisie"
                  id="poste-tunisie"
                  className="border-[#404040] text-white"
                />
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">
                    <Image
                      src="/images/product/logoPoste.png"
                      alt="Poste Tunisie Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Poste Tunisie</p>
                    <p className="text-xs text-[#D4D4D4]">البريد التونسي</p>
                  </div>
                </div>
              </div>
            </Card>
          </Label>

          {/* Poste Tunisie Instructions */}
          {selectedMethod === "poste-tunisie" && (
            <Card className="p-6 bg-[#0A0A0A] border-[#404040] animate-in fade-in-50 slide-in-from-top-2">
              <div className="space-y-4 text-right" dir="rtl">
                <h4 className="text-white font-medium text-lg">
                  تعليمات الدفع عبر البريد التونسي
                </h4>
                
                <div className="space-y-3 text-[#E5E5E5]">
                  <p className="text-base">
                    نقبل الدفع عن طريق البريد
                  </p>
                  
                  <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 space-y-2">
                    <p className="text-sm">يرجى البعث لهذا الحساب:</p>
                    <p className="text-white font-mono text-lg tracking-wider text-center py-2">
                      5359401712238795
                    </p>
                  </div>
                  
                  <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 space-y-2">
                    <p className="text-sm text-[#D4D4D4]">ملاحظة مهمة:</p>
                    <p className="text-sm">
                      بعد الدفع يرجى إرسال رسالة في الدعم أو على واتساب 52488485
                      فيها صورة للوصل لتأكيد الدفع وشحن حسابك
                    </p>
                  </div>

                  <p className="text-sm">أرسل إثبات الدفع عبر:</p>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button
                    type="button"
                    onClick={() => window.open('https://wa.me/21652488485', '_blank')}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب 52488485
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={() => window.open('https://www.instagram.com/sc_art_visual/', '_blank')}
                    className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    إنستغرام
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </RadioGroup>
    </div>
  );
}
