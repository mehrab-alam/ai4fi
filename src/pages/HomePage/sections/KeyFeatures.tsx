import { useState, useRef, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { AdGeneratorSection, ProductPhotographySection, VirtualTrialHighlight } from "./TestFeature";

const KeyFeatures = () => {
	const { theme } = useTheme();
	const features = [
		{
			title: "Virtual Trial Room",
			children: <VirtualTrialHighlight />,
			accentColor: "from-blue-500 to-cyan-500",
		},
		{
			title: "Photo Studio",
			children: <ProductPhotographySection />,
			accentColor: "from-purple-500 to-pink-500",
		},
		{
			title: "Advertisement",
			children: <AdGeneratorSection />,
			accentColor: "from-orange-500 to-red-500",
		},
	];
	const [activeIndex, setActiveIndex] = useState(0);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const isScrolling = useRef(false);

	// Scroll-synced tab switching logic
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling.current) return;

			// The threshold where a feature becomes "active" (sticky point + buffer)
			const STICKY_THRESHOLD = 200;
			let currentActive = 0;

			sectionRefs.current.forEach((ref, index) => {
				if (ref) {
					const rect = ref.getBoundingClientRect();
					// In sticky stacking, the one with the highest index that's at the top is active
					if (rect.top <= STICKY_THRESHOLD) {
						currentActive = index;
					}
				}
			});

			if (currentActive !== activeIndex) {
				setActiveIndex(currentActive);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		// Initial check in case we're already scrolled
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [activeIndex]);

	const handleTabClick = (index: number) => {
		setActiveIndex(index);
		isScrolling.current = true;

		// Adjust scroll position to account for sticky offset
		const targetElement = sectionRefs.current[index];
		if (targetElement) {
			const offset = 120; // Matches our sticky top + buffer
			const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}

		setTimeout(() => {
			isScrolling.current = false;
		}, 1000);
	};

	return (
		<div className="relative min-h-screen bg-background dark:bg-gradient-to-br from-slate-50 to-slate-100 overflow-clip">
			{theme === "dark" && (
				<div className="absolute inset-0 dark:bg-gradient-to-br from-cyan-950 via-black to-sky-950"></div>
			)}

			<div className="relative z-10 max-w-full mx-auto px-8 py-20 flex flex-col">
				<SectionHeader
					title="Key Features"
					description="Transform your operations with intelligent automation"
					subtitle="Why Choose Us"
					icon={<TrendingUp className="text-muted-foreground" size={18} />}
				/>

				{/* Layout Container */}
				<div className="flex  relative flex-col md:flex-row gap-4 items-start">

					{/* Left Content (Tabs) - Fixed/Sticky */}
					<aside className="w-full mt-[30vh] md:w-[35%] lg:w-[25%] sticky top-[100px] md:top-[40vh] z-30 bg-background/5 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-6 md:py-0 transition-all duration-300">
						<div className="flex items-center justify-center  flex-row md:flex-col gap-6 md:gap-10 overflow-x-auto md:overflow-visible px-4 md:px-0 scrollbar-hide">
							{features.map((feature, index) => {
								const isActive = activeIndex === index;
								return (
									<button
										key={index}
										onClick={() => handleTabClick(index)}
										className="group relative flex items-center gap-4 py-2 flex-shrink-0 md:flex-shrink transition-all duration-500"
									>
										{/* Desktop Active Line */}
										<motion.div
											className="hidden md:block absolute left-[-20px] w-1.5 rounded-full bg-gradient-to-b from-brand-color to-blue-600"
											initial={false}
											animate={{
												height: isActive ? "100%" : "0%",
												opacity: isActive ? 1 : 0
											}}
											transition={{ type: "spring", stiffness: 300, damping: 30 }}
										/>

										<div className="flex flex-col items-start gap-1">
											<motion.span
												animate={{
													scale: isActive ? 1.25 : 1,
													translateX: isActive && !window.matchMedia('(max-width: 768px)').matches ? 15 : 0,
													color: isActive ? "var(--foreground)" : "var(--muted-foreground)"
												}}
												transition={{ type: "spring", stiffness: 200, damping: 20 }}
												className={`text-lg md:text-xl lg:text-2xl font-extrabold whitespace-nowrap transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground/30 hover:text-muted-foreground/60"}`}
											>
												{feature.title}
											</motion.span>

											{/* Mobile Active Underline */}
											<motion.div
												initial={false}
												animate={{
													width: isActive ? "100%" : "0%",
													opacity: isActive ? 1 : 0
												}}
												className={`h-1 mt-1 rounded-full bg-gradient-to-r ${feature.accentColor} md:hidden`}
											/>
										</div>
									</button>
								);
							})}

						</div>
					</aside>

					{/* Right Content (Features) - Scrolling with Sticky Stacking */}
					<div className="w-full md:w-[65%] lg:w-[75%] relative pb-[20vh]">
						{features.map((feature, index) => (
							<div
								key={index}
								ref={(el) => {
									sectionRefs.current[index] = el;
								}}
								className="sticky top-[120px] w-full mb-[30vh] md:mb-[50vh] last:mb-0"
								style={{
									zIndex: index + 10,
								}}
							>
								<div className="rounded-3xl overflow-hidden glass-card-heavy border border-white/10 shadow-2xl backdrop-blur-xl bg-background/40">
									{feature.children}
								</div>
							</div>
						))}
						<div className="h-[20vh]"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KeyFeatures;

