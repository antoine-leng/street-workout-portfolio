# Street Workout Portfolio

Portfolio personnel pour suivre et partager votre progression en street workout et figures statiques.

## Prérequis

- Node.js 18+
- npm ou yarn
- PostgreSQL (local ou hébergé)
- Compte Vercel (pour le déploiement)

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/antoine-leng/street-workout-portfolio.git
cd street-workout-portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de la base de données

Créez un fichier `.env.local` à la racine du projet :

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 4. Initialiser la base de données

```bash
npx prisma generate
npx prisma db push
```

### 5. (Optionnel) Ajouter des données de test

```bash
npx prisma db seed
```

### 6. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Structure du Projet

```
street-workout-portfolio/
├── app/
│   ├── page.tsx                 # Page d'accueil
│   ├── figures/
│   │   ├── page.tsx            # Liste des figures
│   │   └── [id]/page.tsx       # Détails d'une figure
│   ├── progression/
│   │   └── page.tsx            # Page de suivi
│   ├── api/
│   │   ├── figures/
│   │   │   └── route.ts        # API des figures
│   │   └── progressions/
│   │       └── route.ts        # API des progressions
│   └── layout.tsx              # Layout global
├── components/
│   ├── FigureCard.tsx          # Carte de figure
│   ├── ProgressionList.tsx     # Liste de progression
│   └── Navbar.tsx              # Navigation
├── prisma/
│   ├── schema.prisma           # Schéma de la base de données
│   └── seed.ts                 # Données de test
├── public/
│   └── images/                 # Images des figures
├── lib/
│   └── prisma.ts               # Client Prisma
└── README.md
```

## Schéma de Base de Données

### Table `figures`

- `id`: Identifiant unique
- `name`: Nom de la figure
- `description`: Description détaillée
- `level`: Niveau de difficulté (1-40)
- `category`: Catégorie (débutant, intermédiaire, avancé, élite)
- `imageUrl`: URL de l'image
- `videoUrl`: URL de la vidéo (optionnel)
- `tips`: Conseils d'exécution
- `prerequisites`: Prérequis

### Table `progressions`

- `id`: Identifiant unique
- `figureId`: Référence à la figure
- `unlockedAt`: Date de déblocage
- `percentage`: Pourcentage de maîtrise (0-100)
- `notes`: Notes personnelles
- `mediaUrl`: URL du média (image/vidéo)

## Technologies Utilisées

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **PostgreSQL**
- **Vercel** (déploiement)

## Fonctionnalités

### Implémentées

- [x] Page d'accueil avec présentation
- [x] Liste des figures par niveau
- [x] Fiche détaillée de chaque figure
- [x] Suivi de progression personnelle
- [x] Ajout de médias (images/vidéos)
- [x] Système de pourcentage de maîtrise
- [x] Design responsive

### À venir

- [ ] Commentaires publics
- [ ] Statistiques avancées
- [ ] Export de la progression
- [ ] Partage social

## Déploiement sur Vercel

### 1. Créer un compte Vercel

Rendez-vous sur [vercel.com](https://vercel.com) et créez un compte.

### 2. Connecter votre repository GitHub

- Importez votre projet depuis GitHub
- Vercel détectera automatiquement Next.js

### 3. Configurer les variables d'environnement

Dans les paramètres du projet Vercel, ajoutez :

- `DATABASE_URL`: URL de votre base PostgreSQL
- `NEXT_PUBLIC_BASE_URL`: URL de votre site

### 4. Déployer

Vercel déploiera automatiquement à chaque push sur la branche principale.

## Scripts Disponibles

```bash
npm run dev          # Lancer en mode développement
npm run build        # Créer un build de production
npm run start        # Lancer le build de production
npm run lint         # Vérifier le code
npx prisma studio    # Interface graphique pour la BDD
```

## Gestion de la Base de Données

### Ajouter une nouvelle figure

1. Via Prisma Studio :

```bash
npx prisma studio
```

2. Via l'interface (à venir)

3. Directement en SQL :

```sql
INSERT INTO "Figure" (name, description, level, category, tips)
VALUES ('Front Lever', 'Description...', 20, 'intermediate', 'Conseils...');
```

## Niveaux de Difficulté

- **1-10** : Débutant (L-sit, Elbow lever)
- **11-20** : Intermédiaire (Back lever, Semi planche)
- **21-30** : Avancé (Handstand, Tuck planche, Straddle planche)
- **31-40** : Élite (Maltese, One-arm front lever, Full planche)
