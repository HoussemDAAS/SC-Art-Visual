
**Project Overview:**
Build a mobile-first, elegant single-product landing page called "SC Art Visual" using Next.js 15 (App Router), Tailwind CSS, and shadcn/ui. Focus on a sophisticated black, white, and gray monochrome color scheme that conveys luxury and professionalism. Simple two-page structure: product showcase → checkout with payment selection.

***

**Tech Stack:**

- Next.js 15 (App Router with TypeScript)
- Tailwind CSS v4
- shadcn/ui (Radix UI-based reusable components)
- Framer Motion (subtle micro-interactions only)
- Next.js Image component for optimization

**MCP Servers Available:**
You have access to these MCP servers to enhance development workflow:

1. **shadcn-ui MCP** - Use to quickly add and configure shadcn/ui components
2. **Firecrawl MCP** - Use to scrape design inspiration from luxury monochrome websites
3. **Magic MCP (@21st-dev/magic)** - Use to generate elegant UI components with commands like `/ui` or `/21` for professional React components

***

**Color Palette (Elegant Monochrome):**

```css
/* Primary Colors - Pure Monochrome */
--background-primary: #000000 (Pure Black)
--background-secondary: #0A0A0A (Near Black)
--background-card: #141414 (Soft Black)

/* Gray Variations - Create Depth */
--gray-900: #1A1A1A (Charcoal)
--gray-800: #262626 (Dark Gray)
--gray-700: #404040 (Medium Dark)
--gray-600: #525252 (Neutral Gray)
--gray-500: #737373 (Mid Gray)
--gray-400: #A3A3A3 (Light Gray)
--gray-300: #D4D4D4 (Pale Gray)
--gray-200: #E5E5E5 (Very Light)
--gray-100: #F5F5F5 (Off-White)

/* Text Colors */
--text-primary: #FFFFFF (Pure White)
--text-secondary: #D4D4D4 (Light Gray)
--text-tertiary: #A3A3A3 (Muted Gray)
--text-disabled: #737373 (Dim Gray)

/* Accent - Minimal Use */
--accent-primary: #FFFFFF (White - for CTAs)
--accent-hover: #E5E5E5 (Light Gray - hover state)

/* Borders & Dividers */
--border-subtle: #262626 (Very subtle)
--border-medium: #404040 (Defined borders)
```

Design philosophy: Use subtle gray gradients to create depth, rely on contrast and whitespace for elegance, minimal to no color accents.[^1][^2][^3]

***

**Typography:**

- **Primary Font**: Inter, Geist, or Helvetica Neue (clean, modern sans-serif)
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Hierarchy**:
    - H1: 40px mobile / 64px desktop (thin weight 300-400)
    - H2: 28px mobile / 40px desktop (medium weight 500)
    - H3: 22px mobile / 32px desktop
    - Body: 16px mobile / 18px desktop
    - Small: 14px
    - Captions: 12px
- **Letter Spacing**: Slightly increased for elegance (0.02em - 0.05em)
- **Line Height**: Generous (1.6 - 1.8) for readability[^4][^1]

***

## Page Structure (2 Pages)

### Page 1: Product Landing Page (`/page.tsx`)

**Design Approach:** Minimalist, high-contrast, sophisticated with ample whitespace.[^2][^3][^1]

**A. Hero Section**

- Brand logo: "SC ART VISUAL" (elegant thin typography)
- Product name with generous spacing
- Minimal tagline (one powerful sentence)
- Large, high-quality grayscale product image
- Price in large, elegant typography
- Primary CTA: White text on black background with subtle border hover effect
- Use subtle fade-in animation on load

**B. Product Gallery**

- Main showcase image (large, full-width on mobile)
- 3-5 thumbnail previews (horizontal scroll on mobile, grid on desktop)
- Click to change main image (smooth transition)
- Grayscale images only - maintain monochrome aesthetic
- Use Next.js Image with blur placeholder for elegance

**C. Product Description**

