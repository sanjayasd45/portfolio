export default function manifest() {
  return {
    name: 'Developer Chowk | Web Development Agency',
    short_name: 'Developer Chowk',
    description: 'Full-service web development agency delivering high-performance web applications, SaaS systems, and digital products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
