export interface Villa {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  size: string;
  features: string[];
  gradient: string;
  accent: string;
}

export const villas: Villa[] = [
  {
    id: 1,
    name: "Ocean Villa",
    subtitle: "Above the Crystal Waters",
    description: "Suspended over turquoise lagoons, our Ocean Villas offer uninterrupted panoramic views of the Indian Ocean. Wake to the sound of gentle waves and drift to sleep under a canopy of stars.",
    price: "$1,200",
    size: "120m²",
    features: ["Private Deck", "Glass Floor Panel", "Ocean View", "Butler Service"],
    gradient: "from-cyan-800/40 to-blue-950/60",
    accent: "#2D7D9A"
  },
  {
    id: 2,
    name: "Sunset Villa",
    subtitle: "Where Day Meets Night",
    description: "Perfectly positioned to capture the golden hour, each Sunset Villa transforms your evening into a private spectacle of color. Floor-to-ceiling windows frame the horizon like a living painting.",
    price: "$1,800",
    size: "165m²",
    features: ["Sunset Terrace", "Infinity Plunge Pool", "Wine Cellar", "Spa Bath"],
    gradient: "from-orange-700/40 to-rose-950/60",
    accent: "#D4A853"
  },
  {
    id: 3,
    name: "Private Pool Villa",
    subtitle: "Your Own Tropical Haven",
    description: "Nestled among lush tropical gardens, these villas feature private infinity pools that seem to merge with the ocean beyond. Complete with outdoor rain showers and daybed pavilions.",
    price: "$2,400",
    size: "210m²",
    features: ["Private Infinity Pool", "Garden Courtyard", "Outdoor Shower", "Dining Pavilion"],
    gradient: "from-emerald-800/40 to-teal-950/60",
    accent: "#4A9B7F"
  },
  {
    id: 4,
    name: "Royal Beach Residence",
    subtitle: "The Pinnacle of Luxury",
    description: "Our crown jewel. A sprawling beachfront sanctuary with two master suites, a private chef's kitchen, cinema room, and direct beach access. This is where legends are made.",
    price: "$5,200",
    size: "420m²",
    features: ["Two Master Suites", "Private Chef", "Cinema Room", "Beach Access"],
    gradient: "from-amber-700/40 to-yellow-950/60",
    accent: "#D4A853"
  }
];