- Clean section with centered or left-aligned text
- Short, impactful overview (2-3 sentences)
- Use generous line-height and letter-spacing
- Gray text (\#D4D4D4) on black background

**D. Key Features Grid**

- 4-6 feature cards in responsive grid
- Each card: subtle gray border, icon, title, short description
- Minimal icons (line-style, not solid)
- Hover effect: subtle border color change

**E. What's Included**

- Clean checklist with custom checkmark icons
- List items:
    - File count and formats
    - Software compatibility
    - Resolution (1080p, 4K)
    - License type
    - Support included
    - Free updates
- Use thin divider lines between items

**F. Detailed Specifications**

- Accordion component (shadcn/ui)
- Sections: Technical Details, Usage Rights, Installation Guide
- Subtle expand/collapse animations
- Gray borders for separation

**G. Purchase Section**

- Sticky on mobile (fixed bottom bar)
- Clean card design with product summary
- Large price display
- "Purchase Now" button (inverted colors: white background, black text)
- Trust badges in monochrome (SSL, guarantee icons)

**H. Minimal Footer**

- Social icons (monochrome, outline style)
- Email contact
- Copyright in small gray text
- No clutter

**shadcn/ui Components to Use:**

- `Button` (primary CTA, variants for inverted styles)
- `Card` (feature cards, purchase section)
- `Badge` (format tags in subtle gray)
- `Accordion` (specifications)
- `Dialog` (image lightbox/zoom)
- `Separator` (thin divider lines)

***

### Page 2: Checkout Page (`/checkout/page.tsx`)

**Design Approach:** Clean form design with focus on simplicity and trust.[^1][^2]

**A. Page Header**

- Minimal nav with logo
- Progress indicator (optional): "Payment → Confirmation"

**B. Order Summary (Sidebar on Desktop, Top on Mobile)**

- Product thumbnail (small, grayscale)
- Product name
- Price breakdown (clean typography)
- Total in bold
- Subtle card with gray border

**C. Payment Method Selection**

- Clean radio button group (shadcn/ui RadioGroup)
- Options displayed as elegant cards:
    - Credit/Debit Card
    - PayPal
    - Other payment options
- Selected state: white border, others gray border
- Payment provider icons in monochrome

**D. Billing Information Form**

- Minimal, clean input fields (shadcn/ui Input)
- Fields:
    - Email address
    - Full name
    - Country (Select dropdown)
    - Optional: ZIP/Postal code
- Placeholder text in light gray
- Focus state: white border
- Proper validation and error messages in light gray

**E. Complete Purchase CTA**

- Large button spanning full width
- White background, black text (inverted)
- Hover: subtle gray background shift
- Loading state with spinner
- Success/error alerts (shadcn/ui Alert)

**F. Trust Elements**

- Monochrome badges: SSL Secure, Money-Back Guarantee
- Payment provider logos (grayscale)
- Small security text in gray

**shadcn/ui Components to Use:**

- `Card` (order summary)
- `RadioGroup` (payment selection)
- `Input` (form fields)
- `Label` (form labels)
- `Select` (country dropdown)
- `Button` (submit button)
- `Alert` (success/error messages)
- `Separator` (section dividers)

***

## File Structure

```
/app
  /page.tsx                    (Product landing page)
  /checkout
    /page.tsx                  (Checkout page)
  /layout.tsx
  /globals.css
  
/components
  /ui                          (shadcn/ui components)
    - button.tsx
    - card.tsx
    - badge.tsx
    - accordion.tsx
    - dialog.tsx
    - radio-group.tsx
    - input.tsx
    - label.tsx
    - select.tsx
    - alert.tsx
    - separator.tsx
  
  /product
    - ProductGallery.tsx       (image gallery with thumbnails)
    - FeatureGrid.tsx          (key features cards)
    - IncludedList.tsx         (what's included checklist)
    - SpecsAccordion.tsx       (technical specifications)
    - PurchaseBar.tsx          (sticky CTA bar for mobile)
  
  /checkout
    - OrderSummary.tsx         (order sidebar/top section)
    - PaymentSelector.tsx      (payment method radio group)
    - BillingForm.tsx          (billing information form)
    
  /layout
    - Navbar.tsx               (minimal header with logo)
    - Footer.tsx               (minimal footer)
    
/lib
  /data
    /product.ts                (single product data)
  /types.ts
  /utils.ts
  
/public
  /images
    /product                   (all grayscale images)
    /icons                     (monochrome line icons)
```


***

## Design Guidelines (Monochrome Elegance)

**1. Contrast is Key:**

- Use stark black/white contrasts for CTAs and important elements
- Gray variations for hierarchy and depth
- Never let elements blend - maintain clear separation[^3][^1]

**2. Whitespace is Luxury:**

- Generous padding and margins
- Don't crowd elements
- Let content breathe
- Mobile: 16-24px padding, Desktop: 32-64px padding[^4][^1]

**3. Subtle Animations:**

- Fade-in on scroll (opacity 0 → 1)
- Smooth hover transitions (200-300ms)
- Scale effects on cards (1.0 → 1.02)
- No flashy animations - keep it sophisticated

**4. Typography Hierarchy:**

- Use font weight and size for hierarchy
- Thin weights (300-400) for headlines
- Medium-bold (500-600) for subheadings
- Generous letter-spacing for elegance
- High contrast: white text on black, black on white[^2][^1]

**5. Borders \& Dividers:**

- Use subtle gray borders (\#262626)
- Thin lines (1px)
- Rounded corners (4-8px) for modern feel
- Avoid heavy borders

**6. Images:**

- All images should be grayscale/monochrome
- High quality, sharp focus
- Use Next.js Image with blur placeholder
- Maintain aspect ratios

***

## Responsive Design (Mobile-First)

**Mobile (< 768px):**

- Single column layouts
- Full-width cards and images
- Horizontal scroll galleries
- Fixed bottom purchase bar (white background, black text)
- Stacked form on checkout
- 16px base padding

**Tablet (768px - 1024px):**

- 2-column grids where appropriate
- Larger images
- Side-by-side elements
- 24px padding

**Desktop (> 1024px):**

- 3-column feature grids
- Sidebar layout on checkout (form left, summary right)
- Larger typography
- Hover effects enabled
- 48-64px padding
- Max-width container (1280px)

***

## shadcn/ui Installation \& Configuration

```bash
# Initialize shadcn/ui with custom config
npx shadcn@latest init

# During init, choose:
# - Style: New York (more elegant)
# - Base color: Neutral (perfect for monochrome)
# - CSS variables: Yes

# Add all required components
npx shadcn@latest add button card badge accordion dialog radio-group input label select alert separator
```

**Custom Tailwind Config for Monochrome:**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        border: "hsl(0 0% 15%)",
        background: "hsl(0 0% 0%)",
        foreground: "hsl(0 0% 100%)",
        primary: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 0%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(0 0% 70%)",
        },
      },
    },
  },
}
```


***

## Using MCP Servers During Development

**1. shadcn-ui MCP:**

- Ask to add components: "Add shadcn button and card components"
- Request variants: "Create a ghost button variant for shadcn"

**2. Firecrawl MCP:**

- Scrape luxury monochrome sites for inspiration
- Example: "Use Firecrawl to analyze the design of [luxury brand website]"
- Extract color schemes and layout patterns

**3. Magic MCP (@21st-dev/magic):**

- Generate UI components quickly:
    - `/ui Create an elegant product card with grayscale design`
    - `/21 Design a minimalist checkout form`
    - `Create a feature grid with monochrome icons`
- Refine existing components:
    - `/ui Refine this button to have a subtle hover effect`

***

## Image Optimization (Grayscale Focus)

```tsx
import Image from 'next/image'

