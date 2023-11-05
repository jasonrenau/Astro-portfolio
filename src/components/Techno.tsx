// Importez vos dépendances ici
import { motion } from 'framer-motion';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import nextjs from '../assets/images/nextjs.png';
import astrologo from '../assets/images/astrologo.png';
import typescript from '../assets/images/typescript.png';
import tailwindcss from '../assets/images/tailwindcss.png';

const logos = [react, nodejs, nextjs, astrologo, typescript, tailwindcss];

const variants = {
  hidden: { y: -150, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.3,
    },
  }),
};

const Techno = () => {
  return (
    <div className="flex justify-around flex-wrap gap-4">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <img
            src={logo.src}
            alt="Logo"
            className="w-20 h-20 p-2 rounded-full drop-shadow-2xl bg-slate-600"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Techno;
