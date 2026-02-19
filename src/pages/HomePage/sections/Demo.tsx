// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import {
// 	Play,
// 	Pause,
// 	Zap,
// 	Check,
// 	RefreshCw,
// 	Users,
// 	Layers,
// 	LayoutGrid,
// 	Clock,
// 	Sparkles,
// 	ChevronRight,
// 	Dna,
// 	Infinity,
// 	UserCog,
// 	ScanSearch,
// 	Sun,
// 	Image,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { HeroVideoDialog } from "../../../components/common/VideoPlayer";
// import authService from "../../../services/authService";
// import SectionHeader from "./SectionHeader";
// import { MultipleSquareIcon } from "../../../components/SvgIcons";

// const DemoSection = () => {
// 	const navigate = useNavigate();
// 	// State for tracking which videos are playing
// 	const [playingVideos, setPlayingVideos] = useState({
// 		intro: false,
// 		features: false,
// 		walkthrough: false,
// 	});

// 	// Refs for the video elements
// 	const videoRefs = {
// 		intro: useRef<HTMLVideoElement>(null),
// 		features: useRef<HTMLVideoElement>(null),
// 		walkthrough: useRef<HTMLVideoElement>(null),
// 	};

// 	// Scroll-driven animation refs & values for the demo section
// 	const demoScrollRef = useRef<HTMLDivElement>(null);
// 	const { scrollYProgress: demoScrollProgress } = useScroll({
// 		target: demoScrollRef,
// 		offset: ["start end", "end start"],
// 	});
// 	const contentX = useTransform(demoScrollProgress, [0, 0.25, 0.45], ["-100%", "-100%", "0%"]);
// 	const contentOpacity = useTransform(demoScrollProgress, [0, 0.25, 0.45], [0, 0, 1]);
// 	const videoX = useTransform(demoScrollProgress, [0, 0.25, 0.45], ["100%", "100%", "0%"]);
// 	const videoOpacity = useTransform(demoScrollProgress, [0, 0.25, 0.45], [0, 0, 1]);

// 	// Handle video play/pause
// 	const toggleVideoPlay = (videoKey: "intro" | "features" | "walkthrough") => {
// 		setPlayingVideos((prev) => {
// 			const newState = { ...prev, [videoKey]: !prev[videoKey] };

// 			// Play or pause the video
// 			if (newState[videoKey]) {
// 				videoRefs[videoKey].current?.play();
// 			} else {
// 				videoRefs[videoKey].current?.pause();
// 			}

// 			return newState;
// 		});
// 	};

// 	// Feature lists for each video section
// 	const features = {
// 		intro: [
// 			{
// 				icon: <Zap className="w-5 h-5 text-primary" />,
// 				title: "Instant AI Models",
// 				description: "Generate in 10 seconds",
// 			},
// 			{
// 				icon: <Check className="w-5 h-5 text-primary" />,
// 				title: "4K Photorealism",
// 				description: "High-quality, lifelike results",
// 			},
// 			{
// 				icon: <UserCog className="w-5 h-5 text-primary" />,
// 				title: "Fully Customizable",
// 				description: "Pose, body type, hairstyle & more",
// 			},
// 			{
// 				icon: <Infinity className="w-5 h-5 text-primary" />,
// 				title: " Unlimited Variations",
// 				description: " Perfect for e-commerce & marketing",
// 			},
// 		],
// 		features: [
// 			{
// 				icon: <Users className="w-5 h-5 text-primary" />,
// 				title: "Up to 4 Poses",
// 				description: "Showcase outfits from every angl",
// 			},
// 			{
// 				icon: <Layers className="w-5 h-5 text-primary" />,
// 				title: "Lighting & Background ",
// 				description: "Customize for a perfect look",
// 			},
// 			{
// 				icon: <Dna className="w-5 h-5 text-primary" />,
// 				title: "DNA Number",
// 				description: "Keep the same model across multiple poses",
// 			},
// 		],
// 		walkthrough: [
// 			{
// 				icon: <ScanSearch className="w-5 h-5 text-primary" />,
// 				title: "Realistic Fit",
// 				description: "See how garments look on AI models",
// 			},
// 			{
// 				icon: <Sparkles className="w-5 h-5 text-primary" />,
// 				title: "Instant Visualization",
// 				description: " Try-on in seconds",
// 			},
// 			{
// 				icon: <Image className="w-5 h-5 text-primary" />,
// 				title: "4K Quality",
// 				description: "High-detail, lifelike results",
// 			},
// 			{
// 				icon: <UserCog className="w-5 h-5 text-primary" />,
// 				title: "Customizable Models",
// 				description: "Body type, skin tone & more",
// 			},
// 			{
// 				icon: <Sun className="w-5 h-5 text-primary" />,
// 				title: "Lighting & Background",
// 				description: " Match your brand aesthetic",
// 			},
// 		],
// 	};

