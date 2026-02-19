// import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

// import SectionHeader from "./SectionHeader";
// import MasonryGallery from "./MasonryGallery";

// const FeaturedGallery = () => {
// 	const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

// const row1Images = [
// 	{
// 		id: 1,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_007.png",
// 		alt: "AI Model 1",
// 	},
// 	{
// 		id: 2,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/female/female_model_012.png",
// 		alt: "AI Model 2",
// 	},
// 	{
// 		id: 3,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_012.png",
// 		alt: "AI Model 3",
// 	},
// 	{
// 		id: 4,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_023.png",
// 		alt: "AI Model 4",
// 	},
// 	{
// 		id: 5,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_035.png",
// 		alt: "AI Model 5",
// 	},
// 	{
// 		id: 6,
// 		src: "https://ai4fi-bucket.s3.amazonaws.com/formal/female/female_model_005.png",
// 		alt: "AI Model 6",
// 	},
// ];

// 	const row2Images = [
// 		{
// 			id: 7,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/male/male_model_039.png",
// 			alt: "Plus-Size Model 1",
// 		},
// 		{
// 			id: 8,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/female/female_model_006.png",
// 			alt: "Plus-Size Model 2",
// 		},
// 		{
// 			id: 9,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/male/male_model_014.png",
// 			alt: "Plus-Size Model 3",
// 		},
// 		{
// 			id: 10,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/female/female_model_011.png",
// 			alt: "Plus-Size Model 4",
// 		},
// 		{
// 			id: 11,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/male/male_model_018.png",
// 			alt: "Plus-Size Model 5",
// 		},
// 		{
// 			id: 12,
// 			src: "https://ai4fi-bucket.s3.amazonaws.com/PlusSize/female/female_model_023.png",
// 			alt: "Plus-Size Model 6",
// 		},
// 	];

// 	return (
// 		<section
// 			id="gallery"
// 			className="py-12 md:py-20 relative overflow-hidden bg-background"
// 		>
// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 	<SectionHeader
// 		title=" Featured AI Models"
// 		description="Discover our diverse range of AI-generated fashion models"
// 	/>
// </div>

// 			{/* First Row */}
// 			{/* <div className='relative w-full overflow-hidden mb-8 md:mb-12'>
//         <div className='flex animate-marquee-left gap-4'>
//           {duplicatedRow1.map((image, index) => (
//             <div key={`${image.id}-${index}`} className='relative group flex-shrink-0'>
//               <div className='w-48 h-72 md:w-72 md:h-96 overflow-hidden rounded-lg'>
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
//                 />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <div className='absolute bottom-4 left-4 right-4'>
//                     <div className='bg-black/30 backdrop-blur rounded-lg p-3'>
//                       <p className='text-white text-sm font-medium'>{image.alt}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
// 			{/* <ImageCarousel images={duplicatedRow1} rtl={false} /> */}
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
// 				<MasonryGallery
// 					gallery={[
// 						{
// 							id: 1,
// 							span: "tall",
// 							images: [row1Images[0], row1Images[1]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 2,
// 							span: "tall",
// 							images: [row1Images[2], row2Images[0]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 3,
// 							span: "tall",
// 							images: [row1Images[3], row2Images[1]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 4,
// 							span: "tall",
// 							images: [row1Images[4], row2Images[2]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 5,
// 							span: "tall",
// 							images: [row1Images[5], row2Images[3]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 6,
// 							span: "tall",
// 							images: [row2Images[4], row2Images[5]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 7,
// 							span: "tall",
// 							images: [row1Images[0], row2Images[0]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 8,
// 							span: "tall",
// 							images: [row1Images[1], row2Images[1]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 					]}
// 				/>
// 			</div>

// 			{/* Second Row Title */}
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center py-4">
// 				<SectionHeader
// 					title=" Obese Model Collection"
// 					description="Experience lifelike AI models, including plus-size, for a true-to-reality shopping experience. Instantly generate 4K visuals
//             with customizable poses, lighting, and backgrounds—boosting sales and reducing returns."
// 				/>
// 			</div>

// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
// 				<MasonryGallery
// 					gallery={[
// 						{
// 							id: 9,
// 							span: "tall",
// 							images: [row2Images[0], row2Images[1]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 10,
// 							span: "tall",
// 							images: [row2Images[2], row2Images[3]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 11,
// 							span: "tall",
// 							images: [row2Images[4], row1Images[0]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 						{
// 							id: 12,
// 							span: "tall",
// 							images: [row2Images[5], row1Images[1]].map((img) => ({
// 								type: "real",
// 								src: img.src,
// 								label: img.alt,
// 							})),
// 						},
// 					]}
// 				/>
// 			</div>

// 			{/* Gradient Overlays */}
// 			<div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
// 			<div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
// 		</section>
// 	);
// };

