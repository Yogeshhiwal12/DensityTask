import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
 
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full'
      >
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div> 
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
     <motion.div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between" ,paddingBottom:"50px"}}>
        <h2 className={styles.sectionHeadText} >Be the best you with EQ</h2>
          <p style={{maxWidth:"300px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sed aut quae vel, deserunt expedita vitae explicabo quidem numquam, incidunt totam reiciendis sequi repellat voluptas doloremque modi minima quam neque!</p>
          <p style={{maxWidth:"300px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum soluta est consequatur velit, vitae rem quis dignissimos sit nobis nam officiis tempora nesciunt temporibus veritatis ab necessitatibus laborum itaque?</p>
        </motion.div>
        <h2 className='text-white text-[35px] font-bold text-center'>Ever wondered what others think of you?</h2>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
