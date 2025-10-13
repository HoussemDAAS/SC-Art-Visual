# SC Art Visual - Landing Page

A premium, elegant monochrome landing page for digital product sales built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## 🎨 Design Features

- **Monochrome Elegance**: Pure black and white color scheme with sophisticated gray variations
- **Minimalist Typography**: Clean, readable fonts with careful attention to spacing and hierarchy
- **Smooth Animations**: Subtle fade-in effects and smooth transitions
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Grayscale Images**: All images automatically converted to grayscale for consistency

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📸 Adding Product Images

Place your product images in the `public/images/product/` directory:

- `hero.jpg` - Main hero image (recommended: 1920x1080px)
- `preview-1.jpg` to `preview-5.jpg` - Gallery preview images
- `thumb-1.jpg` to `thumb-5.jpg` - Thumbnail images (optional, can use same as previews)

**Note**: All images will be automatically converted to grayscale via CSS filters to maintain the monochrome aesthetic.

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Hero Image**: 1920x1080px (16:9 aspect ratio)
- **Preview Images**: 1280x720px minimum
- **Thumbnails**: 200x200px minimum
- **File Size**: Optimize images before uploading (recommended < 500KB each)

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main landing page
│   ├── checkout/page.tsx     # Checkout page
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles & theme
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   └── Footer.tsx        # Footer with social links
│   ├── product/
│   │   ├── ProductGallery.tsx    # Image gallery with lightbox
│   │   ├── FeatureGrid.tsx       # Features grid
│   │   ├── IncludedList.tsx      # What's included list
│   │   ├── SpecsAccordion.tsx    # Specifications accordion
│   │   └── PurchaseBar.tsx       # Sticky purchase card
│   ├── checkout/
│   │   ├── OrderSummary.tsx      # Order summary card
│   │   ├── PaymentSelector.tsx   # Payment method selector
│   │   └── BillingForm.tsx       # Billing information form
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── types.ts              # TypeScript type definitions
│   ├── utils.ts              # Utility functions
│   └── data/
│       └── product.ts        # Product data
└── public/
    └── images/
        └── product/          # Product images directory
```

## 🎨 Customization

### Colors

The monochrome color palette is defined in `app/globals.css`:

```css
--background-primary: #000000;
--background-secondary: #0A0A0A;
--background-card: #141414;
--gray-900 to --gray-100: Various gray shades
```

### Product Data

Edit `lib/data/product.ts` to customize:
- Product name, tagline, and description
- Price
- Features list
- What's included items
- Technical specifications

### Typography

The project uses Geist Sans font family with multiple weights (300-700). Typography hierarchy is defined in `app/globals.css`.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library (ready to use)

## 📦 Key Features

### Landing Page
- Hero section with key stats
- Interactive product gallery with lightbox
- Feature grid with icons
- What's included section
- Expandable specifications accordion
- Sticky purchase card (desktop) / fixed bar (mobile)

### Checkout Page
- Order summary with product preview
- Payment method selection (Credit Card, PayPal)
- Billing information form
- Secure checkout indicators
- Form validation
- Responsive layout

## 🎯 SEO & Performance

- Server-side rendering with Next.js 15
- Optimized images with Next.js Image component
- Semantic HTML structure
- Fast page loads
- Mobile-first responsive design

## 📝 License

This project is built for SC Art Visual. All rights reserved.

## 🤝 Support

For questions or support, contact: contact@scartvisual.com

---

Built with ❤️ using modern web technologies


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
