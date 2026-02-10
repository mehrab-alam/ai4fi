
import { motion } from "framer-motion";
import SvgIcons from "../../../components/SvgIcons";

const partners = [
SvgIcons.amazone,
 SvgIcons.google,
 SvgIcons.netflix,
 SvgIcons.shopify,
 SvgIcons.youtube,
];

const TrustedPartners = () => {
  return (
    <section className='py-12 md:py-20 relative overflow-hidden dark:bg-transparent bg-background dark:bg-gradient-to-t from-black to-cyan-950'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-foreground'>Our Trusted Partners </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8'>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='group'>
            <i className="leading-0 text-[7rem] text-foreground"> {partner}</i>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
