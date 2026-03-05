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
  { label: "Chef Teams", value: "120+" },
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
    name: "Food Printer Basic",
    price: "$699",
    description: "For home creators and small kitchens.",
    items: ["Printer unit", "Starter cartridges", "Companion app"],
  },
  {
    name: "Food Printer Pro",
    price: "$1,099",
    description: "For chef teams and high-volume workflows.",
    items: ["Dual nozzle module", "Pro analytics", "Priority support"],
  },
  {
    name: "Restaurant Edition",
    price: "$1,799",
    description: "For multi-station operations and R and D labs.",
    items: ["Batch queue mode", "Team workspace", "Onsite onboarding"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Chef Marco",
    role: "Culinary Director",
    quote: "Food Printer cut our prep cycle and unlocked menu experiments we could not scale before.",
    image: "/images/testimonials/chef-marco.svg",
  },
  {
    name: "A. Reed",
    role: "Bakery Owner",
    quote: "Custom dessert designs that used to take hours now happen in minutes.",
    image: "/images/testimonials/baker.svg",
  },
  {
    name: "Kitchen Lab",
    role: "Food Tech Studio",
    quote: "The repeatability is excellent, especially for controlled nutrition recipes.",
    image: "/images/testimonials/lab.svg",
  },
];
