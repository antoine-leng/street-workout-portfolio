import { prisma } from '@/lib/prisma';
import { Trophy, Calendar, TrendingUp } from 'lucide-react';

async function getProgressions() {
  const progressions = await prisma.progression.findMany({
    include: {
      figure: true,
    },
    orderBy: {
      unlockedAt: 'desc',
    },
  });
  return progressions;
}

export default async function ProgressionPage() {
  const progressions = await getProgressions();

  const stats = {
    totalUnlocked: progressions.filter(p => p.percentage === 100).length,
    inProgress: progressions.filter(p => p.percentage > 0 && p.percentage < 100).length,
    avgPercentage: progressions.length > 0
      ? Math.round(progressions.reduce((sum, p) => sum + p.percentage, 0) / progressions.length)
      : 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 text-center">Ma Progression</h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          Suivez votre évolution et vos accomplissements
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-400">Figures maîtrisées</span>
            </div>
            <p className="text-4xl font-bold">{stats.totalUnlocked}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-gray-400">En cours</span>
            </div>
            <p className="text-4xl font-bold">{stats.inProgress}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-purple-400" />
              <span className="text-gray-400">Progression moyenne</span>
            </div>
            <p className="text-4xl font-bold">{stats.avgPercentage}%</p>
          </div>
        </div>

        {/* Progression List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Historique</h2>
          
          {progressions.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
              <p className="text-gray-400 text-lg">
                Aucune progression enregistrée pour le moment.
              </p>
              <p className="text-gray-500 mt-2">
                Commencez à ajouter vos progressions via Prisma Studio.
              </p>
            </div>
          ) : (
            progressions.map((progression) => (
              <div
                key={progression.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {progression.figure.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(progression.unlockedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-400">
                      {progression.percentage}%
                    </div>
                    <div className="text-sm text-gray-400">Maîtrise</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                    style={{ width: `${progression.percentage}%` }}
                  />
                </div>

                {progression.notes && (
                  <p className="text-gray-300 mb-4">{progression.notes}</p>
                )}

                {progression.mediaUrl && (
                  <div className="rounded-lg overflow-hidden bg-gray-700">
                    {progression.mediaUrl.endsWith('.mp4') ||
                    progression.mediaUrl.endsWith('.webm') ? (
                      <video src={progression.mediaUrl} controls className="w-full" />
                    ) : (
                      <img
                        src={progression.mediaUrl}
                        alt="Progression"
                        className="w-full h-64 object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}