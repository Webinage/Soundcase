module.exports = {
  title: 'Soundcase',
  tagline: 'A web audio engine',
  url: 'https://soundcase.github.io',
  baseUrl: '/soundcase/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'soundcase',
  projectName: 'soundcase',
  themeConfig: {
    navbar: {
      title: 'Soundcase',
      logo: {
        alt: 'Soundcase Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/mdx',
          activeBasePath: 'docs',
          label: 'Getting started',
          position: 'left',
        },
        {
          to: 'examples/',
          activeBasePath: 'examples',
          label: 'Examples',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/soundcase/soundcase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Soundcase, Christopher Lenoir.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/soundcase/soundcase/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/soundcase/soundcase/edit/master/website/blog/',
          feedOptions: {
            type: 'all',
            title: 'Soundcase feed',
            description: 'The Soundcase framework blog feed',
            copyright: 'Copyright © ${new Date().getFullYear()} Soundcase, Christopher Lenoir.',
            // language?: string, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
