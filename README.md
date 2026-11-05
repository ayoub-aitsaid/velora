# Velora

Application web Next.js avec TypeScript, App Router, Tailwind CSS et ESLint.

## Prérequis

Node.js 24 et npm. Aucun secret ni service externe requis pour démarrer.

## Développement

```sh
cd /workspace/velora
npm ci
npm run dev -- --hostname 0.0.0.0
```

Le serveur écoute sur le port 3000. La page principale se trouve dans `src/app/page.tsx`.

## Vérifications

```sh
npm run lint
npm run typecheck
npm run build
```

## Production locale

Après la compilation :

```sh
npm start -- --hostname 0.0.0.0
```

Les dépendances sont verrouillées dans `package-lock.json`. Les fichiers `.env*` sont ignorés par Git ; ne pas y committer de secrets.

Webpack est utilisé pour le développement et la compilation afin de rester compatible avec les restrictions de ports internes du cloud.