// export default FeaturedGallery;

// NEW ONE
// import React, { useState } from 'react';
// import {
// 	ArrowUpRight, Heart, Sparkles, ScanFace,
// 	Ruler, Shirt, Palette, ChevronRight
// } from 'lucide-react';

// /* --- MOCK DATA --- */
// const standardModels = [
// 	{
// 		id: 1,
// 		name: "Aria V.",
// 		type: "Runway",
// 		height: "5'10\"",
// 		tags: ["Haute Couture", "Evening Wear"],
// 		img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
// 	},
// 	{
// 		id: 2,
// 		name: "Liam K.",
// 		type: "Editorial",
// 		height: "6'2\"",
// 		tags: ["Business", "Formal"],
// 		img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
// 	},
// 	{
// 		id: 3,
// 		name: "Sophie M.",
// 		type: "Commercial",
// 		height: "5'8\"",
// 		tags: ["Casual", "Lifestyle"],
// 		img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
// 	},
// 	{
// 		id: 4,
// 		name: "Noah R.",
// 		type: "Street",
// 		height: "6'0\"",
// 		tags: ["Urban", "Sport"],
// 		img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
// 	}
// ];

// const plusSizeModels = [
// 	{
// 		id: 101,
// 		name: "Marcus D.",
// 		category: "Plus Size",
// 		stats: "XL • 6'1\"",
// 		vibe: "Warm & Approachable",
// 		img: "https://plus.unsplash.com/premium_photo-1661778647823-376df03eb9d5?auto=format&fit=crop&w=800&q=80" // Placeholder for man in polo
// 	},
// 	{
// 		id: 102,
// 		name: "Elena R.",
// 		category: "Curvy",
// 		stats: "XXL • 5'9\"",
// 		vibe: "Confident Executive",
// 		img: "https://images.unsplash.com/photo-1604426633861-11b2faead63c?auto=format&fit=crop&w=800&q=80" // Placeholder
// 	},
// 	{
// 		id: 103,
// 		name: "James T.",
// 		category: "Big & Tall",
// 		stats: "3XL • 6'3\"",
// 		vibe: "Casual Lifestyle",
// 		img: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?auto=format&fit=crop&w=800&q=80" // Placeholder
// 	}
// ];

// /* --- COMPONENTS --- */

// /* 1. The High-Fashion Card (Standard) */
// const ModelCard = ({ model }) => (
// 	<div className="group relative w-full h-[500px] overflow-hidden rounded-[2rem] cursor-pointer">
// 		{/* Image */}
// 		<img
// 			src={model.img}
// 			alt={model.name}
// 			className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
// 		/>

// 		{/* Dark Gradient Overlay (Only appears on hover) */}
// 		<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// 		{/* Floating Action Button */}
// 		<div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
// 			<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:bg-purple-500 hover:text-white transition-colors">
// 				<ArrowUpRight size={24} />
// 			</button>
// 		</div>

// 		{/* Content Details */}
// 		<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
// 			<div className="flex items-center gap-2 mb-2">
// 				<span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium rounded-full uppercase tracking-wider">
// 					{model.type}
// 				</span>
// 				<span className="flex items-center gap-1 text-white/80 text-xs">
// 					<Ruler size={12} /> {model.height}
// 				</span>
// 			</div>

// 			<h3 className="text-3xl font-serif text-white mb-2 italic">{model.name}</h3>

// 			<div className="flex gap-2">
// 				{model.tags.map((tag, idx) => (
// 					<span key={idx} className="text-xs text-gray-300 font-light">#{tag}</span>
// 				))}
// 			</div>
// 		</div>
// 	</div>
// );

// /* 2. The Luxury Feature Card (Plus Size) */
const InclusiveCard = ({ model }) => (
	<div className="relative flex-shrink-0 w-[300px] md:w-[350px] snap-center group">
		<div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
			<img
				src={model.img}
				alt={model.name}
				className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
			/>

			{/* Permanent Overlay for Readability */}
			<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

			<div className="absolute bottom-6 left-6 right-6">
				<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
					<div>
						<p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">
							{model.category}
						</p>
						<h4 className="text-2xl font-serif text-white">{model.name}</h4>
					</div>
					<Sparkles className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
					<div className="flex items-center gap-2">
						<ScanFace size={16} /> {model.stats}
					</div>
					<div className="flex items-center gap-2">
						<Palette size={16} /> {model.vibe}
					</div>
				</div>
			</div>
		</div>
	</div>
);

// const ModelShowcase = () => {
// 	return (
// 		<div className="bg-white min-h-screen">

// 			{/* --- SECTION 1: EDITORIAL SHOWCASE (Standard) --- */}
// 			<section className="py-20 px-6 max-w-7xl mx-auto">

