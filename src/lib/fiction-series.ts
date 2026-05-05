export interface FictionSeries {
  id: string;
  title: string;
  titleSecondary?: string;
  description: string;
  year: number;
  img: string;
  fontClass: string;
  secondaryFontClass?: string;
}

export const fictionSeries: FictionSeries[] = [
  {
    id: "f1",
    title: "Hannibal",
    titleSecondary: "The Dragon of Carthage",
    description: "Embark on an epic multi-season journey through the captivating life of Hannibal Barca, tracing his origins from humble beginnings to his legendary military campaigns, culminating in the mysterious and awe-inspiring disappearance of the Carthaginian civilization. This gripping series delves into the complex characters, fierce battles, and ancient secrets that shaped history.",
    year: 2026,
    img: "2.png",
    fontClass: "font-cinzel-deco font-bold",
    secondaryFontClass: "font-cinzel-deco font-normal"
  },
  {
    id: "f2",
    title: "Didon",
    titleSecondary: "The Weeked Queen",
    description: "Experience the extraordinary saga of Queen Dido in this multi-season epic series, a legendary founder of the Carthaginian dynasty rulers. Against all odds, Dido unearths a thriving civilization already established on the shores of Byrsa and transforms it into an empire of unparalleled grandeur. Join us as we delve into her inspiring journey of leadership, resilience, and legacy that shaped one of history’s greatest civilizations.",
    year: 2026,
    img: "4.png",
    fontClass: "font-cinzel font-bold",
    secondaryFontClass: "font-cinzel font-normal"
  },
  {
    id: "f3",
    title: "Reis Birdy",
    description: "Embark on an exhilarating journey through the epic saga of Jack Ward, the legendary Corsair of the Mediterranean. This gripping single-season series vividly portrays his rise from humble beginnings in Kent, England, to becoming a formidable maritime force in Tunis, serving the Bey of the era. Filled with daring adventures, riveting anecdotes, and maritime legend, Reis Birdy’s story captures the fierce spirit and daring exploits that made him a true icon of the seas.",
    year: 2026,
    img: "1.png",
    fontClass: "font-im-fell"
  },
  {
    id: "f4",
    title: "Sallam the Interpreter",
    titleSecondary: "A journey to Gog & Magog Realm",
    description: "Embark on an epic journey through time with our multi-season fiction series, chronicling the legendary travels of Sallam, a visionary interpreter and explorer of the 9th century. Set in a mysterious land plagued by sinister creatures trapped behind a dimensional wall, this gripping saga unveils Sallam’s daring quests, uncovering secrets that could alter the fabric of reality itself.",
    year: 2027,
    img: "3.png",
    fontClass: "font-ruwudu font-bold",
    secondaryFontClass: "font-ruwudu font-normal"
  },
  {
    id: "f5",
    title: "Prophesy",
    description: "Discover the gripping multi-season saga of a boy born with extraordinary superpowers who, instead of using his gifts for good, is drawn down a dark path of ambition and chaos, seeking to dominate the world. This compelling series explores themes of power, redemption, and the thin line between hero and villain as the protagonist's journey unfolds.",
    year: 2027,
    img: "6.png",
    fontClass: "font-nosifer font-bold"
  },
  {
    id: "f6",
    title: "Mijouj DownTown",
    description: "Set in 2113, this trilogy of science fiction chronicles humanity's expansion across multiple lunar bases. When a catastrophic accident occurs in a dimensional portal beneath a scientific particle accelerator on one of these bases, it unleashes a hostile alien race that devastates Earth. Despite humanity's fierce and relentless counterattack leading to eventual victory, the cost is staggering, leaving Earth battered and struggling to rebuild in the aftermath of the catastrophe.",
    year: 2027,
    img: "5.png",
    fontClass: "font-orbitron"
  },
  {
    id: "f7",
    title: "The two Horned King",
    description: "Discover the gripping multi-season saga of a boy born with extraordinary superpowers who, instead of using his gifts for good, is drawn down a dark path of ambition and chaos, seeking to dominate the world. This compelling series explores themes of power, redemption, and the thin line between hero and villain as the protagonist's journey unfolds.",
    year: 2028,
    img: "7.png",
    fontClass: "font-pirata-one"
  },
  {
    id: "f8",
    title: "QIRCH",
    description: "Discover the gripping multi-season saga of a boy born with extraordinary superpowers who, instead of using his gifts for good, is drawn down a dark path of ambition and chaos, seeking to dominate the world. This compelling series explores themes of power, redemption, and the thin line between hero and villain as the protagonist's journey unfolds.",
    year: 2028,
    img: "8.png",
    fontClass: "font-archivo-black"
  }
];
