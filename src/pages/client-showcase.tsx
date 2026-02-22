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
        id: "ai-stylist",
        label: "AI Virtual Styler",
        title: "Virtual Try-On Transformations",
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
        id: "smart-fitness",
        label: "Smart Fitness",
        title: "AI-Driven Body Progress",
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
        id: "tech-integration",
        label: "Tech Showcase",
        title: "Seamless Tech Integration",
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
                className="absolute inset-0 transition-all duration-500 bg-muted"
            >
                <img
                    src={card.images[currentIndex]}
                    alt=""
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: hovered ? opacity : 1 }}
                />
            </div>


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
                                backgroundColor: i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.4)",
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
                className="absolute inset-0 transition-all duration-500 bg-muted"
            >
                <img
                    src={card.images[currentIndex]}
                    alt=""
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: hovered ? opacity : 1 }}
                />
            </div>


            {/* Dark overlay for text */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />


            {/* Content */}
            {card.testimonial && (
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div>
                        <span
                            className="text-xs font-bold tracking-widest uppercase mb-1 block"
                            style={{ color: "var(--brand)" }}
                        >

                            {card.testimonial.time}
                        </span>
                        <h4 className="text-white font-semibold text-sm mb-2">
                            {card.testimonial.title}
                        </h4>
                        <p className="text-gray-200 text-xs leading-relaxed">
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
                                backgroundColor: i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.3)",
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
        <div id={section.id} className="mb-24 scroll-mt-20">
            {/* Section title */}
            <div className="mb-10 border-b border-border pb-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 font-bold text-brand">
                    AI4FI SHOWCASE
                </p>
                <h2
                    className="text-3xl font-bold tracking-tight text-foreground"
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
            className="fixed w-[300px] z-[40] border-r border-border top-[80px] p-8 bottom-0 h-[calc(100vh-80px)] bg-background/50 backdrop-blur-md hidden lg:block"
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
                                    className="text-xl transition-all duration-300"
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
            className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans"
        >
            {/* Custom Styles */}
            <style>{`
        .scroll-mt-20 { scroll-margin-top: 5rem; }

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


            {/* Header */}


            {/* Hero intro */}


            {/* Fixed Sidebar — outside normal flow */}
            <Sidebar sections={SECTIONS} activeId={activeId} onNav={handleNav} />

            {/* Main content — left padding reserves space for fixed sidebar */}
            <div
                className="pt-32 pb-20 px-6 lg:pl-[340px] lg:pr-12 max-w-[1440px] mx-auto"
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