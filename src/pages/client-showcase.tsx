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
        id: "fitness-first",
        label: "Fitness First",
        title: "Fitness Transformation Pics",
        items: [
            {
                id: "f1",
                images: ["#c8b89a", "#b5a08a", "#d4c4ae"],
                span: "tall",
            },
            {
                id: "f2",
                images: ["#3d5a3e", "#2e4430", "#4a6e4b"],
                testimonial: {
                    time: "2 min",
                    title: "Edie",
                    text: "I noticed such a transformation in my body confidence. The clothes just work with your shape, not against it.",
                    author: "Edie",
                },
            },
            {
                id: "f3",
                images: ["#8b5a3c", "#7a4e32", "#9d6648"],
                span: "wide",
            },
            {
                id: "f4",
                images: ["#1a1a1a", "#2d2d2d", "#111"],
            },
            {
                id: "f5",
                images: ["#6b7c5a", "#5a6b49", "#7d8e6b"],
                span: "tall",
            },
            {
                id: "f6",
                images: ["#c4a882", "#d4b892", "#b49872"],
            },
            {
                id: "f7",
                images: ["#2c3e50", "#34495e", "#1a2b3c"],
                testimonial: {
                    time: "5 min",
                    title: "Sarah",
                    text: "Finally found pieces that make me feel powerful in my own skin. The quality is absolutely unmatched.",
                    author: "Sarah",
                },
            },
            {
                id: "f8",
                images: ["#7bafd4", "#6a9ec3", "#8cc0e5"],
                span: "wide",
            },
        ],
    },
    {
        id: "body-positive",
        label: "Body Positive",
        title: "Body Positive Pics",
        items: [
            {
                id: "b1",
                images: ["#1a1a1a", "#2a2a2a", "#0d0d0d"],
                testimonial: {
                    time: "1 Day",
                    title: "Maya",
                    text: "Wearing AYNA for just one day changed how I carry myself. There's something about the cut that makes every body type look incredible. I've never received so many compliments.",
                    author: "Maya",
                },
                span: "wide",
            },
            {
                id: "b2",
                images: ["#d4a574", "#c4956a", "#e4b584"],
            },
            {
                id: "b3",
                images: ["#4a7c59", "#3a6c49", "#5a8c69"],
                span: "tall",
            },
            {
                id: "b4",
                images: ["#c9b8a8", "#b9a898", "#d9c8b8"],
            },
            {
                id: "b5",
                images: ["#8c4a2f", "#7c3a1f", "#9c5a3f"],
            },
            {
                id: "b6",
                images: ["#2d4a6b", "#1d3a5b", "#3d5a7b"],
                testimonial: {
                    time: "3 Weeks",
                    title: "Priya",
                    text: "Three weeks of wearing AYNA and I genuinely don't want to go back to anything else. The fabric breathes beautifully.",
                },
                span: "wide",
            },
            {
                id: "b7",
                images: ["#6b5b8c", "#5b4b7c", "#7b6b9c"],
                testimonial: {
                    time: "10%",
                    title: "Discount",
                    text: "Friends kept asking where I got my outfits — I told them all. Three of them ordered already! Quality that speaks for itself.",
                },
            },
            {
                id: "b8",
                images: ["#c4d4b4", "#b4c4a4", "#d4e4c4"],
                span: "tall",
            },
        ],
    },
    {
        id: "before-after",
        label: "Before & After",
        title: "Before & After Pics",
        items: [
            {
                id: "ba1",
                images: ["#e8d5c0", "#d8c5b0", "#f8e5d0"],
                span: "tall",
            },
            {
                id: "ba2",
                images: ["#2a3a4a", "#1a2a3a", "#3a4a5a"],
            },
            {
                id: "ba3",
                images: ["#a04040", "#904040", "#b05050"],
                span: "wide",
            },
            {
                id: "ba4",
                images: ["#5a7a5a", "#4a6a4a", "#6a8a6a"],
                testimonial: {
                    time: "6 Months",
                    title: "Zara",
                    text: "Six months ago I avoided mirrors. Now I seek them out. AYNA helped me fall back in love with dressing.",
                },
            },
            {
                id: "ba5",
                images: ["#c8a060", "#b89050", "#d8b070"],
            },
        ],
    },
];

// --- Hover Image Slideshow Hook ---
function useImageSlideshow(images: string[], active: boolean) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!active || images.length <= 1) {
            setCurrentIndex(0);
            setOpacity(1);
            return;
        }

        const cycle = () => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setOpacity(1);
            }, 300);
        };

        intervalRef.current = setInterval(cycle, 900);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [active, images.length]);

    useEffect(() => {
        if (!active) {
            setCurrentIndex(0);
            setOpacity(1);
        }
    }, [active]);

    return { currentIndex, opacity };
}

