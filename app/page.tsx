import { ProductGallery } from "@/components/product/ProductGallery";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { IncludedList } from "@/components/product/IncludedList";
import { SpecsAccordion } from "@/components/product/SpecsAccordion";
import { PurchaseBar } from "@/components/product/PurchaseBar";
import { Badge } from "@/components/ui/badge";
import { product } from "@/lib/data/product";

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="border-b border-[#262626] py-12 md:py-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
        <div className="container-elegant">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge
              variant="outline"
              className="border-[#404040] text-[#E5E5E5] px-4 py-1.5 tracking-wider"
            >
              عرض محدود ⏳ أسرع قبل ما يوفّى الفرصة
            </Badge>

            <h1 className="text-gradient">
              {product.name}
            </h1>

            <p className="text-lg md:text-xl text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto whitespace-pre-line" dir="rtl">
              {product.tagline}
            </p>

            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-white">
                  1500
                </p>
                <p className="text-sm text-[#A3A3A3] mt-1">Clips</p>
              </div>
              <div className="h-12 w-px bg-[#262626]" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-white">HD</p>
                <p className="text-sm text-[#A3A3A3] mt-1">Quality</p>
              </div>
              <div className="h-12 w-px bg-[#262626]" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-white">
                  {product.price} <span className="text-2xl">TND</span>
                </p>
                <p className="text-sm text-[#A3A3A3] mt-1 line-through">50 TND</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Product Details */}
            <div className="lg:col-span-2 space-y-16">
              {/* Gallery */}
              <div className="fade-in">
                <ProductGallery
                  previews={product.images.previews}
                  productName={product.name}
                />
              </div>

              {/* Description */}
              <div className="fade-in-up">
                <h2 className="mb-6 text-right" dir="rtl">علاش تختار الباك هذا؟</h2>
                <div className="space-y-4 text-[#E5E5E5] text-lg leading-relaxed" dir="rtl">
                  <p>
                    تعبت من المونتاج وتضيّع في الوقت بالساعات؟
                    <br />
                    عملنا باك فيه أكثر من 1500 موشن غرافيك جاهز للاستعمال
                    <br />
                    تحطّهم في الفيديو متاعك في ثانية وتخرّج محتوى يضرب في العين
                  </p>
                  <p>
                    ما عادش ساعات في الأنيماشن ولا تخلّص فيديو إيديتور كل مرة
                    <br />
                    الباك هذا يعطيك موشن غرافيك برفسيونال بجودة عالية،
                    <br />
                    وحاجة لو تعملها بروحك توفاك برشة فلوس
                  </p>
                  <p>
                    يناسب صناع المحتوى والّي يمنتجو
                    <br />
                    كان تعمل رييلز، تيك توك، ولا يوتيوب شورتس — الباك هذا فيه كل شي تحتاجو
                  </p>
                </div>
              </div>

              {/* Features */}
              <div id="features" className="fade-in-up">
                <h2 className="mb-8">Key Features</h2>
                <FeatureGrid features={product.features} />
              </div>

              {/* What's Included */}
              <div className="fade-in-up">
                <h2 className="mb-6">What&apos;s Included</h2>
                <IncludedList items={product.included} />
              </div>

              {/* Specifications */}
              <div id="specs" className="fade-in-up">
                <h2 className="mb-6">Specifications</h2>
                <SpecsAccordion specs={product.specs} />
              </div>
            </div>

            {/* Right Column - Purchase Bar */}
            <div className="lg:col-span-1">
              <PurchaseBar productName={product.name} price={product.price} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing for Mobile Purchase Bar */}
      <div className="h-32 lg:hidden" />
    </div>
  );
}
