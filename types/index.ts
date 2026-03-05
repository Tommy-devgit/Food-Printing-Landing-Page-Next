export type NavItem = {
  href: string;
  label: string;
  icon: "Home" | "Cpu" | "ChefHat" | "Play" | "BadgeDollarSign" | "Mail";
};

export type Feature = {
  title: string;
  description: string;
  image: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Plan = {
  name: string;
  price: string;
  description: string;
  items: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};
