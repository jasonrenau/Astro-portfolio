import { Button } from '@/components/ui/button';
import { Folder, Contact, Eye, BrainCircuit, Presentation } from 'lucide-react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Folders = () => {
  const [openComponent, setOpenComponent] = useState('');
  const [activeFolder, setActiveFolder] = useState(null);

  const folderVariants = (folder) => ({
    initial: { scale: 1 },
    animate: { scale: activeFolder === folder ? 5 : 1 },
  });

  const aboutVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  const handleFolderClick = (folder) => {
    setOpenComponent(folder);
    setActiveFolder(folder);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {/* A propos de moi */}
        <div className="w-fit text-center">
          <motion.div
            variants={folderVariants('about')}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Folder
              color="white"
              className="mx-auto"
              strokeWidth={0.25}
              size={125}
            />
            <Eye
              color="white"
              size={50}
              strokeWidth={1}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
          <Button
            onClick={() => {
              handleFolderClick('about');
            }}
            variant={'secondary'}
          >
            À propos de moi
          </Button>
        </div>
        {/* competences */}
        <div className="w-fit text-center">
          <motion.div
            variants={folderVariants('skills')}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Folder
              color="white"
              className="mx-auto"
              strokeWidth={0.25}
              size={125}
            />
            <BrainCircuit
              color="white"
              size={50}
              strokeWidth={1}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <Button
            onClick={() => {
              handleFolderClick('skills');
            }}
            variant={'secondary'}
          >
            Mes compétences
          </Button>
        </div>
        {/* Projets */}
        <div className="w-fit text-center">
          <motion.div
            variants={folderVariants('projects')}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Folder
              color="white"
              className="mx-auto"
              strokeWidth={0.25}
              size={125}
            />
            <Presentation
              color="white"
              size={50}
              strokeWidth={1}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <Button
            onClick={() => handleFolderClick('projects')}
            variant={'secondary'}
          >
            Mes projets
          </Button>
        </div>
        {/* contact */}
        <div className="w-fit text-center">
          <motion.div
            variants={folderVariants('contact')}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Folder
              color="white"
              className="mx-auto"
              strokeWidth={0.25}
              size={125}
            />
            <Contact
              color="white"
              size={50}
              strokeWidth={1}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <Button
            onClick={() => handleFolderClick('contact')}
            variant={'secondary'}
          >
            Me contacter
          </Button>
        </div>
      </div>
      <div>
        {openComponent && (
          <motion.div
            variants={aboutVariants}
            initial="closed"
            animate={openComponent ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 fixed z-10 inset-0 flex flex-col justify-center items-center "
          >
            {openComponent === 'about' && (
              <About
                setOpenComponent={setOpenComponent}
                setActiveFolder={setActiveFolder}
              />
            )}
            {openComponent === 'skills' && (
              <Skills
                setOpenComponent={setOpenComponent}
                setActiveFolder={setActiveFolder}
              />
            )}
            {openComponent === 'projects' && (
              <Projects
                setOpenComponent={setOpenComponent}
                setActiveFolder={setActiveFolder}
              />
            )}
            {openComponent === 'contact' && (
              <ContactMe
                setOpenComponent={setOpenComponent}
                setActiveFolder={setActiveFolder}
              />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Folders;
