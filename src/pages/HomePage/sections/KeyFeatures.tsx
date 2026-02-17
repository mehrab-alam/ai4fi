import { useState, useEffect, useRef } from 'react';
import { TrendingUp, ImageIcon, Paintbrush, Upload, Video } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

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
        { icon: ImageIcon, text: "Instant preview generation" }
      ],
      image: "./trial_room.jpeg",
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "Photo Studio",
      subtitle: "AI Product Enhancement",
      description:
        "Transform raw product photos into professional, listing-ready visuals with automated lighting correction, background styling, and marketplace optimization.",
      steps: [
        { icon: Upload, text: "Upload raw product photos" },
        { icon: Paintbrush, text: "Enhance lighting & backgrounds" },
        { icon: ImageIcon, text: "Generate listing-ready visuals" }
      ],
      image: "./photo_studio.jpeg",
      accentColor: "from-purple-500 to-pink-500"
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
        { icon: Video, text: "Convert creatives into ad videos" }
      ],
      image: "./ad.jpeg",
      accentColor: "from-orange-500 to-red-500"
    }
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
          rootMargin: '-200px 0px -50% 0px',
          threshold: 0.1,
        }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {theme == 'dark' && <div className='absolute inset-0  dark:bg-gradient-to-br from-cyan-950 via-black to-sky-950'></div>}
      <div className="max-w-[100vw] mx-auto  bg-background ">
        {/* Sticky Header + Tabs */}
        <div className="sticky top-[-120px] z-20 bg-background pb-6 pt-2 ">
          <SectionHeader title="Key Features" description="Transform your operations with intelligent automation" subtitle="Why Choose Us" icon={<TrendingUp className="text-muted-foreground" size={18} />} />

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 overflow-x-auto pb-2">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${activeIndex === index
                  ? 'bg-brand-color shadow-lg scale-105 text-white border border-brand-color'
                  : 'bg-mute-secondary shodow-lg border border-border hover:bg-secondary/80'
                  }`}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accentColor}`} />
                <span className={`font-medium ${activeIndex === index ? 'text-white' : 'text-muted-foreground'
                  }`}>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Sections */}
        <div className="mt-8 relative z-[1] space-y-16 max-w-[90vw] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="scroll-mt-[280px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-secondary rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center`}>
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {feature.title}
                        </h2>
                        <p className={`text-sm font-medium bg-gradient-to-r ${feature.accentColor} bg-clip-text text-transparent`}>
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mb-8">
                      <h5 className=" mb-4 uppercase tracking-wide">
                        Steps
                      </h5>
                      <div className="space-y-4">
                        {feature.steps.map((step, idx) => {
                          const Icon = step.icon;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.accentColor} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-foreground font-medium">
                                {step.text}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    <button className={`px-8 py-4 rounded-xl bg-gradient-to-r ${feature.accentColor} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      Learn More
                    </button>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-background/50">
                    <div className="absolute inset-0">
                      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-5 pointer-events-none`} />
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
              <div className={`w-12 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? `bg-gradient-to-r ${features[index].accentColor}`
                : 'bg-slate-300 hover:bg-slate-400'
                }`}>
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
