// app/lib/projets.js
export const projets = {
  portfolio: {
    title: 'Portfolio Personnel',
    slug: 'portfolio',
    description:
      "Mon premier porfolio à été réalisé en Juillet 2024 en seulement deux semaines, après avoir suivi une formation gratuite 'Le Réacteur' (HTML5, CSS3, JavaScript). Depuis, je mets à jour régulièrement pour y intégrer les nouvelles technologies et les projets réalisés durant ma formation chez Simplon à Clermont-Ferrand.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/votre-username/portfolio',
    demo: 'https://votre-site-demo.example.com'
  },
  cvEnLigne: {
    title: 'CV en ligne',
    slug: 'cv-en-ligne',
    description:
      "CV en ligne simple et professionnel, idéal pour présenter votre parcours et vos compétences.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/votre-username/cv-en-ligne',
    demo: 'https://cv-en-ligne-demo.example.com'
  },
  freelance: {
    title: 'App Bien-Être & Formations',
    slug: 'freelance',
    description:
      "Application Bien-Être & Formations est un projet final que j'ai réalisé en tant que freelance pendant mon stage de 2.5 mois.",
    technologies: ['Markdown', 'Next.js', 'SEO'],
    github: 'https://github.com/votre-username/freelance',
    demo: 'https://freelance-demo.example.com'
  }
  
}


// Utilitaire pour retrouver un projet par son `slug`
export function getProjetBySlug(slug) {
  if (!slug && slug !== 0) return undefined

  // Si `slug` est un tableau (cas improbable), prendre le premier élément
  const raw = Array.isArray(slug) ? slug[0] : slug

  // Normaliser: décoder et enlever slashes éventuels
  const norm = String(raw).replace(/^\/*|\/*$/g, '')

  // Chercher par propriété `slug`
  const bySlug = Object.values(projets).find(p => p.slug === norm)
  if (bySlug) return bySlug

  // Au cas où on reçoit la clé de l'objet (ex: 'portfolio', 'cvEnLigne')
  return projets[norm] || undefined
}
