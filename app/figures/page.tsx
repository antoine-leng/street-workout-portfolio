import { prisma } from '@/lib/prisma';
import FigureCard from '@/components/FigureCard';

async function getFigures() {
  const figures = await prisma.figure.findMany({
    orderBy: { level: 'asc' },
  });
  return figures;
}

export default async function FiguresPage() {
  const figures = await getFigures();

  const categorizedFigures = {
    beginner: figures.filter(f => f.level <= 10),
    intermediate: figures.filter(f => f.level > 10 && f.level <= 20),
    advanced: figures.filter(f => f.level > 20 && f.level <= 30),
    elite: figures.filter(f => f.level > 30),
  };

  const categories = [
    { key: 'beginner', name: 'Débutant', color: 'green' },
    { key: 'intermediate', name: 'Intermédiaire', color: 'blue' },
    { key: 'advanced', name: 'Avancé', color: 'purple' },
    { key: 'elite', name: 'Élite', color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center">Figures Statiques</h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          Découvrez toutes les figures classées par niveau de difficulté
        </p>

        {categories.map((category) => {
          const categoryFigures = categorizedFigures[category.key as keyof typeof categorizedFigures];
          if (categoryFigures.length === 0) return null;

          return (
            <section key={category.key} className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 text-${category.color}-400`}>
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryFigures.map((figure) => (
                  <FigureCard key={figure.id} figure={figure} />
                ))}
              </div>
            </section>
          );
        })}

        {figures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucune figure n'a été ajoutée pour le moment.
            </p>
            <p className="text-gray-500 mt-2">
              Utilisez Prisma Studio pour ajouter des figures à la base de données.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}