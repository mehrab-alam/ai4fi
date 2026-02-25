// import { useCallback, useEffect, useState } from "react";
// import modelService from "../services/modelService";
import modelGalleryList from "../services/ModelGallery";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { ArrowRight, Check, ZoomIn } from "lucide-react";
// import { setSelectedModel } from "../store/modelSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import authService from "../services/authService";

// interface Image {
//   src: string;
//   alt: string;
// }

// interface Categories {
//   [key: string]: Image[];
// }

// interface ListImages {
//   category: string;
//   female: string[];
//   male: string[];
// }

// function mergeAndShuffle(arr1: string[], arr2: string[], gender: string) {
//   let merged = []; // Combine arrays

//   if (gender === "male") {
//     merged.push(...arr2);
//   } else if (gender === "female") {
//     merged.push(...arr1);
//   } else {
//     merged.push(...[...arr2, ...arr1]);
//   }

//   // for (let i = merged.length - 1; i > 0; i--) {
//   //   let j = Math.floor(Math.random() * (i + 1));
//   //   [merged[i], merged[j]] = [merged[j], merged[i]];
//   // }
//   return merged;
// }

// const HomePageGallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [zoomedImage, setZoomedImage] = useState<string>("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState<string>("formal");
//   const [gender, setGender] = useState<string>("all");
//   const [images, setImages] = useState<ListImages>({ category: "", female: [], male: [] });
//   const [renderImages, setRenderImages] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const { selectedModel } = useSelector((state: RootState) => state.modelList);
//   const categories: Categories = {
//     formal: [],
//     casual: [],
//     lingerie: [],
//     PlusSize:[]
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     // Small delay to ensure smooth transition
//     setTimeout(() => {
//       const imageDataList: ListImages = modelGalleryList.find((c) => c.category === activeCategory) as ListImages;
//       const data = mergeAndShuffle(imageDataList?.female, imageDataList.male, gender);
//       setRenderImages(data);
//       setImages(() => imageDataList as ListImages);
//       setIsLoading(false);
//     }, 300);
//   }, [modelGalleryList, activeCategory, gender]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className='min-h-screen px-10 py-32 bg-background dark:bg-transparent dark:bg-gradient-to-br from-sky-950 to-gray-950'>
//       {/* Fixed Buttons */}
//       <div className='flex justify-center md:justify-between gap-3 flex-wrap'>
//         <div className=' flex space-x-4'>
//           {Object.keys(categories).map((category) => (
//             <button
//               key={category}
//               className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform shadow-md ${
//                 activeCategory === category
//                   ? "bg-brand-color text-white scale-105 shadow-lg"

//                   : "text-foreground bg-card hover:bg-brand-color dark:border-0 border-border border hover:text-white"

//               }`}
//               onClick={() => setActiveCategory(category)}>
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//           {authService.isAuthenticated() && selectedModel.length > 0 && (
//             <button
//               onClick={() => navigate("/virtualtryon", { state: "gallery" })}
//               className='flex text-sm justify-center gap-2 items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 text-white font-bold px-8 py-2 rounded-lg shadow-lg transition-transform'>
//               <span>Use try on</span> <ArrowRight size={20} />
//             </button>
//           )}
//         </div>
//         <div className='flex items-center gap-2 text-white'>
//           <span>Filter : </span>
//           <button
//             className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform shadow-md ${
//               gender === "male"
//                 ? "bg-brand-color text-white scale-105 shadow-lg"
//                 : "text-foreground  bg-card hover:bg-brand-color dark:border-0 border-border border hover:text-white"
//             }`}
//             onClick={() => (gender === "male" ? setGender("") : setGender("male"))}>
//             Male
//           </button>
//           <button
//             className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform shadow-md ${
//               gender === "female"
//                 ? "bg-brand-color text-white scale-105 shadow-lg"
//                 : "text-foreground  bg-card hover:bg-brand-color dark:border-0 border-border border hover:text-white"
//             }`}
//             onClick={() => (gender === "female" ? setGender("") : setGender("female"))}>
//             Female
//           </button>
//         </div>
//       </div>

