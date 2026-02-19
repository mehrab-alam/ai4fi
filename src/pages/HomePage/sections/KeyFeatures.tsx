import { useState, useEffect, useRef } from "react";
import { TrendingUp, ImageIcon, Paintbrush, Upload, Video } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";



const KeyFeatures = () => {
	const { theme } = useTheme();
	const features = [
		{
			title: "Virtual Trial Room",
			subtitle: "AI-Powered Fashion Previews",
			description:
				"Generate instant, photo-realistic previews of your garments on diverse AI-generated models. Eliminate traditional photoshoot limitations and accelerate your fashion workflow.",
			steps: [
				{ icon: Paintbrush, text: "Choose AI model representation" },
				{ icon: Upload, text: "Upload garment images easily" },
				{ icon: ImageIcon, text: "Instant preview generation" },
			],
			image: "./trial_room.jpeg",
			accentColor: "from-blue-500 to-cyan-500",
		},
		{
			title: "Photo Studio",
			subtitle: "AI Product Enhancement",
			description:
				"Transform raw product photos into professional, listing-ready visuals with automated lighting correction, background styling, and marketplace optimization.",
			steps: [
				{ icon: Upload, text: "Upload raw product photos" },
				{ icon: Paintbrush, text: "Enhance lighting & backgrounds" },
				{ icon: ImageIcon, text: "Generate listing-ready visuals" },
			],
			image: "./photo_studio.jpeg",
			accentColor: "from-purple-500 to-pink-500",
		},
		{
			title: "Advertisement",
			subtitle: "AI Ad Creative Generation",
			description:
				"Create high-converting marketing visuals and promotional videos using AI-generated models, environments, and automated creative production workflows.",
			steps: [
				{ icon: Upload, text: "Upload product image" },
				{ icon: Paintbrush, text: "Clean & prepare product visuals" },
				{ icon: ImageIcon, text: "Generate AI ad creatives" },
				{ icon: Video, text: "Convert creatives into ad videos" },
			],
			image: "./ad.jpeg",
			accentColor: "from-orange-500 to-red-500",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Scroll-synced tab switching via IntersectionObserver
	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		sectionRefs.current.forEach((section, index) => {
			if (!section) return;
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveIndex(index);
						}
					});
				},
				{
					// Adjust margin to trigger when the card hits the sticky position
					rootMargin: "-250px 0px -60% 0px",
					threshold: 0.1,
				},
			);
			observer.observe(section);
			observers.push(observer);
		});

		return () => observers.forEach((obs) => obs.disconnect());
	}, []);

	const handleTabClick = (index: number) => {
		setActiveIndex(index);
		sectionRefs.current[index]?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="min-h-screen bg-background dark:bg-gradient-to-br from-slate-50 to-slate-100 p-8">
			{theme == "dark" && (
				<div className="absolute inset-0  dark:bg-gradient-to-br from-cyan-950 via-black to-sky-950"></div>
			)}
			<div className="max-w-[100vw] mx-auto ">
				{/* Sticky Header + Tabs */}
				<div className="sticky top-[-120px] z-20 bg-background pb-6 pt-2 ">
					<SectionHeader
						title="Key Features"
						description="Transform your operations with intelligent automation"
						subtitle="Why Choose Us"
						icon={<TrendingUp className="text-muted-foreground" size={18} />}
					/>

					{/* Navigation Tabs */}
					<div className="flex justify-center gap-4 overflow-x-auto pb-2">
						{features.map((feature, index) => (
							<button
								key={index}
								onClick={() => handleTabClick(index)}
								className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${activeIndex === index
										? "bg-brand-color shadow-lg scale-105 text-white border border-brand-color"
										: "bg-mute-secondary shodow-lg border border-border hover:bg-secondary/80"
									}`}
							>
								<div
									className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accentColor}`}
								/>
								<span
									className={`font-medium ${activeIndex === index
											? "text-white"
											: "text-muted-foreground"
										}`}
								>
									{feature.title}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Scrollable Content Sections */}
				<div className="mt-8 relative z-[1] flex flex-col items-center max-w-[90vw] mx-auto pb-[10vh]">
					{features.map((feature, index) => (
						<div
							key={index}
							ref={(el) => {
								sectionRefs.current[index] = el;
							}}
							className="sticky top-[200px] w-full mb-[10vh] scroll-mt-[300px]"
							style={{
								zIndex: index + 10,
							}}
						>
							<motion.div
								initial={{ opacity: 0, y: 60, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{
									once: false,
									amount: 0.2,
									margin: "0px 0px -100px 0px",
								}}
								transition={{
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
									opacity: { duration: 0.5 },
								}}
								className="bg-background rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-border/50"
							>
								<div className="grid lg:grid-cols-2 gap-0">
									{/* Left Side - Content */}
									<div className="p-8 md:p-14 flex flex-col justify-center">
										<div className="flex items-center gap-4 mb-6">
											<div
												className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center shadow-lg`}
											>
												<TrendingUp className="w-7 h-7 text-white" />
											</div>
											<div>
												<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
													{feature.title}
												</h2>
												<p
													className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${feature.accentColor} bg-clip-text text-transparent`}
												>
													{feature.subtitle}
												</p>
											</div>
										</div>

										<p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
											{feature.description}
										</p>

										<div className="mb-10">
											<h5 className="text-xs font-bold text-muted-foreground mb-5 uppercase tracking-[0.2em]">
												Implementation Steps
											</h5>
											<div className="grid sm:grid-cols-2 gap-4">
												{feature.steps.map((step, idx) => {
													const Icon = step.icon;
													return (
														<motion.div
															key={idx}
															initial={{ opacity: 0, x: -10 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{
																delay: 0.2 + idx * 0.1,
																duration: 0.5,
															}}
															className="flex items-center gap-3 p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-brand-color/30 transition-colors"
														>
															<div
																className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center flex-shrink-0 shadow-sm opacity-90`}
															>
																<Icon className="w-5 h-5 text-white" />
															</div>
															<span className="text-foreground font-medium text-sm">
																{step.text}
															</span>
														</motion.div>
													);
												})}
											</div>
										</div>

										<div className="flex items-center gap-4">
											<button
												className={`px-10 py-4 rounded-2xl bg-gradient-to-r ${feature.accentColor} text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95`}
											>
												Get Started
											</button>
										</div>
									</div>

									{/* Right Side - Image */}
									<div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-muted/20">
										<div className="absolute inset-0 flex items-center justify-center">
											<motion.div
												initial={{ scale: 1.1, opacity: 0 }}
												whileInView={{ scale: 1, opacity: 1 }}
												transition={{ duration: 1, delay: 0.2 }}
												className="w-full h-full p-8 md:p-12"
											>
												<img
													src={feature.image}
													alt={feature.title}
													className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
												/>
											</motion.div>
											<div
												className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-[0.03] pointer-events-none`}
											/>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					))}
				</div>

				{/* Progress Indicators */}
				<div className="flex justify-center gap-3 mt-8">
					{features.map((_, index) => (
						<button
							key={index}
							onClick={() => handleTabClick(index)}
							className="relative group"
						>
							<div
								className={`w-12 h-2 rounded-full transition-all duration-300 ${activeIndex === index
										? `bg-gradient-to-r ${features[index].accentColor}`
										: "bg-slate-300 hover:bg-slate-400"
									}`}
							>
								{activeIndex === index && (
									<div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-50" />
								)}
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default KeyFeatures;
