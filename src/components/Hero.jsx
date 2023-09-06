import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Master your life  by <span className='text-[#915EFF]'>mastering emotions</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Lorem ipsum dolor sit amet <br className='sm:block hidden' />
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
