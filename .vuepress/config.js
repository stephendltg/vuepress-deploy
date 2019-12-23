module.exports = {
    plugins: [
        '@vuepress/google-analytics',
        { ga: 'UA-12345678-9' }
    ],
    title: "ESA",
    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'ESA',
            description: 'Entretien des systèmes aérauliques.'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://esa-grandouest.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    plugins: {
        'sitemap': {
          hostname: 'http://esa-grandouest.netlify.com'
        },
    },
    themeConfig: {
        docsDir: 'docs',
        repo: 'stephendltg/vuepress-deploy',
        logo: '/logo.png',
        smoothScroll: true,
        nav: [{
                text: 'Nos préstations',
                link: '/docs/',
            },
            {
                text: 'NetlifyCMS Config Help',
                link: '/docs/netlifycms-configuration.html',
            }
        ]
    }
}
