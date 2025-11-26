import Link from 'next/link';
import { Activity, TrendingUp, Target, Award } from 'lucide-react';

export default function HomePage() {
  const levels = [
    {
      range: '1-10',
      name: 'Débutant',
      examples: ['L-sit', 'Elbow lever', 'Tuck planche'],
      color: 'bg-green-500',
      icon: Activity
    },
    {
      range: '11-20',
      name: 'Intermédiaire',
      examples: ['Back lever', 'Semi planche', 'Handstand'],
      color: 'bg-blue-500',
      icon: TrendingUp
    },
    {
      range: '21-30',
      name: 'Avancé',
      examples: ['Human Flag' ,'Straddle planche', 'Front lever'],
      color: 'bg-purple-500',
      icon: Target
    },
    {
      range: '31-40',
      name: 'Élite',
      examples: ['Maltese', 'One-arm front lever', 'Full planche'],
      color: 'bg-red-500',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Street Workout Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez, apprenez et maîtrisez les figures statiques du street workout. 
            Suivez votre progression et atteignez de nouveaux sommets.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/figures"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Explorer les figures
            </Link>
            <Link
              href="/progression"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Ma progression
            </Link>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Niveaux de difficulté</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <div
                key={level.range}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${level.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                <p className="text-gray-400 mb-4">Niveau {level.range}</p>
                <ul className="space-y-2">
                  {level.examples.map((example) => (
                    <li key={example} className="text-gray-300 text-sm">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Explorez les figures, suivez votre progression et rejoignez la communauté du street workout.
          </p>
          <Link
            href="/figures"
            className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}