"use client";
import { useState, useEffect, useRef, useCallback } from "react";

// --- Types ---
interface TestimonialImage {
    id: string;
    src: string; // placeholder color
    alt: string;
    label?: string;
}

interface Section {
    id: string;
    label: string;
    title: string;
    subtitle?: string;
    items: TestimonialCard[];
}

interface TestimonialCard {
    id: string;
    images: string[]; // array of placeholder colors (simulate multiple photos)
    testimonial?: {
        time: string;
        title: string;
        text: string;
        author?: string;
    };
    span?: "wide" | "tall" | "normal";
}


// --- Data ---
const SECTIONS: Section[] = [
    {
        id: "ethenic-male",
        label: "Ethenic Male",
        title: "Ethnic Male ",
        items: [
            {
                id: "s1",
                images: [
                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
                ],
                span: "tall",
            },
            {
                id: "s2",
                images: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Instant",
                    title: "Sarah J.",
                    text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
                    author: "Sarah J.",
                },
            },
            {
                id: "s3",
                images: [
                    "https://images.unsplash.com/photo-1445205170230-053b83e26dd7?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
                ],
                span: "wide",
            },
            {
                id: "s4",
                images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "s5",
                images: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "s6",
                images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "s7",
                images: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Real-time",
                    title: "Style Assist",
                    text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
                    author: "Marcus K.",
                },
            },
            {
                id: "s8",
                images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
        ],
    },
    {
        id: "ethenic-female",
        label: "Ethenic Female ",
        title: "Ethnic Female",
        items: [
            {
                id: "f1",
                images: [
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
                ],
                testimonial: {
                    time: "12 Weeks",
                    title: "Transformation",
                    text: "The AI tracking caught subtle changes in my form that I would have missed. In 12 weeks, I've seen more progress than 2 years of manual logging.",
                    author: "Elena R.",
                },
                span: "wide",
            },
            {
                id: "f2",
                images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "f3",
                images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "f4",
                images: ["https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "f5",
                images: ["https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "f6",
                images: ["https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Daily",
                    title: "Coach AI",
                    text: "Having an AI coach that truly understands my body's limits and potential has changed the game. It’s personalized fitness at its peak.",
                },
                span: "wide",
            },
            {
                id: "f7",
                images: ["https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Efficiency",
                    title: "Max Results",
                    text: "No more wasted sets. The AI optimizes my rest times and intensity for maximum efficiency. My body has never looked better.",
                },
            },
            {
                id: "f8",
                images: ["https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
        ],
    },
    {
        id: "casual-male",
        label: "Casual Male",
        title: "Casual Male ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
    {
        id: "casual-female",
        label: "Casual Female",
        title: "Casual Female ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
    {
        id: "plus-size",
        label: "Plus Size",
        title: "Plus Size ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
    {
        id: "kids-wear",
        label: "Kids Wear",
        title: "Kids Wear ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
    {
        id: "lingerie",
        label: "Lingerie",
        title: "Lingerie ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
    {
        id: "4k",
        label: "4k images",
        title: "4k Images ",
        items: [
            {
                id: "t1",
                images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"],
                span: "tall",
            },
            {
                id: "t2",
                images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"],
            },
            {
                id: "t3",
                images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"],
                span: "wide",
            },
            {
                id: "t4",
                images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80"],
                testimonial: {
                    time: "Future",
                    title: "Integrated AI",
                    text: "The bridge between fashion and biometric data. AI4FI is building the future of personalized lifestyle technology.",
                },
            },
            {
                id: "t5",
                images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"],
            },
        ],
    },
];

// --- Hover Image Slideshow Hook ---
function useImageSlideshow(images: string[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (images.length <= 1) return;

        const cycle = () => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setOpacity(1);
            }, 400); // Cross-fade duration
        };

        // Random staggered start between 0-2 seconds to avoid synched "blinking"
        const staggerTimeout = setTimeout(() => {
            intervalRef.current = setInterval(cycle, 2500 + Math.random() * 1500);
        }, Math.random() * 2000);

        return () => {
            clearTimeout(staggerTimeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [images.length]);

    return { currentIndex, opacity };
}


// --- Image Card Component ---
function ImageCard({ card }: { card: TestimonialCard }) {
    const { currentIndex, opacity } = useImageSlideshow(card.images);

    // Purely vertical 'longer' layout system
    // Standard Long vs Mid Long vs Extra Long
    const spanClasses = card.span === "tall"
        ? "col-span-1 md:col-span-4 lg:col-span-3 row-span-6" // Extra Long
        : card.span === "wide"
            ? "col-span-1 md:col-span-4 lg:col-span-3 row-span-5" // Mid Long
            : "col-span-1 md:col-span-4 lg:col-span-3 row-span-4"; // Standard Long

    return (
        <div
            className={`showcase-card relative overflow-hidden rounded-xl cursor-pointer group min-h-[140px] md:min-h-[180px] lg:min-h-[200px] ${spanClasses} w-full`}
        >
            {/* Image background with auto fade */}
            <div className="absolute inset-0 rounded-xl transition-all duration-1000 bg-muted overflow-hidden">
                <img
                    src={card.images[currentIndex]}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    style={{ opacity }}
                />
            </div>

            {/* Subtle noise texture overlay */}
            <div
                className="absolute rounded-xl inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Progress indicator for auto-slide (always visible if many images) */}
            {card.images.length > 1 && (
                <div className="absolute bottom-3 right-3 flex gap-1 z-10">
                    {card.images.map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full transition-all duration-500"
                            style={{
                                backgroundColor: i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.2)",
                                transform: i === currentIndex ? "scale(1.2)" : "scale(1)",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Subtle bottom gradient */}
            <div
                className="absolute rounded-xl inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.5) 100%)",
                }}
            />
        </div>
    );
}



// --- Testimonial Overlay Card ---
function TestimonialOverlay({ card }: { card: TestimonialCard }) {
    const { currentIndex, opacity } = useImageSlideshow(card.images);

    // Testimony cards - wider for text but still strictly vertical/longer
    const spanClasses = card.span === "wide"
        ? "col-span-2 md:col-span-8 lg:col-span-6 row-span-6" // Double width, Extra Long
        : "col-span-2 md:col-span-8 lg:col-span-6 row-span-5"; // Double width, Mid Long

    return (
        <div
            className={`showcase-card relative overflow-hidden rounded-xl cursor-pointer group min-h-[280px] md:min-h-[360px] lg:min-h-[400px] ${spanClasses}`}
        >
            {/* BG image with auto fade */}
            <div className="absolute inset-0 transition-all duration-1000 bg-muted overflow-hidden">
                <img
                    src={card.images[currentIndex]}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ opacity }}
                />
            </div>

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent backdrop-blur-[0.5px] group-hover:backdrop-blur-none transition-all duration-500" />

            {/* Content */}
            {card.testimonial && (
                <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                        <span
                            className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase mb-1 block"
                            style={{ color: "var(--brand)" }}
                        >
                            {card.testimonial.time}
                        </span>
                        <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 leading-tight">
                            {card.testimonial.title}
                        </h4>
                        <p className="text-gray-200 text-[10px] sm:text-xs italic leading-snug opacity-90 line-clamp-4">
                            "{card.testimonial.text}"
                        </p>
                    </div>
                    {card.testimonial.author && (
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-[8px] text-brand font-bold">
                                {card.testimonial.author.charAt(0)}
                            </div>
                            <span className="text-white/70 text-[10px] sm:text-xs font-medium">
                                {card.testimonial.author}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Progress indicator */}
            {card.images.length > 1 && (
                <div className="absolute top-3 right-3 flex gap-1 z-20">
                    {card.images.map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full transition-all duration-500"
                            style={{
                                backgroundColor: i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.2)",
                                transform: i === currentIndex ? "scale(1.2)" : "scale(1)",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}


// --- Section Component ---
function TestimonialSection({ section }: { section: Section }) {
    return (
        <div id={section.id} className="mb-10 sm:mb-14 scroll-mt-24">
            {/* Minimalist Section Title */}
            <div className="mb-6 sm:mb-8 border-b border-border/60 pb-4">
                <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-px w-4 bg-brand" />
                    <p className="text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-bold text-brand">
                        COLLECTION
                    </p>
                </div>
                <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-foreground"
                >
                    {section.title}
                </h2>
            </div>

            {/* High-Density 12-Column Grid with Auto-Packing Rows */}
            <div className="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-1.5 sm:gap-2 lg:gap-3 grid-flow-dense max-w-full">
                {section.items.map((card) => (
                    card.testimonial
                        ? <TestimonialOverlay key={card.id} card={card} />
                        : <ImageCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}


// --- Sidebar Component ---
function Sidebar({
    sections,
    activeId,
    onNav,
}: {
    sections: Section[];
    activeId: string;
    onNav: (id: string) => void;
}) {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className="sticky w-[300px] z-[40] border-r border-border top-[80px] p-8 bottom-0 h-[calc(100vh-80px)] bg-background/50 backdrop-blur-md hidden lg:block"
            >
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">
                        Discovery
                    </p>
                    <h4 className="text-2xl font-bold text-foreground">
                        Our <span className="text-brand-gradient">Showcase</span>
                    </h4>
                </div>

                <ul className="space-y-1">
                    {sections.map((section) => {
                        const isActive = activeId === section.id;
                        return (
                            <li key={section.id}>
                                <button
                                    onClick={() => onNav(section.id)}
                                    className="group flex items-center gap-2 w-full text-left py-2 px-0 transition-all duration-300"
                                >
                                    {/* Indicator bar */}
                                    <span
                                        className="block h-px transition-all duration-400 shrink-0"
                                        style={{
                                            width: isActive ? 32 : 12,
                                            backgroundColor: isActive ? "var(--brand)" : "var(--border)",
                                            transitionDuration: "400ms",
                                        }}
                                    />
                                    <span
                                        className="text-lg transition-all duration-300"
                                        style={{
                                            color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                                            fontWeight: isActive ? 700 : 500,
                                            letterSpacing: isActive ? "0.02em" : "0.05em",
                                        }}
                                    >
                                        {section.label}
                                    </span>

                                </button>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Mobile/Tablet Tag Grid Nav */}
            <nav className="lg:hidden sticky top-[76px] w-screen z-[40] bg-background  border-b border-border py-4 px-4 sm:px-8">
                <div className="flex items-center text-center w-full justify-between mb-4">
                    <div className="w-full">
                        <p className="text-[9px]  uppercase tracking-[0.2em] text-muted-foreground font-bold mb-0.5">
                            Discovery
                        </p>
                        <h2 className=" font-bold text-foreground">
                            Our <span className="text-brand-gradient">Showcase</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5">
                    {sections.map((section) => {
                        const isActive = activeId === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => onNav(section.id)}
                                className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider py-2 px-1 rounded-full border transition-all duration-400 text-center truncate ${isActive
                                    ? "bg-brand/10 border-brand text-brand shadow-sm"
                                    : "bg-muted/10 border-border text-muted-foreground hover:border-muted-foreground/30"
                                    }`}
                            >
                                {section.label}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

// --- Main Component ---
export default function ClientShowcase() {
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
    const containerRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Scroll spy
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTIONS.forEach((section) => {
            const el = document.getElementById(section.id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveId(section.id);
                    }
                },
                { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNav = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row items-start bg-background text-foreground transition-colors duration-300 font-sans"
        >
            {/* Custom Styles */}
            <style>{`
        .scroll-mt-20 { scroll-margin-top: 5rem; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .showcase-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .showcase-card:hover {
          transform: translateY(-4px);
        }
      `}</style>


            {/* Sidebar (Desktop) and Top Nav (Mobile) */}
            <Sidebar sections={SECTIONS} activeId={activeId} onNav={handleNav} />

            {/* Main content */}
            <div
                className="flex-1 w-full pt-10 lg:pt-20 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto overflow-hidden"
            >
                <div ref={containerRef}>
                    {SECTIONS.map((section) => (
                        <TestimonialSection key={section.id} section={section} />
                    ))}
                </div>
            </div>


        </div>
    );
}