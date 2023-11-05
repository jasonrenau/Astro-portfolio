import { Button } from '@/components/ui/button';

const About = ({ setOpenComponent, setActiveFolder }) => {
  return (
    <div className="w-[90%] max-w-5xl">
      <h1 className=" text-3xl font-bold text-slate-900 mb-4">
        À propos de moi
      </h1>
      <p className="text-slate-900 mb-4">
        Bonjour, je suis [Votre Nom]. Bienvenue sur mon profil !
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">Parcours</h2>
      <p className="text-slate-900 mb-4">
        Ayant débuté ma carrière en tant que technicien d'usinage, j'ai acquis
        une solide expérience dans le domaine de la fabrication et de la
        précision technique. Ma passion pour la résolution de problèmes
        complexes et mon intérêt pour la technologie m'ont naturellement orienté
        vers le domaine du développement web. Cette transition a été alimentée
        par ma soif d'apprentissage continu et mon désir de créer des solutions
        innovantes dans l'espace numérique. Au cours de ma carrière de
        technicien, j'ai développé une attention minutieuse aux détails et une
        capacité à travailler avec des systèmes techniques complexes, des
        compétences qui se sont avérées précieuses dans le développement web. En
        poursuivant ma passion, j'ai entrepris un parcours d'apprentissage
        approfondi, complété par des formations en ligne et des projets
        personnels, me permettant d'acquérir des compétences solides en HTML,
        CSS, JavaScript et dans divers frameworks et bibliothèques modernes.
        Aujourd'hui, en tant que développeur web, je combine ma rigueur
        technique et ma créativité pour concevoir et implémenter des solutions
        web efficaces, réactives et centrées sur l'utilisateur. Mon parcours
        unique me confère une perspective distinctive et une approche méthodique
        de la résolution de problèmes dans le développement web.
      </p>

      <Button
        onClick={() => {
          setOpenComponent(''), setActiveFolder(null);
        }}
        className="bg-slate-900 text-gray-900 hover:bg-gray-100"
        variant="secondary"
      >
        Fermer
      </Button>
    </div>
  );
};

export default About;
