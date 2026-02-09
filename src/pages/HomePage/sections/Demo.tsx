import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Zap,
  Check,
  RefreshCw,
  Users,
  Layers,
  LayoutGrid,
  Clock,
  Sparkles,
  ChevronRight,
  Dna,
  Infinity,
  UserCog,
  ScanSearch,
  Sun,
  Image,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HeroVideoDialog } from "../../../components/common/VideoPlayer";
import authService from "../../../services/authService";

const DemoSection = () => {
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

  // Feature lists for each video section
  const features = {
    intro: [
      {
        icon: <Zap className='w-5 h-5 text-primary' />,
        title: "Instant AI Models",
        description: "Generate in 10 seconds",
      },
      {
        icon: <Check className='w-5 h-5 text-primary' />,
        title: "4K Photorealism",
        description: "High-quality, lifelike results",
      },
      {
        icon: <UserCog className='w-5 h-5 text-primary' />,
        title: "Fully Customizable",
        description: "Pose, body type, hairstyle & more",
      },
      {
        icon: <Infinity className='w-5 h-5 text-primary' />,
        title: " Unlimited Variations",
        description: " Perfect for e-commerce & marketing",
      },
    ],
    features: [
      {
        icon: <Users className='w-5 h-5 text-primary' />,
        title: "Up to 4 Poses",
        description: "Showcase outfits from every angl",
      },
      {
        icon: <Layers className='w-5 h-5 text-primary' />,
        title: "Lighting & Background ",
        description: "Customize for a perfect look",
      },
      {
        icon: <Dna className='w-5 h-5 text-primary' />,
        title: "DNA Number",
        description: "Keep the same model across multiple poses",
      },
    ],
    walkthrough: [
      {
        icon: <ScanSearch className='w-5 h-5 text-primary' />,
        title: "Realistic Fit",
        description: "See how garments look on AI models",
      },
      {
        icon: <Sparkles className='w-5 h-5 text-primary' />,
        title: "Instant Visualization",
        description: " Try-on in seconds",
      },
      {
        icon: <Image className='w-5 h-5 text-primary' />,
        title: "4K Quality",
        description: "High-detail, lifelike results",
      },
      {
        icon: <UserCog className='w-5 h-5 text-primary' />,
        title: "Customizable Models",
        description: "Body type, skin tone & more",
      },
      {
        icon: <Sun className='w-5 h-5 text-primary' />,
        title: "Lighting & Background",
        description: " Match your brand aesthetic",
      },
    ],
  };

  return (
    <section id='demo' className='py-20 relative overflow-hidden bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'>
          <span className='inline-block px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium rounded-full mb-3'>
            Visual Demonstrations
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-foreground'>
            See AI4FI in Action
          </h2>
          <p className='text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto'>
            Watch how our AI transforms fashion visualization through these interactive demonstrations
          </p>
        </motion.div>

        {/* Section 1: Introduction Video (Right) and Features (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mb-24 md:mb-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Features Column (Left on desktop) */}
            <div className='order-2 md:order-1'>
              <div className='mb-6'>
                <h3 className='text-2xl md:text-3xl font-bold mb-3 text-foreground'>AI4FI – Single Pose Model Generator</h3>
                <p className='text-muted-foreground'>No costly photoshoots – just instant, professional AI models! Watch the demo now.</p>
              </div>

              <div className='gap-6 grid md:grid-cols-2 grid-cols-1'>
                {features.intro.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start'>
                    <div className='mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg'>{feature.icon}</div>
                    <div>
                      <h4 className='font-medium text-lg text-foreground mb-1'>{feature.title}</h4>
                      <p className='text-muted-foreground text-sm'>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Column (Right on desktop) */}
            <div className='order-1 md:order-2 relative'>
              <HeroVideoDialog
                className=''
                animationStyle='from-center'
                videoSrc='https://youtube.com/embed/sxFmNNgnoXE'
                thumbnailSrc='/thumbnail-2.png'
                thumbnailAlt='Hero Video'
              />
            </div>
          </div>
        </motion.div>

        {/* Section 2: Features Video (Left) and Features (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mb-24 md:mb-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Video Column (Left on desktop) */}
            <div className='relative'>
              <HeroVideoDialog
                className=''
                animationStyle='from-center'
                videoSrc='https://youtube.com/embed/MOamlPbz0OQ'
                thumbnailSrc='/thumbnail-2.png'
                thumbnailAlt='Hero Video'
              />
            </div>

            {/* Features Column (Right on desktop) */}
            <div>
              <div className='mb-6'>
                <h3 className='text-2xl md:text-3xl font-bold mb-3 text-foreground'>AI4FI – Multi-Pose Model Generator</h3>
                <p className='text-muted-foreground'>Perfect for e-commerce, catalogs & fashion marketing! Watch the demo now.</p>
              </div>

              <div className='gap-6 grid md:grid-cols-2 grid-cols-1'>
                {features.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start'>
                    <div className='mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg'>{feature.icon}</div>
                    <div>
                      <h4 className='font-medium text-lg text-foreground mb-1'>{feature.title}</h4>
                      <p className='text-muted-foreground text-sm'>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Platform Walkthrough Video (Right) and Features (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Features Column (Left on desktop) */}
            <div className='order-2 md:order-1'>
              <div className='mb-6'>
                <h3 className='text-2xl md:text-3xl font-bold mb-3 text-foreground'>AI4FI – Virtual Try-On</h3>
                <p className='text-muted-foreground'>Enhance customer confidence & reduce returns! Watch the demo now.</p>
              </div>

              <div className='gap-6 grid md:grid-cols-2 grid-cols-1'>
                {features.walkthrough.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start'>
                    <div className='mr-4 p-2 bg-muted backdrop-blur-sm rounded-lg'>{feature.icon}</div>
                    <div>
                      <h4 className='font-medium text-lg text-foreground mb-1'>{feature.title}</h4>
                      <p className='text-muted-foreground text-sm'>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Column (Right on desktop) */}
            <div className='order-1 md:order-2 relative'>
              <HeroVideoDialog
                className=''
                animationStyle='from-center'
                videoSrc='https://youtube.com/embed/EYiOCLktwuo'
                thumbnailSrc='/thumbnail-3.png'
                thumbnailAlt='Hero Video'
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mt-16 md:mt-24'>
          <div className='bg-card border border-border backdrop-blur-lg p-8 md:p-12 rounded-2xl'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4 text-foreground'>Ready to Transform Your Fashion Content?</h3>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Join thousands of fashion brands already using AI4FI to create stunning, diverse model imagery at a fraction of traditional
              costs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (authService.isAuthenticated()) {
                    navigate("/virtualtryon");
                  } else {
                    navigate("/login");
                  }
                }}
                className='bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'>
                Try It
              </motion.button>

              <Link to='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-background border border-input text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-all duration-300'>
                  Schedule a Demo
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
