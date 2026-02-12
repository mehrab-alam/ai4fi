import { ImageIcon, Paintbrush, Upload, Video } from "lucide-react"
import { useTheme } from "../../../context/ThemeContext"
import { motion } from "motion/react"
import Challenges from "./Challenges"
import KeyFeatureItems from "./KeyFeatureItems"


const KeyFeatures = () => {
    const {theme} = useTheme()
    const keyFeatures = [
        {
            direction:"ltr",
            banner:"./trial_room.jpeg",
            title: "Virtual Trial Room",
            description: "Select from our diverse range of AI-generated models to showcase your fashion.",
            steps:[
  {
    icon: <Paintbrush className='w-6 h-6 text-white' />,
    title: "Choose AI Model",
    description: "Select from our diverse range of AI-generated models to showcase your fashion.",
  },
  {
    icon: <Upload className='w-6 h-6 text-white' />,
    title: "Upload Garment",
    description: "Simply upload your fashion item images through our intuitive interface.",
  },
  {
    icon: <ImageIcon className='w-6 h-6 text-white' />,
    title: "Get Preview",
    description: "Receive instant, photo-realistic previews of your garments on chosen models.",
  },
],challenges:[
  "High costs associated with professional photoshoots",
  "Time-consuming scheduling and coordination",
  "Limited diversity in model representation",
  "Inconsistent lighting and styling across shoots",
]
        },
         {
            direction:"rtl",
            banner:"./photo_studio.jpeg",
            title: "Photo Studio",
            description: "Select from our diverse range of AI-generated models to showcase your fashion.",
           steps: [
  {
    icon: <Upload className='w-6 h-6 text-white' />,
    title: "Upload Raw Product Photo",
    description: "Add your unedited product images directly from your device—no studio setup required.",
  },
  {
    icon: <Paintbrush className='w-6 h-6 text-white' />,
    title: "Enhance & Style with AI",
    description: "Automatically improve lighting, backgrounds, and composition to create professional e-commerce visuals.",
  },
  {
    icon: <ImageIcon className='w-6 h-6 text-white' />,
    title: "Generate Listing-Ready Images",
    description: "Receive clean product shots, lifestyle scenes, and marketplace-optimized visuals instantly.",
  },
],

challenges: [
  "Raw product photos often look unprofessional or poorly lit",
  "High expenses for traditional product photography studios",
  "Difficulty creating consistent brand visuals across listings",
  "Need for multiple image styles (studio, lifestyle, marketplace formats)",
  "Time-consuming editing and manual background removal",
]

        },
         {
            direction:"ltr",
            banner:"./ad.jpeg",
            title: "Advertisement",
            description: "Select from our diverse range of AI-generated models to showcase your fashion.",
           steps: [
  {
    icon: <Upload className='w-6 h-6 text-white' />,
    title: "Upload Raw Product Photo",
    description: "Start with a simple product image—no professional setup or editing required.",
  },
  {
    icon: <Paintbrush className='w-6 h-6 text-white' />,
    title: "Clean & Prepare Product",
    description: "Automatically remove backgrounds, enhance quality, and isolate your product for ad-ready use.",
  },
  {
    icon: <ImageIcon className='w-6 h-6 text-white' />,
    title: "Generate AI Ad Creatives",
    description: "Place your product into lifestyle scenes and marketing visuals using AI-generated models and environments.",
  },
  {
    icon: <Video className='w-6 h-6 text-white' />,
    title: "Convert to Ad Video",
    description: "Turn static visuals into engaging promotional videos optimized for social media and ad platforms.",
  },
],

challenges: [
  "High costs of producing professional ad creatives and marketing visuals",
  "Difficulty creating consistent ads across multiple platforms",
  "Time-consuming manual editing and creative production",
  "Limited access to models, locations, and production setups",
  "Need for frequent fresh ad creatives to maintain campaign performance",
]

        }
    ]
    return (
           <section className='py-12 md:py-20 relative overflow-hidden bg-background '>
     {theme == 'dark' && <div className='  absolute inset-0 dark:bg-gradient-to-br from-sky-950  to-black' />}
      <div className='max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 md:mb-16'>
          <h2 className=' font-bold mb-4 text-foreground'>Key Features</h2>
          <p className='text-lg md:text-xl'> Experience fashion smarter—our AI models help you visualize outfits, fits, and styles before you choose.</p>
        </motion.div>
        <>
        
        {keyFeatures.map((feature,index)=>(
            <div key={index}>
             <KeyFeatureItems
             steps={feature.steps}
             challenges={feature.challenges}
             title={feature.title}
             banner={feature.banner}
             direction={feature.direction}
             />
            </div>
        ))}
        </>
        </div>
    </section>
    )
}
export default KeyFeatures