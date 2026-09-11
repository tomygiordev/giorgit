export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  trend?: string;
  iconName: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProductDemo {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  tag: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviewsCount: number;
}