// 				{/* Header */}
// 				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// 					<div className="space-y-4">
// 						<h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-none">
// 							Featured <br /> <span className="italic text-slate-400">AI Models</span>
// 						</h2>
// 						<div className="h-1 w-24 bg-purple-600 rounded-full"></div>
// 					</div>
// 					<p className="max-w-md text-slate-600 text-lg leading-relaxed text-right md:text-left">
// 						Discover our diverse range of AI-generated personalities. Perfect for high-fashion, editorials, and commercial campaigns.
// 					</p>
// 				</div>

// 				{/* Masonry Grid */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 					{standardModels.map((model) => (
// 						<ModelCard key={model.id} model={model} />
// 					))}
// 				</div>
// 			</section>

// 			{/* --- SECTION 2: THE INCLUSIVE COLLECTION (Obese/Plus Size) --- */}
// <section className="bg-slate-900 py-24 relative overflow-hidden">

// 	{/* Decorative Background Elements */}
// 	<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
// 	<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

// 	<div className="max-w-7xl mx-auto px-6 relative z-10">

// 		<div className="flex flex-col lg:flex-row gap-12 lg:items-center">

// 			{/* Sticky Text Info */}
// 			<div className="lg:w-1/3 space-y-6">
// 				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider">
// 					<Heart size={12} fill="currentColor" /> Body Positivity
// 				</div>

// 				<h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// 					The Inclusive <br />
// 					<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Collection</span>
// 				</h2>

// 				<p className="text-slate-400 text-lg leading-relaxed">
// 					Breaking barriers in fashion technology. Our "Real Bodies" AI engine generates stunning, authentic representations of diverse body types, ensuring your brand resonates with everyone.
// 				</p>

// 				<button className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-all">
// 					View Full Collection <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
// 				</button>
// 			</div>

// 			{/* Horizontal Scroll Gallery */}
// 			<div className="lg:w-2/3">
// 				<div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
// 					{plusSizeModels.map((model) => (
// 						<InclusiveCard key={model.id} model={model} />
// 					))}

// 					{/* "See More" Card placeholder */}
// 					<div className="flex-shrink-0 w-[200px] h-[450px] flex items-center justify-center border border-dashed border-slate-700 rounded-xl text-slate-500 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer snap-center">
// 						<div className="text-center">
// 							<span className="text-3xl font-serif block mb-2">+ 24</span>
// 							<span className="text-sm">More Models</span>
// 						</div>
// 					</div>

// 				</div>
// 			</div>

// 		</div>
// 	</div>
// </section>

// 		</div>
// 	);
// };

// export default ModelShowcase;

