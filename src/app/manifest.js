export default function manifest() {
  return {
    name: 'Developer Chowk | Web Development Lucknow',
    short_name: 'Developer Chowk',
    description: 'Expert MERN stack web development and custom business solutions in Lucknow.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo1.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