// 	return (
// 		<section id="demo" className="py-20 relative bg-background">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// 				{/* Scroll-driven animation wrapper */}
{
	/* <div ref={demoScrollRef} className="relative min-h-[100vh] mb-24 md:mb-32">
	<div className="sticky top-[80px] pt-8 overflow-hidden">
		<div className="mb-10">
			<SectionHeader
				title="See AI4FI in Action"
				description="Watch how our AI transforms fashion visualization through these interactive demonstrations"
				subtitle="Visual Demonstrations"
				icon={<Zap className="text-muted-foreground" size={18} />}
			/>
		</div>

		<div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
			<motion.div
				className="order-2 md:order-1"
				style={{ x: contentX, opacity: contentOpacity }}
			>
				<div className="mb-6">
					<h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
						AI4FI – Single Pose Model Generator
					</h3>
					<p className="text-muted-foreground">
						No costly photoshoots – just instant, professional AI models! Watch
						the demo now.
					</p>
				</div>

				<div className="gap-6 grid md:grid-cols-2 grid-cols-1">
					{features.intro.map((feature, index) => (
						<div key={index} className="flex items-start">
							<div className="mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg">
								{feature.icon}
							</div>
							<div>
								<h4 className="font-medium text-lg text-foreground mb-1">
									{feature.title}
								</h4>
								<p className="text-muted-foreground text-sm">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				className="order-1 md:order-2 w-auto h-auto relative"
				style={{ x: videoX, opacity: videoOpacity }}
			>
				<HeroVideoDialog
					className=" w-auto"
					animationStyle="from-center"
					videoSrc="https://youtube.com/embed/sxFmNNgnoXE"
					thumbnailSrc="/thumbnail-2.png"
					thumbnailAlt="Hero Video"
				/>
			</motion.div>
		</div>
	</div>
</div>; */
}

// 				{/* Section 2: Features Video (Left) and Features (Right) */}
// 				{/* <motion.div
// 					initial={{ opacity: 0, y: 40 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.8 }}
// 					className="mb-24 md:mb-32"
// 				> */}
// 				{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> */}
// 				{/* Video Column (Left on desktop) */}
// 				{/* <div className="relative">
// 							<HeroVideoDialog
// 								className=""
// 								animationStyle="from-center"
// 								videoSrc="https://youtube.com/embed/MOamlPbz0OQ"
// 								thumbnailSrc="/thumbnail-2.png"
// 								thumbnailAlt="Hero Video"
// 							/>
// 						</div> */}

// 				{/* Features Column (Right on desktop) */}
// 				{/* <div>
// 							<div className="mb-6">
// 								<h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
// 									AI4FI – Multi-Pose Model Generator
// 								</h3>
// 								<p className="text-muted-foreground">
// 									Perfect for e-commerce, catalogs & fashion marketing! Watch
// 									the demo now.
// 								</p>
// 							</div>

// 							<div className="gap-6 grid md:grid-cols-2 grid-cols-1">
// 								{features.features.map((feature, index) => (
// 									<motion.div
// 										key={index}
// 										initial={{ opacity: 0, x: 20 }}
// 										whileInView={{ opacity: 1, x: 0 }}
// 										viewport={{ once: true }}
// 										transition={{ duration: 0.5, delay: index * 0.1 }}
// 										className="flex items-start"
// 									>
// 										<div className="mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg">
// 											{feature.icon}
// 										</div>
// 										<div>
// 											<h4 className="font-medium text-lg text-foreground mb-1">
// 												{feature.title}
// 											</h4>
// 											<p className="text-muted-foreground text-sm">
// 												{feature.description}
// 											</p>
// 										</div>
// 									</motion.div>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</motion.div> */}

// 				{/* Section 3: Platform Walkthrough Video (Right) and Features (Left) */}
// 				{/* <motion.div
// 					initial={{ opacity: 0, y: 40 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.8 }}
// 					className="mb-16"
// 				> */}
// 				{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> */}
// 				{/* Features Column (Left on desktop) */}
// 				{/* <div className="order-2 md:order-1">
// 							<div className="mb-6">
// 								<h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
// 									AI4FI – Virtual Try-On
// 								</h3>
// 								<p className="text-muted-foreground">
// 									Enhance customer confidence & reduce returns! Watch the demo
// 									now.
// 								</p>
// 							</div>