import React, { useRef } from "react";
import {
	ArrowUpRight,
	Sparkles,
	User,
	Info,
	ChevronLeft,
	ChevronRight,
	Heart,
	ScanFace,
	Palette,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

/* --- MOCK DATA GENERATOR --- */
// Generating 15 standard models

const models = [
	{
		id: 1,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_007.png",
		alt: "AI Model 1",
		type: "Commercial",
	},
	{
		id: 2,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/female/female_model_012.png",
		alt: "AI Model 2",
		type: "Editorial",
	},
	{
		id: 3,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_012.png",
		alt: "AI Model 3",
		type: "Commercial",
	},
	{
		id: 4,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_023.png",
		alt: "AI Model 4",
		type: "Editorial",
	},
	{
		id: 5,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/male/male_model_035.png",
		alt: "AI Model 5",
		type: "Commercial",
	},
	{
		id: 6,
		img: "https://ai4fi-bucket.s3.amazonaws.com/formal/female/female_model_005.png",
		alt: "AI Model 6",
		type: "Editorial",
	},
];
const standardModels = Array.from({ length: 15 }).map((_, i) => ({
	id: i,
	name: `Model ${String.fromCharCode(65 + i)}`,
	img: `https://source.unsplash.com/random/400x600?fashion,model,portrait&sig=${i}`, // Using Unsplash Random for demo
	type: i % 2 === 0 ? "Editorial" : "Commercial",
}));

// Generating 10 plus-size models
const plusSizeModels = Array.from({ length: 10 }).map((_, i) => ({
	id: i + 20,
	name: `Curvy Model ${i + 1}`,
	img: `https://source.unsplash.com/random/400x600?plus-size,fashion,woman&sig=${i + 20}`,
	tag: "Body Positive",
}));

/* --- STYLES FOR ANIMATION --- */
// You can add this to your CSS file or use a <style> tag
const marqueeStyle = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
  .animate-marquee-reverse {
    animation: marquee-reverse 40s linear infinite;
  }
  .pause-hover:hover {
    animation-play-state: paused;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const ModelCard = ({ model, isDark = false }) => (
	<div
		className={`
    relative flex-shrink-0 w-[280px] h-[420px] rounded-2xl overflow-hidden cursor-pointer group mx-3
    ${isDark ? "shadow-[0_0_30px_rgba(168,85,247,0.15)]" : "shadow-xl"}
  `}
	>
		<img
			src={model.img}
			alt={model.name}
			className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
			loading="lazy"
		/>

		{/* Gradient Overlay */}
		<div
			className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-purple-900/90" : "from-black/80"} via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300`}
		></div>

		{/* Content */}
		<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
			<div className="flex justify-between items-end">
				<div>
					<span
						className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${isDark ? "text-purple-300" : "text-gray-300"}`}
					>
						{model.type || model.tag}
					</span>
					<h3 className="text-2xl font-serif text-white italic">
						{model.name}
					</h3>
				</div>
				<div
					className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? "bg-purple-500 text-white" : "bg-white text-black"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}
				>
					<ArrowUpRight size={20} />
				</div>
			</div>
		</div>
	</div>
);

const InfiniteShowcase = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const { scrollLeft, clientWidth } = scrollRef.current;
			const scrollAmount = clientWidth * 0.8; // Scroll 80% of view width
			const scrollTo =
				direction === "left"
					? scrollLeft - scrollAmount
					: scrollLeft + scrollAmount;

			scrollRef.current.scrollTo({
				left: scrollTo,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="bg-background min-h-screen overflow-hidden font-sans selection:bg-purple-200">
			<style>{marqueeStyle}</style>

			{/* --- HEADER --- */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:px-8">
				<SectionHeader
					subtitle="Featured AI Model"
					title=" Diverse Identities
Infinite Possibilities"
					description="Discover our diverse range of AI-generated fashion models"
				/>
			</div>

			{/* --- MARQUEE 1: Standard Models (Row 1 - Left) --- */}
			<div className="relative w-full overflow-hidden mb-8 group">
				<div className="flex w-max animate-marquee pause-hover">
					{/* Double the array to create seamless loop */}
					{[...models, ...models].map((model, idx) => (
						<ModelCard key={`row1-${idx}`} model={model} />
					))}
				</div>

				{/* Fog Fade Effect on Edges */}
				<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
				<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
			</div>

			{/* --- MARQUEE 2: Standard Models (Row 2 - Right) --- */}
			<div className="relative w-full overflow-hidden mb-24 group">
				<div className="flex w-max animate-marquee-reverse pause-hover">
					{[...models.reverse(), ...models].map((model, idx) => (
						<ModelCard key={`row2-${idx}`} model={model} />
					))}
				</div>
				<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
				<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
			</div>

			{/* --- SECTION: SPECIAL CATEGORY (Dark Mode) --- */}
			<section className="bg-background py-24 relative overflow-hidden">
				{/* Decorative Background Elements */}
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="flex flex-col lg:flex-row gap-12 lg:items-center">
						{/* Sticky Text Info */}
						<div className="lg:w-1/3 space-y-6">
							<span className='inline-block px-3 w-fit text-center  border-border border glass-card flex items-center gap-2 py-1 bg-primary/10 backdrop-blur-sm text-muted-secondary rounded-full mb-3'>
								<Heart size={12} stroke="none" fill="var(--muted-foreground)" />
								<span className="text-muted-foreground">Body Positivity</span>
							</span>
							<h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
								The Inclusive <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
									Collection
								</span>
							</h2>

							<p className="text-slate-400 text-lg leading-relaxed">
								Breaking barriers in fashion technology. Our "Real Bodies" AI
								engine generates stunning, authentic representations of diverse
								body types, ensuring your brand resonates with everyone.
							</p>

							<button className="group flex items-center gap-2 text-brand border-b border-brand pb-1 hover:text-brand hover:border-brand transition-all">
								View Full Collection{" "}
								<ChevronRight
									size={16}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
						</div>

						{/* Horizontal Scroll Gallery */}
						<div className="lg:w-2/3 relative group/carousel">
							<div
								ref={scrollRef}
								className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide scroll-smooth"
							>
								{models.map((model) => (
									<InclusiveCard key={model.id} model={model} />
								))}

								{/* "See More" Card placeholder */}
								<div className="flex-shrink-0 w-[200px] h-[450px] flex items-center justify-center border border-dashed border-slate-700 rounded-xl text-slate-500 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer snap-center">
									<div className="text-center">
										<span className="text-3xl font-serif block mb-2">+ 24</span>
										<span className="text-sm">More Models</span>
									</div>
								</div>
							</div>

							{/* Navigation Arrows */}
							<button
								onClick={() => scroll('left')}
								className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/20 z-20"
								aria-label="Scroll Left"
							>
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={() => scroll('right')}
								className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/20 z-20"
								aria-label="Scroll Right"
							>
								<ChevronRight size={24} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default InfiniteShowcase;
