import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, image, para }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={image}
          alt='web-development'
          style={{width:"50%",height:"50%",borderRadius:"50%"}}
        />

        <h4 className='text-white text-[15px] font-bold text-center'>
          {title}
          
        </h4>
        <p className="text-center text-[13px]">{para}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <motion.div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between" ,paddingBottom:"20px"}}>
        <h2 className={styles.sectionHeadText} >EQ beats IQ</h2>
          <p style={{maxWidth:"300px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sed aut quae vel, deserunt expedita vitae explicabo quidem numquam, incidunt totam reiciendis sequi repellat voluptas doloremque modi minima quam neque!</p>
          <p style={{maxWidth:"300px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum soluta est consequatur velit, vitae rem quis dignissimos sit nobis nam officiis tempora nesciunt temporibus veritatis ab necessitatibus laborum itaque?</p>
        </motion.div>
        
        <h2 className={styles.sectionHeadText}>Does this sound familiar...</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis veritatis at reprehenderit enim tenetur modi. Excepturi, ut dolorem facere iste accusantium, magnam id odit illum vel tenetur nisi quae!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