// --- Image Card Component ---
function ImageCard({ card }: { card: TestimonialCard }) {
    const [hovered, setHovered] = useState(false);
    const { currentIndex, opacity } = useImageSlideshow(card.images, hovered);

    const isWide = card.span === "wide";
    const isTall = card.span === "tall";

    return (
        <div
            className={`relative overflow-hidden rounded-sm cursor-pointer group ${isWide ? "col-span-2" : ""
                } ${isTall ? "row-span-2" : ""}`}
            style={{
                gridColumn: isWide ? "span 2" : undefined,
                gridRow: isTall ? "span 2" : undefined,
                minHeight: isTall ? 280 : 140,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image background with fade */}
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    backgroundColor: card.images[currentIndex],
                    opacity: hovered ? opacity : 1,
                }}
            />

            {/* Subtle noise texture overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Hover image count indicator */}
            {hovered && card.images.length > 1 && (
                <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                    {card.images.map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: i === currentIndex ? "#fff" : "rgba(255,255,255,0.4)",
                                transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Overlay gradient on hover */}
            <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)",
                    opacity: hovered ? 1 : 0,
                }}
            />
        </div>
    );
}

// --- Testimonial Overlay Card ---
function TestimonialOverlay({ card }: { card: TestimonialCard }) {
    const [hovered, setHovered] = useState(false);
    const { currentIndex, opacity } = useImageSlideshow(card.images, hovered);

    return (
        <div
            className="relative col-span-2 overflow-hidden rounded-sm cursor-pointer"
            style={{ minHeight: 160 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* BG image */}
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    backgroundColor: card.images[currentIndex],
                    opacity: hovered ? opacity : 1,
                }}
            />

            {/* Dark overlay for text */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            {card.testimonial && (
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div>
                        <span
                            className="text-xs font-bold tracking-widest uppercase mb-1 block"
                            style={{ color: "#e8854a" }}
                        >
                            {card.testimonial.time}
                        </span>
                        <h4 className="text-white font-semibold text-sm mb-2">
                            {card.testimonial.title}
                        </h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            {card.testimonial.text}
                        </p>
                    </div>
                    {card.testimonial.author && (
                        <span className="text-gray-400 text-xs mt-3">
                            — {card.testimonial.author}
                        </span>
                    )}
                </div>
            )}

            {/* Hover dots */}
            {hovered && card.images.length > 1 && (
                <div className="absolute bottom-2 right-2 flex gap-1 z-20">
                    {card.images.map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: i === currentIndex ? "#e8854a" : "rgba(255,255,255,0.3)",
                                transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
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
    // Split items: pure image cards and testimonial cards
    const imageCards = section.items.filter((c) => !c.testimonial);
    const testimonialCards = section.items.filter((c) => c.testimonial);

    return (
        <div id={section.id} className="mb-24 scroll-mt-8">
            {/* Section title */}
            <div className="mb-8 border-b border-gray-200 pb-4">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1 font-medium">
                    AYNA
                </p>
                <h2
                    className="text-xl font-bold tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    {section.title}
                </h2>
            </div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
                {/* First row: image cards */}
                {imageCards.slice(0, 4).map((card) => (
                    <ImageCard key={card.id} card={card} />
                ))}

                {/* Testimonial cards */}
                {testimonialCards.slice(0, 2).map((card) => (
                    <TestimonialOverlay key={card.id} card={card} />
                ))}

                {/* Remaining image cards */}
                {imageCards.slice(4).map((card) => (
                    <ImageCard key={card.id} card={card} />
                ))}

                {/* Remaining testimonial cards */}
                {testimonialCards.slice(2).map((card) => (
                    <TestimonialOverlay key={card.id} card={card} />
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
        <nav
            className="fixed w-[300px] z-[40] border border-l-0 border-t-0 border-r-border top-[80px] p-6 bottom-0 h-screen "
            style={{


                transform: "translateY(0%)",

                zIndex: 40,
            }}
        >
            <div className="mb-6">
                <p className=" uppercase">
                    Browse
                </p>
                <h4
                >
                    Real Results
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
                                        width: isActive ? 24 : 8,
                                        backgroundColor: isActive ? "#e8854a" : "#d1d5db",
                                        transitionDuration: "400ms",
                                    }}
                                />
                                <span
                                    className="text-2xl transition-all duration-300"
                                    style={{
                                        color: isActive ? "#1a1a1a" : "#9ca3af",
                                        fontWeight: isActive ? 600 : 400,
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


        </nav>
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
            className="min-h-screen"

        >
            {/* Font imports */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .scroll-mt-8 { scroll-margin-top: 2rem; }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ayna-card-enter {
          animation: fadeSlide 0.4s ease forwards;
        }
      `}</style>

            {/* Header */}


            {/* Hero intro */}


            {/* Fixed Sidebar — outside normal flow */}
            <Sidebar sections={SECTIONS} activeId={activeId} onNav={handleNav} />

            {/* Main content — left padding reserves space for fixed sidebar */}
            <div
                className="pt-24"
                style={{ paddingLeft: "15rem", paddingRight: "2.5rem", maxWidth: "80rem", margin: "0 auto" }}
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