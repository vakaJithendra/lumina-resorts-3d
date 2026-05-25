export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  villa: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Chen",
    location: "Hong Kong",
    text: "Lumina redefined what luxury means to us. The Ocean Villa felt like floating in a dream — the glass floor panel revealing the reef below was simply magical.",
    rating: 5,
    villa: "Ocean Villa"
  },
  {
    id: 2,
    name: "James & Victoria Ashford",
    location: "London",
    text: "Twenty years of traveling the world, and nothing compares. The private dining on the sandbank, under a billion stars, was the most romantic moment of our lives.",
    rating: 5,
    villa: "Royal Beach Residence"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    location: "Paris",
    text: "The attention to detail is extraordinary. From the personalized welcome to the sunset yoga sessions — every moment felt curated just for us. We're already planning our return.",
    rating: 5,
    villa: "Sunset Villa"
  },
  {
    id: 4,
    name: "Hiroshi Tanaka",
    location: "Tokyo",
    text: "In Japanese, we say 'omotenashi' — hospitality that anticipates needs before they arise. Lumina embodies this philosophy perfectly. A masterclass in service.",
    rating: 5,
    villa: "Private Pool Villa"
  },
  {
    id: 5,
    name: "Elena & Marco Rossi",
    location: "Milan",
    text: "We came for our anniversary and left with memories that will last a lifetime. The spa, the diving, the food — every experience was beyond our wildest dreams.",
    rating: 5,
    villa: "Sunset Villa"
  }
];