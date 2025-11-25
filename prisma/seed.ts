import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding...');

  // Figures débutant (1-10)
  const lSit = await prisma.figure.create({
    data: {
      name: 'L-sit',
      description: 'Le L-sit est une figure statique où vous soulevez votre corps du sol avec vos bras tendus, jambes parallèles au sol formant un "L".',
      level: 8,
      category: 'beginner',
      tips: `• Gardez les bras complètement tendus
• Poussez activement dans le sol avec vos épaules
• Contractez les abdominaux pour maintenir les jambes parallèles
• Commencez avec les genoux pliés (Tuck L-sit) si nécessaire`,
      prerequisites: 'Force de base dans les bras et les épaules, flexibilité des ischio-jambiers',
    },
  });

  const elbowLever = await prisma.figure.create({
    data: {
      name: 'Elbow Lever',
      description: 'L\'Elbow Lever est une figure où votre corps est parallèle au sol, soutenu uniquement par vos coudes plantés dans votre abdomen.',
      level: 10,
      category: 'beginner',
      tips: `• Placez vos coudes fermement contre vos abdominaux
• Transférez progressivement votre poids vers l'avant
• Gardez le corps rigide et gainé
• Regardez légèrement vers l'avant`,
      prerequisites: 'Bonne force du tronc et équilibre',
    },
  });

  // Figures intermédiaire (11-20)
  const backLever = await prisma.figure.create({
    data: {
      name: 'Back Lever',
      description: 'Le Back Lever est une figure inversée où votre corps est parallèle au sol, face vers le haut, suspendu à une barre.',
      level: 18,
      category: 'intermediate',
      tips: `• Commencez en position inversée (tuck back lever)
• Contractez fortement le dos et les épaules
• Gardez les bras complètement tendus
• Progressez graduellement vers la position jambes tendues`,
      prerequisites: 'Maîtrise de la traction, force importante du dos',
    },
  });

  const semiPlanche = await prisma.figure.create({
    data: {
      name: 'Semi Planche',
      description: 'Position intermédiaire entre le tuck planche et le straddle planche, avec les jambes partiellement étendues.',
      level: 20,
      category: 'intermediate',
      tips: `• Protractez les épaules vers l'avant
• Gardez le bassin haut
• Maintenez les bras tendus et verrouillés
• Engagez fortement les abdominaux et le bas du dos`,
      prerequisites: 'Tuck planche maîtrisé pendant 10+ secondes',
    },
  });

  // Figures avancé (21-30)
  const handstand = await prisma.figure.create({
    data: {
      name: 'Handstand',
      description: 'L\'équilibre sur les mains, corps complètement vertical et aligné.',
      level: 25,
      category: 'advanced',
      tips: `• Alignez poignets, épaules, hanches et chevilles
• Poussez activement dans le sol avec vos mains
• Regardez entre vos mains
• Engagez tout le corps pour maintenir la ligne droite
• Pratiquez contre un mur pour construire la force et l'endurance`,
      prerequisites: 'Excellente force des épaules et du tronc, proprioception développée',
    },
  });

  const tuckPlanche = await prisma.figure.create({
    data: {
      name: 'Tuck Planche',
      description: 'Version repliée de la planche où les genoux sont ramenés vers la poitrine.',
      level: 22,
      category: 'advanced',
      tips: `• Penchez-vous fortement vers l'avant
• Arrondissez légèrement le haut du dos
• Serrez les genoux contre la poitrine
• Gardez les bras complètement tendus`,
      prerequisites: 'Pseudo planche push-ups, force importante des épaules',
    },
  });

  const straddlePlanche = await prisma.figure.create({
    data: {
      name: 'Straddle Planche',
      description: 'Planche avec les jambes écartées, version avancée avant la full planche.',
      level: 28,
      category: 'advanced',
      tips: `• Écartez les jambes au maximum pour réduire le levier
• Maintenez les hanches hautes
• Protractez fortement les épaules
• Engagez intensément les abdominaux et le bas du dos`,
      prerequisites: 'Maîtrise du tuck planche et semi planche',
    },
  });

  // Figures élite (31-40)
  const maltese = await prisma.figure.create({
    data: {
      name: 'Maltese',
      description: 'Figure extrêmement difficile où le corps est horizontal avec les bras tendus sur les côtés.',
      level: 38,
      category: 'elite',
      tips: `• Développez une force exceptionnelle des épaules et de la poitrine
• Commencez avec des exercices de Maltese lean
• Travaillez progressivement les positions aux anneaux
• Cette figure nécessite des années d'entraînement`,
      prerequisites: 'Maîtrise de la full planche, force exceptionnelle',
    },
  });

  const oneArmFrontLever = await prisma.figure.create({
    data: {
      name: 'One Arm Front Lever',
      description: 'Front lever maintenu avec un seul bras, une des figures les plus difficiles.',
      level: 40,
      category: 'elite',
      tips: `• Maîtrisez d'abord le front lever deux bras pendant 20+ secondes
• Travaillez l'assistance avec un bras
• Développez une force de traction asymétrique énorme
• Cette figure est l'objectif ultime pour beaucoup d'athlètes`,
      prerequisites: 'Front lever parfait, force de traction exceptionnelle',
    },
  });

  const fullPlanche = await prisma.figure.create({
    data: {
      name: 'Full Planche',
      description: 'La planche complète avec le corps parfaitement horizontal et les jambes tendues ensemble.',
      level: 35,
      category: 'elite',
      tips: `• Progressez depuis la straddle planche
• Rapprochez progressivement les jambes
• Maintenez la protraction maximale des épaules
• Gardez le corps parfaitement rigide et horizontal`,
      prerequisites: 'Straddle planche maîtrisée pendant 15+ secondes',
    },
  });

  console.log('✅ Seeding terminé avec succès!');
  console.log(`📊 ${await prisma.figure.count()} figures créées`);
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });