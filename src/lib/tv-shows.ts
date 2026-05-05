export interface Show {
  id: string;
  title: string;
  titleSecondary?: string;
  synopsis: string;
  rating: number;
  year: number;
  genres: string[];
  poster: string;
  banner: string;
  cast: string[];
  trailer: string;
  fontClass?: string;
  secondaryFontClass?: string;
  monarchFont?: string;
  showFont?: string;
}

export const shows: Show[] = [
  {
    id: "1",
    title: "Monarch: The First Era",
    synopsis: "The untold story of the foundation of Monarch TV Studios and the discovery of the extraordinary.",
    rating: 9.8,
    year: 2024,
    genres: ["Documentary", "Mystery", "History"],
    poster: "/monster/show-1.png",
    banner: "/monster/hero-banner.png",
    cast: ["Elias Thorne", "Sarah Jenkins", "Dr. Aris Vane"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "The Deep Echo",
    synopsis: "Deep below the ocean's surface, a team of researchers discovers a sentient species that communicates through bioluminescence.",
    rating: 8.5,
    year: 2023,
    genres: ["Sci-Fi", "Thriller", "Horror"],
    poster: "/monster/show-2.png",
    banner: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    cast: ["Luna Vesper", "Marcus Reed", "Elena Sol"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "Skyborne Legends",
    synopsis: "When the sky starts to fall, the last survivors must find a way to the legendary floating islands of Monarch.",
    rating: 9.2,
    year: 2025,
    genres: ["Adventure", "Fantasy", "Action"],
    poster: "/monster/show-3.png",
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    cast: ["Commander Jack West", "Dr. Anya Petrova", "Kaelen Voss"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "4",
    title: "The Silver Guard",
    synopsis: "In a world of liquid metal, a group of outcasts must protect the last remaining human sanctuary.",
    rating: 7.8,
    year: 2024,
    genres: ["Action", "Cyberpunk", "Drama"],
    poster: "/monster/show-4.png",
    banner: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    cast: ["Julian Blackwood", "Sophie Laurent", "Henri Moreau"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "5",
    title: "Cyber Pulse",
    synopsis: "A rogue AI starts merging with the city's power grid, and a group of hackers must dive into the digital abyss to stop it.",
    rating: 8.2,
    year: 2024,
    genres: ["Cyberpunk", "Action", "Thriller"],
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    cast: ["Zero", "Nova", "The Architect"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "6",
    title: "Emerald Kingdom",
    synopsis: "In a world reclaimed by nature, a young scout must unite warring tribes to protect the last standing forest from a mechanical threat.",
    rating: 8.7,
    year: 2023,
    genres: ["Nature", "Fantasy", "Action"],
    poster: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
    cast: ["Sage Green", "Forest Thorne", "Oakley Rivers"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