//       {/* Loader Overlay */}
//       {isLoading && (
//         <div className='fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center z-50 !ml-0'>
//           <div className='flex flex-col items-center gap-4'>
//             <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
//             <p className='text-foreground text-lg font-semibold'>Loading category...</p>
//           </div>
//         </div>
//       )}

//       {/* Image Grid */}
//       <div className='pt-5'>
//         <section className={`transition-all duration-300 block min-h-screen ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
//           {/* Image Grid */}
//           <div className='flex gap-3 flex-wrap items-start justify-around'>
//             {renderImages.map((image, index) => (
//               <div
//                 key={index}
//                 onClick={() => {
//                   if (authService.isAuthenticated()) {
//                     if (selectedModel.length < 4 || selectedModel.includes(`${image}`)) {
//                       dispatch(setSelectedModel(`${image}`));
//                     } else {
//                       return toast.info("You can select only 4 images at a time ");
//                     }
//                   }
//                 }}
//                 className='relative bg-gray-800 w-[275px] h-[413px] rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-300'>
//                 <img
//                   src={image}
//                   alt={`model_${index}`}
//                   className='w-full h-full object-cover transform transition duration-300 group-hover:scale-105'
//                 />

//                 {authService.isAuthenticated() && (
//                   <div
//                     className={`absolute inset-0 bg-black/40 transition-opacity ${
//                       selectedModel.includes(`${image}`) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                     }`}>
//                     <div className='absolute top-4 right-4'>
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                           selectedModel.includes(`${image}`) ? "bg-blue-500" : "bg-white"
//                         }`}>
//                         <Check className={`w-5 h-5 ${selectedModel.includes(`${image}`) ? "text-white" : "text-gray-900"}`} />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   className={`absolute inset-0 bg-black/40 transition-opacity ${
//                     zoomedImage.includes(`${image}`) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                   }`}>
//                   <div className='flex items-center h-full justify-center'>
//                     <div className='flex space-x-4'>
//                       <ZoomIn
//                         className='h-6 w-6 cursor-pointer text-gray-100 hover:text-blue-400'
//                         onClick={() => {
//                           setZoomedImage(image);
//                           setIsModalOpen(true);
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {isModalOpen && (
//             <div
//               className='fixed inset-0 bg-black bg-opacity-75  !ml-0 flex items-center justify-center z-50'
//               onClick={() => setIsModalOpen(false)}>
//               <div className='relative'>
//                 <img src={zoomedImage} alt='Zoomed' className='max-w-full max-h-screen' />
//                 <button
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setZoomedImage("");
//                   }}
//                   className='absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth={1.5}
//                     stroke='currentColor'
//                     className='w-6 h-6'>
//                     <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HomePageGallery;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelectedModel } from "../store/modelSlice";
import { Search, Check, X, MousePointer2 } from "lucide-react";
import "./HomePageGallery.css";

/* ─── DATA ─────────────────────────────────────────────────── */
const CATEGORIES = [
	{
		id: "women",
		label: "Women",
		icon: "♀",
		color: "#d4af7a",
		rgb: "212, 175, 122",
	},
	{
		id: "men",
		label: "Men",
		icon: "♂",
		color: "#7ab8d4",
		rgb: "122, 184, 212",
	},
	{
		id: "boys",
		label: "Boys",
		icon: "◇",
		color: "#7ad4a8",
		rgb: "122, 212, 168",
	},
	{
		id: "girls",
		label: "Girls",
		icon: "✦",
		color: "#d47ab8",
		rgb: "212, 122, 184",
	},
	{
		id: "baby",
		label: "Baby",
		icon: "◎",
		color: "#d4c87a",
		rgb: "212, 200, 122",
	},
];

const seeds = {
	women: [
		"cara1",
		"cara2",
		"cara3",
		"cara4",
		"cara5",
		"cara6",
		"cara7",
		"cara8",
		"cara9",
		"cara10",
		"cara11",
		"cara12",
		"cara13",
		"cara14",
		"cara15",
		"cara16",
		"cara17",
		"cara18",
	],
	men: [
		"men1",
		"men2",
		"men3",
		"men4",
		"men5",
		"men6",
		"men7",
		"men8",
		"men9",
		"men10",
		"men11",
		"men12",
	],
	boys: ["boy1", "boy2", "boy3", "boy4", "boy5", "boy6", "boy7", "boy8"],
	girls: [
		"girl1",
		"girl2",
		"girl3",
		"girl4",
		"girl5",
		"girl6",
		"girl7",
		"girl8",
	],
	baby: ["bab1", "bab2", "bab3", "bab4", "bab5", "bab6"],
};

const names = {
	women: [
		"Aria",
		"Luna",
		"Sofia",
		"Maya",
		"Zara",
		"Elena",
		"Nora",
		"Priya",
		"Leila",
		"Ines",
		"Camila",
		"Mia",
		"Yuki",
		"Sara",
		"Aisha",
		"Ruby",
		"Grace",
		"Lily",
	],
	men: [
		"Ethan",
		"Noah",
		"Liam",
		"James",
		"Omar",
		"Kai",
		"Leo",
		"Ravi",
		"Marcus",
		"Drew",
		"Alex",
		"Sam",
	],
	boys: ["Finn", "Eli", "Max", "Jake", "Remy", "Cole", "Theo", "Ben"],
	girls: ["Emma", "Ava", "Chloe", "Bella", "Zoey", "Nina", "Isla", "Hana"],
	baby: ["Cub·A", "Cub·B", "Cub·C", "Cub·D", "Cub·E", "Cub·F"],
};

// Varying aspect ratios for editorial masonry feel
const aspects = [
	"3/4",
	"3/4",
	"2/3",
	"3/4",
	"3/4",
	"4/5",
	"3/4",
	"2/3",
	"3/4",
	"3/4",
	"3/4",
	"2/3",
	"3/4",
	"4/5",
	"3/4",
	"3/4",
	"3/4",
	"3/4",
];

const buildModels = (cat: string) =>
	(seeds[cat as keyof typeof seeds] || []).map((seed, i) => ({
		id: `${cat}-${i}`,
		cat,
		name: (names[cat as keyof typeof names] || [])[i] || `Model ${i + 1}`,
		img: `https://picsum.photos/seed/${seed}/400/520`,
		hero: i === 0,
		aspect: aspects[i] || "3/4",
	}));

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function HomePageGallery() {
	const [activeCat, setActiveCat] = useState("women");
	const [search, setSearch] = useState("");
	const [cursor, setCursor] = useState({ x: 0, y: 0 });

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { selectedModel } = useSelector((state: RootState) => state.modelList);

	const cat = CATEGORIES.find((c) => c.id === activeCat) || CATEGORIES[0];
	const models = buildModels(activeCat);
	const filtered = models.filter((m) =>
		m.name.toLowerCase().includes(search.toLowerCase()),
	);

	const toggle = (imgUrl: string) => {
		dispatch(setSelectedModel(imgUrl));
	};

	// Track mouse for spotlight
	useEffect(() => {
		const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	// Reset search on tab switch
	useEffect(() => setSearch(""), [activeCat]);

	return (
		<div
			className="gallery-root relative"
			style={
				{
					"--cat-color": cat.color,
					"--cat-color-rgb": cat.rgb,
				} as React.CSSProperties
			}
		>
			{/* Ambient cursor glow */}
			<div
				className="glow-blob"
				style={{
					left: cursor.x,
					top: cursor.y,
					background: `radial-gradient(circle, ${cat.color} 0%, transparent 65%)`,
				}}
			/>

			<div className="gallery-body ">
				{/* ── RAIL (Inner Sidebar) ── */}
				<aside className="rail sticky top-[80px] h-[calc(100vh-100px)]">
					{CATEGORIES.map((c) => (
						<button
							key={c.id}
							className={`rail-btn${activeCat === c.id ? " active" : ""}`}
							style={
								activeCat === c.id
									? ({
											"--cat-color": c.color,
											"--cat-color-rgb": c.rgb,
										} as React.CSSProperties)
									: {}
							}
							onClick={() => setActiveCat(c.id)}
						>
							<span className="rail-pip" />
							<span className="rail-icon">{c.icon}</span>
							<span className="rail-label">{c.label}</span>
						</button>
					))}
				</aside>

				{/* ── MAIN CONTENT ── */}
				<div className="gallery-main">
					{/* Sticky Header inside Gallery */}
					<div className="gallery-header">
						<div className="header-left">
							<div className="header-eyebrow">
								<span className="eyebrow-line" />
								AI Model Studio · {cat.label}
								<span className="eyebrow-line" />
							</div>
							<h1 className="header-title">
								Select Your <em>{cat.label}</em> Cast
							</h1>
							<p className="text-sm">
								{filtered.length} models available — click to choose
							</p>
						</div>

						<div className="flex items-center gap-3">
							<div className="search-wrap">
								<span className="search-icon">
									<Search size={14} />
								</span>
								<input
									className="search-input"
									placeholder="Search models..."
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
							{selectedModel.length > 0 && (
								<div className="count-badge">
									{selectedModel.length} Selected
								</div>
							)}
						</div>
					</div>

					{/* Grid Area */}
					<div className="grid-area">
						{filtered.length === 0 ? (
							<div className="flex flex-col items-center justify-center py-20 opacity-30">
								<MousePointer2 size={48} className="mb-4" />
								<p className="font-serif text-xl italic">
									No models found for "{search}"
								</p>
							</div>
						) : (
							<div className="masonry">
								{filtered.map((m, i) => (
									<div
										key={m.id}
										className="card-wrap"
										style={{ animationDelay: `${Math.min(i * 0.03, 0.5)}s` }}
									>
										<div
											className={`model-card${selectedModel.includes(m.img) ? " sel" : ""}`}
											onClick={() => toggle(m.img)}
										>
											<div
												style={{
													paddingTop:
														m.aspect === "2/3"
															? "150%"
															: m.aspect === "4/5"
																? "125%"
																: "133%",
													position: "relative",
												}}
											>
												<img
													className="card-img"
													src={m.img}
													alt={m.name}
													loading="lazy"
													style={{
														position: "absolute",
														inset: 0,
														width: "100%",
														height: "100%",
													}}
												/>
												<div className="card-cinematic" />
												{m.hero && <div className="hero-badge">Featured</div>}
												<div className="tick">
													<Check size={14} />
												</div>
												<div className="card-info">
													<div className="info-name">{m.name}</div>
													<div className="info-sub">
														{cat.label} · AI Generated
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Selection Tray / Bottom Action Bar */}
					<div className="tray">
						<div className="tray-label">Selection</div>
						<div className="tray-slots">
							{selectedModel.length === 0 ? (
								<div className="tray-empty">
									Select models from the gallery to begin your virtual try-on
								</div>
							) : (
								selectedModel.map((imgUrl, idx) => (
									<div
										key={idx}
										className="tray-card"
										onClick={() => toggle(imgUrl)}
									>
										<img src={imgUrl} alt="Selected Model" />
										<div className="tray-remove">
											<X size={14} />
										</div>
									</div>
								))
							)}
						</div>
						<button
							className="proceed-btn"
							disabled={selectedModel.length === 0}
							onClick={() =>
								navigate("/virtualtryon", { state: { from: "gallery" } })
							}
						>
							Start Try-On
							{selectedModel.length > 0 && (
								<span className="proceed-count">{selectedModel.length}</span>
							)}
						</button>
					</div>
				</div>
				{/* /gallery-main */}
			</div>
			{/* /gallery-body */}
		</div>
	);
}
