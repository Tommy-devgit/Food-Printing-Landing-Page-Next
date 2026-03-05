import type { Feature, NavItem, Plan, Stat, Testimonial } from "@/types";

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/technology", label: "Technology", icon: "Cpu" },
  { href: "/recipes", label: "Recipes", icon: "ChefHat" },
  { href: "/demo", label: "Demo", icon: "Play" },
  { href: "/pricing", label: "Pricing", icon: "BadgeDollarSign" },
  { href: "/contact", label: "Contact", icon: "Mail" },
];

export const stats: Stat[] = [
  { label: "Ingredients", value: "30+" },
  { label: "Layer Resolution", value: "0.5mm" },
  { label: "Avg Print Time", value: "2-10 min" },
  { label: "Ethiopian Kitchens", value: "120+" },
];

export const features: Feature[] = [
  {
    title: "Photo To Recipe AI",
    description:
      "Computer vision reads plating shape and texture, then creates a printable recipe graph.",
    image: "/images/features/ai-recipe.svg",
  },
  {
    title: "Adaptive Nozzle Control",
    description:
      "Real-time pressure and heat adjustments keep layers consistent across sauces, dough, and cream.",
    image: "/images/features/nozzle.svg",
  },
  {
    title: "Ingredient Cartridge System",
    description:
      "Smart cartridges snap in instantly and auto-calibrate before each print.",
    image: "/images/features/cartridge.svg",
  },
  {
    title: "Chef Mode",
    description:
      "Save custom profiles, tweak every layer, and duplicate successful prints in one tap.",
    image: "/images/features/chef-mode.svg",
  },
];

export const plans: Plan[] = [
  {
    name: "Home Edition",
    price: "ETB 89,900",
    description: "For home creators and small kitchens in Ethiopia.",
    items: ["Printer unit", "Teff and sauce starter cartridges", "Companion app"],
  },
  {
    name: "Pro Kitchen",
    price: "ETB 139,900",
    description: "For chef teams and high-volume workflows.",
    items: ["Dual nozzle module", "Pro analytics", "Priority support in Addis Ababa"],
  },
  {
    name: "Restaurant Edition",
    price: "ETB 229,900",
    description: "For multi-station operations and food labs.",
    items: ["Batch queue mode", "Team workspace", "Onsite onboarding across Ethiopia"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Chef Hana",
    role: "Culinary Director, Addis Ababa",
    quote: "Food Printer cut our prep cycle and let us scale modern takes on Ethiopian flavors.",
    image: "/images/testimonials/chef-marco.svg",
  },
  {
    name: "M. Bekele",
    role: "Bakery Owner",
    quote: "Custom coffee and honey dessert designs that took hours now print in minutes.",
    image: "/images/testimonials/baker.svg",
  },
  {
    name: "Abyssinia Food Lab",
    role: "Food Tech Studio",
    quote: "The repeatability is excellent, especially for teff-based and nutrition-focused recipes.",
    image: "/images/testimonials/lab.svg",
  },
];