// Hero image - priority load, grayscale filter
<Image
  src="/images/product/hero.jpg"
  alt="SC Art Visual - Premium SC Art Visual"
  width={1200}
  height={800}
  priority={true}
  className="grayscale filter"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>

// Gallery images - lazy load
<Image
  src="/images/product/preview1.jpg"
  alt="SC Art Visual preview"
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="grayscale transition-all duration-300 hover:scale-105"
/>
```

**CSS for ensuring monochrome:**

```css
/* Apply to all images globally */
img {
  filter: grayscale(100%);
}

/* Or use Tailwind classes */
.grayscale {
  filter: grayscale(100%);
}
```


***

## Performance Priorities

1. **Minimal JavaScript** - Rely on CSS for most interactions
2. **Optimized fonts** - Use `next/font` for Inter/Geist
3. **Image optimization** - WebP format, proper sizing, lazy loading
4. **Code splitting** - Dynamic imports for heavy components
5. **Lighthouse score target**: 95+ on mobile

***

## Data Structure

```typescript
// /lib/types.ts
export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  description: string
  images: {
    hero: string
    previews: string[]
    thumbnails: string[]
  }
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  included: Array<{
    label: string
    value: string
  }>
  specs: {
    fileCount: number
    formats: string[]
    compatibility: string[]
    resolution: string[]
    frameRate: string
    fileSize: string
    license: string
  }
}
```


***

## Final Instructions

Generate a complete, production-ready Next.js 15 app for "SC Art Visual" with:

- **Strict monochrome palette**: Black, white, and gray only
- **2 pages**: Elegant landing page + minimalist checkout
- **shadcn/ui components** properly configured with monochrome theme
- **Mobile-first responsive** design
- **Optimized Next.js Images** with grayscale filters
- **Clean TypeScript** with proper typing
- **Sophisticated aesthetics** - luxury brand feel
- **High performance** - 95+ Lighthouse score
- **Generous whitespace** - don't crowd elements
- **Subtle animations** - fade, scale, smooth transitions only

**Brand Identity:** SC Art Visual represents premium, professional, sophisticated SC Art Visual. The monochrome design conveys timeless elegance, clarity, and luxury without distraction.[^1][^2][^4]

Use the available MCP servers (shadcn-ui, Firecrawl, Magic MCP) throughout development to accelerate component creation and ensure design consistency.
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.wix.com/studio/blog/black-and-white-websites

[^2]: https://webflow.com/list/black-white

[^3]: https://healywebdesign.co.uk/news/six-captivating-grayscale-web-designs/

[^4]: https://russell-collection.com/monochromatic-color-schemes/

[^5]: https://dribbble.com/search/black-and-white-website

[^6]: https://99designs.com/inspiration/websites/black-and-white

[^7]: https://www.awwwards.com/websites/silver/

[^8]: https://piktochart.com/tips/monochrome-color-palette

[^9]: https://mycodelesswebsite.com/black-and-white-website-examples/

[^10]: https://www.siteinspire.com/websites/category/greyscale

[^11]: https://thewhitelabelagency.com/black-websites/

[^12]: https://flatuicolors.com

[^13]: https://dribbble.com/search/grayscale

[^14]: https://www.behance.net/search/projects/black and white website

[^15]: https://www.figma.com/resource-library/color-combinations/

[^16]: https://naldzgraphics.net/greyscale-website-designs/

[^17]: https://coolors.co/palettes/trending/monochromatic

[^18]: https://www.kseniiakrasilich.com/squarespace-help/luxurious-color-palette

[^19]: https://colorhunt.co/palettes/popular

[^20]: https://hookagency.com/blog/luxury-website-colors/

