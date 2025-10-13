export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  images: {
    hero: string;
    previews: string[];
    thumbnails: string[];
  };
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  included: Array<{
    label: string;
    value: string;
  }>;
  specs: {
    fileCount: number;
    formats: string[];
    compatibility: string[];
    resolution: string[];
    frameRate: string;
    fileSize: string;
    license: string;
  };
}

export interface CheckoutFormData {
  email: string;
  fullName: string;
  country: string;
  postalCode?: string;
}

export type PaymentMethod = "d17" | "poste-tunisie";
