"use client";
import React from "react";
import { motion } from "framer-motion";
import { Upload, Paintbrush, ImageIcon } from "lucide-react";

const steps = [
  {
    icon: <Paintbrush className='w-6 h-6 text-foreground' />,
    title: "Choose AI Model",
    description: "Select from our diverse range of AI-generated models to showcase your fashion.",
  },
  {
    icon: <Upload className='w-6 h-6 text-foreground' />,
    title: "Upload Garment",
    description: "Simply upload your fashion item images through our intuitive interface.",
  },
  {
    icon: <ImageIcon className='w-6 h-6 text-foreground' />,
    title: "Get Preview",
    description: "Receive instant, photo-realistic previews of your garments on chosen models.",
  },
];

const challenges = [
  "High costs associated with professional photoshoots",
  "Time-consuming scheduling and coordination",
  "Limited diversity in model representation",
  "Inconsistent lighting and styling across shoots",
];

const HowItWorks = () => {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-12 max-w-full mx-auto bg-background'>
      {/* Steps Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4 text-foreground'>How It Works</h2>
        <p className='text-muted-foreground text-lg'>Three simple steps to transform your fashion showcase</p>
      </motion.div> */}

      {/* <div className='grid md:grid-cols-3 gap-8 mb-16'>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className='relative group bg-card rounded-2xl p-6 hover:shadow-md transition-all backdrop-blur-xl  duration-300 border border-border'>
            <div className='bg-gradient-to-br from-cyan-500 to-sky-500 p-3 rounded-xl inline-block mb-4'>{step.icon}</div>
            <h3 className='text-xl text-card-foreground font-bold mb-2'>{step.title}</h3>
            <p className='text-muted-foreground text-sm'>{step.description}</p>
          </motion.div>
        ))}
      </div> */}

      <div className='grid md:grid-cols-2 gap-12 items-start'>
        {/* Challenges Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className='text-4xl font-bold mb-6 text-foreground'>The Challenges of Traditional Fashion Photography</h2>
          <div className=' relative flex flex-col gap-4 '>
            {challenges.map((challenge, index) => (
              <div key={index} className='flex bg-card backdrop-blur-xl rounded-2xl p-4 items-start space-x-3 mb-4 last:mb-0'>
                <div className='h-8 w-8 flex items-center justify-center p-2 rounded-full bg-brand-color text-white font-bold text-xl'>
                  {index + 1}
                </div>
                <p className='text-muted-foreground text-md'>{challenge}</p>
                {index + 1 < challenges.length && (
  <div className="absolute left-[20px] top-full w-px h-10 border-l-2 border-dashed border-border -translate-x-1/2" />
)}
              </div>
            ))}
            
          </div>
          
        </motion.div>

        {/* Image Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='grid grid-cols-2 gap-4'>
          <div className='relative aspect-[3/4] rounded-lg overflow-hidden'>
            <img src='/traditional.jpg' alt='Traditional fashion photoshoot' className='w-full h-full object-cover' />
            <div className='absolute top-2 bg-gradient-to-r from-cyan-500 to-sky-500 left-2 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold'>
              Traditional
            </div>
          </div>
          <div className='relative aspect-[3/4] rounded-lg overflow-hidden'>
            <img src='/AI_gen.jpeg' alt='AI-generated fashion showcase' className='w-full h-full object-cover' />
            <div className='absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-sky-500 px-3 py-1 rounded-full text-white text-xs font-semibold'>
              AI Generated
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
