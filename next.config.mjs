/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mitigation temporaire de sécurité : désactive l'Image Optimizer
  // afin de réduire la surface d'attaque avant la mise à jour de Next.js.
  images: {
    unoptimized: true
    // Si vous préférez une approche plus ciblée, utilisez `remotePatterns`
    // pour autoriser uniquement des domaines de confiance.
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'trusted.example.com' }
    // ]
  }
};

export default nextConfig;
