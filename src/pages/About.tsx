import React from 'react';
import {
  Palette, Zap, Coins, Globe, Leaf, Rocket,
  ArrowRight
} from 'lucide-react';

/* --- MOCK DATA FOR "STORYTELLING" CARDS --- */
const features = [
  {
    icon: Palette,
    title: "AI Trial Room",
    description: "Brands can upload garments and instantly visualize them on photorealistic AI fashion models, Multiple poses, angles, and styling variations can be generated—ready for direct deployment on e-commerce platforms",
    // Image: Artistic/Makeup - shows detail and control
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
    delay: "0ms"
  },
  {
    icon: Zap,
    title: "AI Product Shoot Studio",
    description: "AI4FI replaces traditional photoshoots with a virtual product studio, enabling highquality catalog and lifestyle imagery without physical setups, locations, or reshoots",
    // Image: Motion/Walking - implies speed and movement
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    delay: "100ms"
  },
  {
    icon: Coins,
    title: "AI Model Generator",
    description: `Create fashion models tailored to brand requirements, including body type, gender,
skin tone, posture, and styling—eliminating dependency on agencies and reducing
production cycles.`,
    // Image: Luxury/Gold - implies high value/expensive look
    image: "https://images.unsplash.com/photo-1544413660-177743612d52?auto=format&fit=crop&w=800&q=80",
    delay: "200ms"
  },
  {
    icon: Globe,
    title: "Virtual Try-On Experience",
    description: `Enable customers to try products on their own body, improving purchase confidence,
engagement, and conversion while reducing return rates.`,
    // Image: Distinctive features/Portrait - shows diversity
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    delay: "300ms"
  },
  {
    icon: Leaf,
    title: "AI Ad & Video Generator",
    description: `Generate ready-to-use marketing creatives, ad assets, and short promotional
videos for social media, marketplaces, and performance campaigns—powered entirely
by AI`,
    // Image: Natural/Outdoor/Organic tones
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    delay: "400ms"
  },

];

const StoryCard = ({ icon: Icon, title, description, image, delay }) => (
  <div
    className="group relative h-[420px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1"
    style={{ animationDelay: delay }}
  >
    {/* 1. Background Image with Ken Burns Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
      />
      {/* Light Flash Effect on Hover */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
    </div>

    {/* 2. Gradient Overlay (White Fade Up) - Ensures text readability on light SaaS theme */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent opacity-90 transition-opacity duration-300"></div>

    {/* 3. Content Layer */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">

      {/* Icon floating */}
      <div className="absolute top-6 left-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-slate-900" size={24} strokeWidth={1.5} />
      </div>

      <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl mb-8 group-hover:mb-3 font-bold text-slate-900 tracking-tight">
          {title}
        </h3>

        <p className="text-slate-600  leading-relaxed font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 h-0 group-hover:h-auto overflow-hidden">
          {description}
        </p>

        {/* Learn More Link - Appears on Hover */}
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span>Explore Feature</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Default State Description (Visible when not hovering, fades out on hover) */}
      <p className="text-slate-500 mt-4 text-ellipsis line-clamp-2  text-sm leading-relaxed font-medium absolute bottom-8 left-8 right-8 group-hover:opacity-0 transition-opacity duration-300">
        {description}
      </p>
    </div>
  </div>
);

const WhyChooseSection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden font-sans">

      {/* Background Subtle Grid - Professional SaaS look */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Ambient Light Blobs (Very subtle) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Why AI4FI?
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The New Standard in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fashion Visualization</span>
          </h2>

          <p className="text-lg text-secondary-foreground leading-relaxed">
            AI4FI is a product of Seqtal AI Pvt Ltd, a Government of India–recognized startup
            authorized under the DPIIT – Startup India Program.

          </p>
          {/* <p className="text-base leading-relaxed">
            AI4FI is an enterprise-grade AI-powered fashion technology platform designed to
            transform how fashion brands create, visualize, and market their products in the digital
            world.

          </p> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <StoryCard
              key={idx}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;