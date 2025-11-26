import { PrismaClient } from '@prisma/client';

// Ce script de seeding insère les principales figures statiques du street‑workout
// dans la table `figure` via Prisma.  Les figures sont classées par niveau
// (beginner, intermediate, advanced, elite) et utilisent les conclusions
// détaillées du rapport de recherche.  Chaque entrée précise la description,
// des conseils (tips) sous forme de puces, le niveau (1–40) et les prérequis.

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding des figures statiques...');

  // === Figures débutant (1–10) ===
  await prisma.figure.create({
    data: {
      name: 'L-sit',
      description: 'Le L-sit est une figure statique où vous soulevez votre corps du sol avec vos bras tendus, jambes parallèles au sol formant un « L ».',
      level: 8,
      category: 'beginner',
      tips: `• Gardez les bras complètement tendus\n• Poussez activement dans le sol avec vos épaules\n• Contractez les abdominaux pour maintenir les jambes parallèles\n• Commencez avec les genoux pliés (Tuck L-sit) si nécessaire`,
      prerequisites: 'Force de base dans les bras et les épaules, flexibilité des ischio-jambiers',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Elbow Lever',
      description: 'L’Elbow Lever est une figure où votre corps est parallèle au sol, soutenu uniquement par vos coudes plantés dans votre abdomen.',
      level: 10,
      category: 'beginner',
      tips: `• Placez les coudes proches des hanches et bas\n• Tournez les doigts vers l’arrière ou sur les côtés\n• Protractez légèrement et déprimez vos épaules\n• Basculez vers l’avant en levant les jambes, serrez-les et engagez le tronc\n• Regardez légèrement vers l’avant`,
      prerequisites: 'Bonne force du tronc et des bras, équilibre et mobilité des poignets',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Tuck Planche',
      description: 'Version repliée de la planche où les genoux sont ramenés vers la poitrine, idéale pour débuter les planches.',
      level: 9,
      category: 'beginner',
      tips: `• Penchez-vous fortement vers l’avant\n• Arrondissez légèrement le haut du dos\n• Serrez les genoux contre la poitrine\n• Gardez les bras complètement tendus et les épaules protractées\n• Utilisez des pompes pseudo-planche pour renforcer la transition`,
      prerequisites: 'Pseudo planche push-ups, force importante des épaules et du tronc, maîtrise du frog stand',
    },
  });

  // === Figures intermédiaires (11–20) ===
  await prisma.figure.create({
    data: {
      name: 'Back Lever',
      description: 'Le Back Lever est une figure inversée où votre corps est parallèle au sol, face vers le sol, suspendu à une barre.',
      level: 18,
      category: 'intermediate',
      tips: `• Commencez en position inversée (tuck back lever)\n• Contractez fortement le dos, les fessiers et le tronc\n• Gardez les bras complètement tendus et les épaules protractées/déprimées\n• Progressez graduellement vers la position jambes tendues`,
      prerequisites: 'Maîtrise des tractions, capacité à faire 5 tractions lestées (~50 % du poids du corps) et 5 skin‑the‑cat, mobilité d’épaules',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Semi Planche',
      description: 'Position intermédiaire entre le tuck planche et la straddle planche, avec les jambes partiellement étendues.',
      level: 20,
      category: 'intermediate',
      tips: `• Protractez les épaules vers l’avant\n• Gardez le bassin haut et la ligne du corps horizontale\n• Maintenez les bras tendus et verrouillés\n• Engagez fortement les abdominaux et le bas du dos`,
      prerequisites: 'Tuck planche maîtrisé pendant 10 s ou plus',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Front Lever',
      description: 'Le Front Lever est un mouvement où le corps est suspendu horizontalement face vers le haut, les bras tendus, sur une barre.',
      level: 19,
      category: 'intermediate',
      tips: `• Utilisez une prise forte légèrement plus étroite que la largeur des épaules\n• Tirez la barre vers le bas et vers l’extérieur pour activer les dorsaux\n• Gardez les épaules neutres ou légèrement avancées\n• Renforcez le dos avec des tractions lestées et des relevés de jambes\n• Maintenez les jambes serrées et alignées`,
      prerequisites: 'Maîtrise des tractions strictes, tuck front lever contrôlé, force dorsale importante',
    },
  });

  // === Figures avancées (21–30) ===
  await prisma.figure.create({
    data: {
      name: 'Handstand',
      description: 'L’équilibre sur les mains, corps complètement vertical et aligné.',
      level: 25,
      category: 'advanced',
      tips: `• Alignez poignets, épaules, hanches et chevilles\n• Poussez activement dans le sol avec vos mains\n• Regardez entre vos mains\n• Engagez tout le corps pour maintenir la ligne droite\n• Pratiquez contre un mur pour construire la force et l’endurance`,
      prerequisites: 'Excellente force des épaules et du tronc, proprioception développée',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Advanced Tuck Planche',
      description: 'Version avancée de la tuck planche avec les jambes plus ouvertes et le tronc allongé.',
      level: 22,
      category: 'advanced',
      tips: `• Tournez les mains vers l’extérieur (~45°)\n• Maintenez une ligne droite des épaules jusqu’aux pieds\n• Engagez fortement le tronc et les fessiers\n• Pressez les épaules vers l’avant et gardez les bras droits\n• Évitez de laisser tomber les hanches`,
      prerequisites: 'Capacité à tenir une tuck planche stricte pendant 15 s, force des épaules et du tronc',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Straddle Planche',
      description: 'Planche avec les jambes écartées, version avancée avant la full planche.',
      level: 28,
      category: 'advanced',
      tips: `• Écartez les jambes au maximum pour réduire le levier\n• Maintenez les hanches hautes et le corps horizontal\n• Protractez fortement les épaules\n• Engagez intensément les abdominaux et le bas du dos\n• Pratiquez des planche leans et pseudo push-ups pour renforcer la position`,
      prerequisites: 'Maîtrise du tuck planche et de la semi planche, capacité à les tenir 15 s',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'One Arm Elbow Lever',
      description: 'Le corps est parallèle au sol et soutenu par un seul coude contre l’abdomen, l’autre bras servant de contrepoids ou se levant (crocodile).',
      level: 27,
      category: 'advanced',
      tips: `• Placez le coude d’appui près du nombril ou de la hanche\n• Faites un side crunch pour déplacer les hanches vers le bras de support\n• Regardez la direction de votre déplacement\n• Soulevez lentement le bras libre en transférant le poids\n• Engagez le bas du dos et les fessiers, et progressez sur une surface élevée`,
      prerequisites: 'Elbow lever classique maîtrisé, bonne mobilité des poignets, force du tronc et des épaules',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Human Flag',
      description: 'Figure où le corps est horizontal, tenu par les mains sur une barre verticale ou deux barres horizontales ; le bras du dessus pousse et celui du dessous tire.',
      level: 30,
      category: 'advanced',
      tips: `• Utilisez une prise pronation pour la main supérieure et supination pour la main inférieure\n• Poussez avec le bras du haut et tirez avec celui du bas\n• Gardez le corps rigide et horizontal, engagez les obliques\n• Commencez par des progressions (support flag, active flag support) et renforcez la prise avec des suspensions à un bras\n• Pratiquez sur des barres parallèles pour faciliter le transfert de poids`,
      prerequisites: 'Au moins 10+ tractions et dips, aisance avec les relevés de jambes, forte prise et capacité à tenir en suspension à un bras',
    },
  });

  // === Figures élite (31–40) ===
  await prisma.figure.create({
    data: {
      name: 'Full Planche',
      description: 'La planche complète avec le corps parfaitement horizontal et les jambes tendues ensemble.',
      level: 35,
      category: 'elite',
      tips: `• Progressez depuis la straddle planche\n• Rapprochez progressivement les jambes\n• Maintenez la protraction maximale des épaules et une légère hollow body\n• Gardez le corps parfaitement rigide et horizontal\n• Pratiquez régulièrement pour renforcer les poignets et les épaules`,
      prerequisites: 'Straddle planche maîtrisée pendant 15 s+, force exceptionnelle des épaules et du tronc',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Maltese',
      description: 'Figure extrêmement difficile où le corps est horizontal avec les bras tendus sur les côtés, très éloignés du torse.',
      level: 38,
      category: 'elite',
      tips: `• Développez une force exceptionnelle des épaules et de la poitrine\n• Commencez avec des exercices de Maltese lean en augmentant progressivement l’écartement des mains\n• Travaillez progressivement les positions aux anneaux et au sol\n• Conditionnez les tendons des biceps en progressant lentement\n• Cette figure nécessite des années d’entraînement et une technique irréprochable`,
      prerequisites: 'Maîtrise de la full planche et de la straddle planche (10–15 s), tendons et épaules très robustes',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'One Arm Front Lever',
      description: 'Front lever maintenu avec un seul bras, une des figures les plus difficiles.',
      level: 40,
      category: 'elite',
      tips: `• Maîtrisez d’abord le front lever à deux bras pendant 20+ s\n• Travaillez l’assistance avec un bras (bandes) avant de retirer l’aide\n• Développez une force de traction asymétrique énorme\n• Évitez de tourner le torse (rotation ≤45°)\n• Renforcez les dorsaux et les tendons avec des tractions lourdes`,
      prerequisites: 'Front lever parfait, force de traction exceptionnelle, tendons et dorsaux très forts',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Straight Arm Touch (SAT)',
      description: 'Élément isométrique où l’athlète maintient une large prise horizontale sous la barre avec le ventre en contact et les bras tendus (straight arm touch).',
      level: 34,
      category: 'elite',
      tips: `• Rétractez et déprimez activement les omoplates pour rapprocher le ventre de la barre\n• Évitez une protraction excessive qui réduit l’amplitude\n• Une légère élévation des épaules peut aider à maintenir le contact\n• Gardez les bras totalement tendus et appuyez les mains vers l’extérieur\n• Travaillez sur des prises larges pour renforcer la position`,
      prerequisites: 'Maîtrise du wide front lever et du straight arm touch de base, force dorsale et tendineuse',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'One Arm Planche',
      description: 'Variante unilatérale de la planche où le corps est équilibré sur une seule main et le torse est incliné vers le bras de support.',
      level: 39,
      category: 'elite',
      tips: `• Penchez la taille vers le bras d’appui pour déplacer le centre de gravité\n• Gardez le coude du bras d’appui verrouillé\n• Maintenez le corps horizontal et rigide\n• Prenez le temps de renforcer les épaules et le tronc avant d’essayer cette figure\n• Très peu d’athlètes maîtrisent cette variante`,
      prerequisites: 'Maîtrise de la full planche, force exceptionnelle du tronc et des épaules, années de préparation',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'One Arm Handstand',
      description: 'Équilibre vertical sur une seule main, considéré comme l’un des sommets du handstand.',
      level: 37,
      category: 'elite',
      tips: `• Assurez-vous de tenir un handstand sur deux mains pendant 60–90 s avec un alignement parfait\n• Utilisez une grande ouverture des jambes (straddle) pour abaisser le centre de masse\n• Gardez l’épaule du bras d’appui élevée et empilée\n• Pratiquez des leans latéraux avant de lever la main libre\n• Développez la flexibilité du pancake et du middle split`,
      prerequisites: '60–90 s de handstand avec alignement, straddle press et pike press to handstand, flexibilité du pancake',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Victorian Cross',
      description: 'Élément de gymnastique aux anneaux où le corps est horizontal et les bras écartés latéralement, ressemblant à une croix inversée.',
      level: 38,
      category: 'elite',
      tips: `• Maintenez les bras complètement droits et ouverts\n• Rétractez et déprimez les omoplates\n• Évitez de plier les hanches ou de laisser tomber le corps\n• Travaillez sur les anneaux pour développer la stabilité\n• Recherchez l’alignement du corps pour éviter les déductions`,
      prerequisites: 'Force en straight arm touch (SAT) et en wide front lever, tendons et épaules robustes',
    },
  });

  await prisma.figure.create({
    data: {
      name: 'Two Finger Planche',
      description: 'Planche extrême où le corps est supporté par deux doigts par main, démontrant une force digitale exceptionnelle.',
      level: 40,
      category: 'elite',
      tips: `• Renforcez progressivement la force des doigts et des poignets\n• Commencez sur dix doigts puis réduisez la surface d’appui\n• Maintenez la planche complète avant de réduire le nombre de doigts\n• Écoutez votre corps pour éviter les blessures\n• Restez patient : seules quelques personnes au monde maîtrisent cette figure`,
      prerequisites: 'Maîtrise de la full planche, force digitale et tendineuse exceptionnelle, années de préparation',
    },
  });

  console.log(`✅ Seeding terminé avec succès!`);
  const count = await prisma.figure.count();
  console.log(`📊 ${count} figures créées`);
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });