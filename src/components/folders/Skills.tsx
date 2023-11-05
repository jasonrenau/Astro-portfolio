import { Button } from '@/components/ui/button';

const Skills = ({ setOpenComponent, setActiveFolder }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Mes skills</h1>
      <Button
        onClick={() => {
          setOpenComponent(''), setActiveFolder(null);
        }}
        className="bg-slate-900 text-gray-900 hover:bg-gray-100"
      >
        Fermer
      </Button>
    </div>
  );
};

export default Skills;
