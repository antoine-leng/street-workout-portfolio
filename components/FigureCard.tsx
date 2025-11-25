import Link from 'next/link';
import { Figure } from '@prisma/client';

interface FigureCardProps {
  figure: Figure;
}

export default function FigureCard({ figure }: FigureCardProps) {
  const getCategoryColor = (level: number) => {
    if (level <= 10) return 'bg-green-500';
    if (level <= 20) return 'bg-blue-500';
    if (level <= 30) return 'bg-purple-500';
    return 'bg-red-500';
  };

  const getCategoryName = (level: number) => {
    if (level <= 10) return 'Débutant';
    if (level <= 20) return 'Intermédiaire';
    if (level <= 30) return 'Avancé';
    return 'Élite';
  };

  return (
    <Link href={`/figures/${figure.id}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105 cursor-pointer">
        {figure.imageUrl && (
          <div className="h-48 bg-gray-700 relative">
            <img
              src={figure.imageUrl}
              alt={figure.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`${getCategoryColor(figure.level)} text-xs font-semibold px-3 py-1 rounded-full`}>
              {getCategoryName(figure.level)}
            </span>
            <span className="text-gray-400 text-sm">Niveau {figure.level}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{figure.name}</h3>
          
          <p className="text-gray-400 text-sm line-clamp-3">
            {figure.description}
          </p>
        </div>
      </div>
    </Link>
  );
}