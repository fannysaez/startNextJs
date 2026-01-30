# Sécurité — Mitigation Next.js (mon-portfolio)

Contexte
- Des advisory GHSA ont été signalées pour certaines versions de Next.js (DoS / consommation mémoire).
- Une mitigation temporaire a été appliquée pour réduire la surface d'attaque avant mise à jour.

Décision actuelle
- Garder la mitigation dans `next.config.mjs` :

```js
images: { unoptimized: true }
```

- Avantage : protège contre les GHSA listés et permet de continuer le développement sans upgrade immédiate.
- Inconvénient : les images ne seront plus optimisées automatiquement par Next (taille/perf côté client peuvent augmenter).

Actions / commandes utiles
- Créer une branche de test et tenter l'upgrade :

```bash
git checkout -b fix/security/next-upgrade
npm install next@16.1.6 --save
npm install
npm run dev
npm audit
```

- Pour restreindre l'optimizer plutôt que le désactiver, utilisez `remotePatterns` :

```js
// next.config.mjs
export default {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'trusted.example.com' }
    ]
  }
}
```

- Pour revenir en arrière (après upgrade vérifié) : supprimer `unoptimized: true` de `next.config.mjs`.

Préparation au déploiement (Vercel)
- Avant de déployer sur Vercel :
  1. Mettre à jour Next sur une branche test (voir commandes ci-dessus).
  2. Vérifier manuellement les pages clés et exécuter les tests.
  3. Retirer la mitigation (`unoptimized`) ou appliquer `remotePatterns` strictes.
  4. Déployer depuis la branche test ou merger vers `main` après validation.

Notes finales
- Pour l'instant (local) : laisser la mitigation est la bonne décision — sécurisée et réversible.
- Dès que vous êtes prêt à déployer : effectuez l'upgrade contrôlée vers `next@16.1.6` sur une branche, testez puis déployez.

Fichier modifié pour mitigation : `next.config.mjs`

Si vous voulez, je peux créer la branche de test pour vous et lancer l'upgrade localement.
