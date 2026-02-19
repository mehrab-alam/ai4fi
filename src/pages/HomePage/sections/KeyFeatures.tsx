import { useState, useEffect, useRef } from "react";
import { TrendingUp, ImageIcon, Paintbrush, Upload, Video } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import {
	Advertisement,
	PhotoStudio,
	VirtualTrialRoom,
} from "./KeyFeatureItems";

const KeyFeatures = () => {
	const { theme } = useTheme();
	// const features = [
	// 	{
	// 		title: "Virtual Trial Room",
	// 		subtitle: "AI-Powered Fashion Previews",
	// 		description:
	// 			"Generate instant, photo-realistic previews of your garments on diverse AI-generated models. Eliminate traditional photoshoot limitations and accelerate your fashion workflow.",
	// 		steps: [
	// 			{ icon: Paintbrush, text: "Choose AI model representation" },
	// 			{ icon: Upload, text: "Upload garment images easily" },
	// 			{ icon: ImageIcon, text: "Instant preview generation" },
	// 		],
	// 		image: "./trial_room.jpeg",
	// 		accentColor: "from-blue-500 to-cyan-500",
	// 	},
	// 	{
	// 		title: "Photo Studio",
	// 		subtitle: "AI Product Enhancement",
	// 		description:
	// 			"Transform raw product photos into professional, listing-ready visuals with automated lighting correction, background styling, and marketplace optimization.",
	// 		steps: [
	// 			{ icon: Upload, text: "Upload raw product photos" },
	// 			{ icon: Paintbrush, text: "Enhance lighting & backgrounds" },
	// 			{ icon: ImageIcon, text: "Generate listing-ready visuals" },
	// 		],
	// 		image: "./photo_studio.jpeg",
	// 		accentColor: "from-purple-500 to-pink-500",
	// 	},
	// 	{
	// 		title: "Advertisement",
	// 		subtitle: "AI Ad Creative Generation",
	// 		description:
	// 			"Create high-converting marketing visuals and promotional videos using AI-generated models, environments, and automated creative production workflows.",
	// 		steps: [
	// 			{ icon: Upload, text: "Upload product image" },
	// 			{ icon: Paintbrush, text: "Clean & prepare product visuals" },
	// 			{ icon: ImageIcon, text: "Generate AI ad creatives" },
	// 			{ icon: Video, text: "Convert creatives into ad videos" },
	// 		],
	// 		image: "./ad.jpeg",
	// 		accentColor: "from-orange-500 to-red-500",
	// 	},
	// ];
	const features = [
		{
			title: "Virtual Trial Room",
			children: <VirtualTrialRoom />,
			accentColor: "from-blue-500 to-cyan-500",
		},
		{
			title: "Photo Studio",
			children: <PhotoStudio />,
			accentColor: "from-purple-500 to-pink-500",
		},
		{
			title: "Advertisement",
			children: <Advertisement />,
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
				<div className="sticky top-[-120px] z-20 bg-background pb-0 pt-2 ">
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
								className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
									activeIndex === index
										? "bg-brand-color shadow-lg scale-105 text-white border border-brand-color"
										: "bg-mute-secondary shodow-lg border border-border hover:bg-secondary/80"
								}`}
							>
								<div
									className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accentColor}`}
								/>
								<span
									className={`font-medium ${
										activeIndex === index
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
							{feature.children}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default KeyFeatures;