// 							<div className="gap-6 grid md:grid-cols-2 grid-cols-1">
// 								{features.walkthrough.map((feature, index) => (
// 									<motion.div
// 										key={index}
// 										initial={{ opacity: 0, x: -20 }}
// 										whileInView={{ opacity: 1, x: 0 }}
// 										viewport={{ once: true }}
// 										transition={{ duration: 0.5, delay: index * 0.1 }}
// 										className="flex items-start"
// 									>
// 										<div className="mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg">
// 											{feature.icon}
// 										</div>
// 										<div>
// 											<h4 className="font-medium text-lg text-foreground mb-1">
// 												{feature.title}
// 											</h4>
// 											<p className="text-muted-foreground text-sm">
// 												{feature.description}
// 											</p>
// 										</div>
// 									</motion.div>
// 								))}
// 							</div>
// 						</div> */}

// 				{/* Video Column (Right on desktop) */}
// 				{/* <div className="order-1 md:order-2 relative">
// 							<HeroVideoDialog
// 								className=""
// 								animationStyle="from-center"
// 								videoSrc="https://youtube.com/embed/EYiOCLktwuo"
// 								thumbnailSrc="/thumbnail-3.png"
// 								thumbnailAlt="Hero Video"
// 							/>
// 						</div> */}
// 				{/* </div>
// 				</motion.div> */}

// 				{/* CTA Section - Refactored for Premium SaaS Look */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 40 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.8 }}
// 					className="mt-24 md:mt-32"
// 				>
// 					<div className="relative overflow-hidden rounded-[2rem] glass-card dark:border border-border  shadow-2xl transition-all duration-300">
// 						{/* Background Decorative Gradient */}
// 						<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-color/10 to-transparent pointer-events-none" />

// 						<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
// 							{/* Left Content */}
// 							<div className="flex-1 text-center md:text-left">
// 								<h3 className="text-3xl md:text-5xl font-bold  dark:text-white mb-6 tracking-tight leading-tight">
// 									Ready to Transform Your{" "}
// 									<span className="text-brand-gradient">Fashion Content?</span>
// 								</h3>
// 								<p className="text-lg  mb-10 max-w-xl leading-relaxed">
// 									Join thousands of fashion brands already using AI4FI to create
// 									stunning, diverse model imagery at a fraction of traditional
// 									costs.
// 								</p>

// 								<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
// 									<motion.button
// 										whileHover={{ scale: 1.05 }}
// 										whileTap={{ scale: 0.98 }}
// 										onClick={() => {
// 											if (authService.isAuthenticated()) {
// 												navigate("/virtualtryon");
// 											} else {
// 												navigate("/login");
// 											}
// 										}}
// 										className="w-full sm:w-auto px-8 py-4 bg-brand-color hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/25"
// 									>
// 										Try It
// 									</motion.button>

// 									<Link to="/contact" className="w-full sm:w-auto">
// 										<motion.button
// 											whileHover={{ scale: 1.05 }}
// 											whileTap={{ scale: 0.98 }}
// 											className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
// 										>
// 											Schedule a Demo
// 											<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// 										</motion.button>
// 									</Link>
// 								</div>
// 							</div>

// 							{/* Right Visual (Icon-based Premium Design) */}
// 							<div className="flex-1 hidden md:flex justify-center items-center">
// 								<div className="relative">
// 									<MultipleSquareIcon height="auto" width="25vw" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };

// export default DemoSection;

import React, { useRef, useState } from "react";
import {
	Play,
	Zap,
	CheckCircle2,
	Sliders,
	Infinity as InfinityIcon,
	Sparkles,
	X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";

/* 
  Video Modal Component (Optional UX Enhancement)
  - This pops up when they click the video thumbnail
*/
const VideoModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
				>
					<X size={32} />
				</button>
				{/* Placeholder for actual video embed */}
				<div className="w-full h-full flex items-center justify-center text-white">
					<p className="text-xl font-mono">Video Player Embed Goes Here</p>
				</div>
			</div>
		</div>
	);
};

const DemoSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	// State for tracking which videos are playing
	const [playingVideos, setPlayingVideos] = useState({
		intro: false,
		features: false,
		walkthrough: false,
	});

	// Refs for the video elements
	const videoRefs = {
		intro: useRef<HTMLVideoElement>(null),
		features: useRef<HTMLVideoElement>(null),
		walkthrough: useRef<HTMLVideoElement>(null),
	};

	// Scroll-driven animation refs & values for the demo section
	const demoScrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: demoScrollProgress } = useScroll({
		target: demoScrollRef,
		offset: ["start end", "end start"],
	});
	const contentX = useTransform(
		demoScrollProgress,
		[0, 0.25, 0.45],
		["-100%", "-100%", "0%"],
	);
	const contentOpacity = useTransform(
		demoScrollProgress,
		[0, 0.25, 0.45],
		[0, 0, 1],
	);
	const videoX = useTransform(
		demoScrollProgress,
		[0, 0.25, 0.45],
		["100%", "100%", "0%"],
	);
	const videoOpacity = useTransform(
		demoScrollProgress,
		[0, 0.25, 0.45],
		[0, 0, 1],
	);

	// Handle video play/pause
	const toggleVideoPlay = (videoKey: "intro" | "features" | "walkthrough") => {
		setPlayingVideos((prev) => {
			const newState = { ...prev, [videoKey]: !prev[videoKey] };

			// Play or pause the video
			if (newState[videoKey]) {
				videoRefs[videoKey].current?.play();
			} else {
				videoRefs[videoKey].current?.pause();
			}

			return newState;
		});
	};

	const features = [
		{
			icon: Zap,
			title: "Instant AI Models",
			desc: "Generate professional models in under 10 seconds.",
			color: "text-amber-500",
			bg: "bg-amber-50",
		},
		{
			icon: CheckCircle2,
			title: "4K Photorealism",
			desc: "High-quality, lifelike results indistinguishable from reality.",
			color: "text-blue-500",
			bg: "bg-blue-50",
		},
		{
			icon: Sliders,
			title: "Fully Customizable",
			desc: "Control pose, body type, hairstyle, and ethnicity.",
			color: "text-purple-500",
			bg: "bg-purple-50",
		},
		{
			icon: InfinityIcon,
			title: "Unlimited Variations",
			desc: "Perfect for scaling e-commerce & A/B testing.",
			color: "text-pink-500",
			bg: "bg-pink-50",
		},
	];

	return (
		<section className="relative py-24 px-4 sm:px-8 bg-background overflow-hidden">
			<VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

			{/* Subtle Grid Background */}
			<div
				className="absolute inset-0 z-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			></div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div
					ref={demoScrollRef}
					className="relative min-h-[100%] mb-24 md:mb-32"
				>
					<div className="mb-10">
						<SectionHeader
							title="See AI4FI in Action"
							description="Watch how our AI transforms fashion visualization through these interactive demonstrations"
							subtitle="Visual Demonstrations"
							icon={<Zap className="text-muted-foreground" size={18} />}
						/>
					</div>
					{/* Main Content Split */}
					<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
						{/* Left Side: Text & Features Grid */}
						<motion.div
							className="order-2 md:order-1"
							style={{ x: contentX, opacity: contentOpacity }}
						>
							<div className="w-full lg:w-full space-y-8">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold text-foreground">
										AI4FI – Single Pose Model Generator
									</h3>
									<p className="text-secondary-foreground font-medium">
										No costly photoshoots – just instant, professional AI
										models! Watch the demo now to see the magic happen.
									</p>
								</div>

								{/* Feature Grid */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{features.map((item, idx) => (
										<div
											key={idx}
											className="p-4 rounded-xl border border-border glass-card shadow-sm hover:shadow-md hover:border-brand transition-all duration-300 group"
										>
											<div
												className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
											>
												<item.icon
													size={20}
													className={item.color}
													strokeWidth={2.5}
												/>
											</div>
											<h4 className="font-bold text-foreground text-sm mb-1">
												{item.title}
											</h4>
											<p className="text-xs text-secondary-foreground leading-relaxed">
												{item.desc}
											</p>
										</div>
									))}
								</div>
							</div>
						</motion.div>
						{/* Right Side: The "Hero" Video Player */}
						<motion.div
							className="order-1 md:order-2 w-auto h-auto relative"
							style={{ x: videoX, opacity: videoOpacity }}
						>
							<div className="w-full lg:w-full relative group perspective-1000">
								{/* Decorative Backdrop Glow */}
								<div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

								{/* Video Container */}
								<div
									className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]"
									onClick={() => setIsModalOpen(true)}
								>
									{/* Thumbnail Image */}
									<img
										src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80"
										alt="Dashboard Demo"
										className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
									/>

									{/* Fake UI Header for "Tech" feel */}
									<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
										<div className="flex gap-2">
											<div className="w-3 h-3 rounded-full bg-red-500"></div>
											<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
											<div className="w-3 h-3 rounded-full bg-green-500"></div>
										</div>
										<div className="text-white/50 text-[10px] font-mono tracking-widest">
											AI MODEL GENERATOR V2.0
										</div>
									</div>

									{/* Big Play Button */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="relative">
											{/* Ping Animation */}
											<div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
											<div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-300">
												<Play
													fill="white"
													className="text-white ml-1"
													size={32}
												/>
											</div>
										</div>
									</div>

									{/* Duration Badge */}
									<div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded text-white text-xs font-mono">
										02:14
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DemoSection;
