module.exports = {
    // extraWatchFiles: ["**/*.md", "**/*.vue"],
    title: "ESA GRAND-OUEST",
    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'ESA GRAND-OUEST',
            description: 'Entretien des systèmes aérauliques. Mise en propreté et désinfection des installation acheminent de l’air.'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://esa-grandouest.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ffffff' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:700&display=swap' }]
    ],
    plugins: [
        [
        'sitemap', { hostname: 'http://esa-grandouest.netlify.com'}
        ],
        [
          '@vuepress/google-analytics',
          { ga: 'UA-12345678-9' }
        ],
        ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
        }
        ],
        ['@vuepress/back-to-top']
    ],
    themeConfig: {
        //host: 'localhost',
        docsDir: 'pages',
        logo: '/logo.png',
        smoothScroll: true,
        nav: [{
                text: 'Nos prestations',
                link: '/pages/'
            },
            {
                text: 'Mentions légales',
                link: '/pages/mentions-legales.html'
            }
        ],
        searchPlaceholder: 'Rechercher'
    }
}