export interface Experience {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    name: "Spa & Wellness",
    description: "Ancient healing traditions meet modern luxury in our overwater spa. Surrender to the rhythm of the tides as expert therapists restore body and soul.",
    icon: "sparkles"
  },
  {
    id: 2,
    name: "Sunset Cruises",
    description: "Glide across crystalline waters aboard our private dhoni as the sky transforms into a canvas of amber and gold. Champagne in hand, worries left ashore.",
    icon: "sunset"
  },
  {
    id: 3,
    name: "Private Dining",
    description: "From sandbank feasts under the stars to in-villa chef's tables, every meal becomes an unforgettable moment crafted exclusively for you.",
    icon: "utensils"
  },
  {
    id: 4,
    name: "Scuba Diving",
    description: "Descend into a world of vibrant coral gardens and majestic manta rays. Our PADI-certified guides lead you through the ocean's most spectacular secrets.",
    icon: "waves"
  },
  {
    id: 5,
    name: "Beach Yoga",
    description: "Greet the dawn with sun salutations on powder-white sand. The whisper of waves and warmth of rising sun create the perfect meditation space.",
    icon: "heart"
  }
];