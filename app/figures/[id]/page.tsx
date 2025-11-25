import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Video, Info, Target } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

async function getFigure(id: string) {
  const figure = await prisma.figure.findUnique({
    where: { id },
  });
  
  if (!figure) return null;
  return figure;
}

export default async function FigureDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const figure = await getFigure(params.id);

  if (!figure) {
    notFound();
  }

  const getCategoryColor = (level: number) => {
    if (level <= 10) return 'green';
    if (level <= 20) return 'blue';
    if (level <= 30) return 'purple';
    return 'red';
  };

  const color = getCategoryColor(figure.level);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/figures"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux figures
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {figure.imageUrl && (
              <div className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 mb-6">
                <img
                  src={figure.imageUrl}
                  alt={figure.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {figure.videoUrl && (
              <div className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <div className="p-4 border-b border-gray-700 flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Vidéo démonstration</span>
                </div>
                    {<VideoPlayer videoId={figure.videoUrl} />}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div>
            <div className={`inline-block bg-${color}-500 text-sm font-semibold px-4 py-2 rounded-full mb-4`}>
              Niveau {figure.level}
            </div>

            <h1 className="text-5xl font-bold mb-6">{figure.name}</h1>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-semibold">Description</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">{figure.description}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-semibold">Conseils d'exécution</h2>
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {figure.tips}
              </p>
            </div>

            {figure.prerequisites && (
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Prérequis</h2>
                <p className="text-gray-300 leading-relaxed">
                  {figure.prerequisites}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}