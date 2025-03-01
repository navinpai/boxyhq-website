const copyright = '2021-present © BoxyHQ Inc.';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Enterprise Readiness made simple',
  tagline:
    'BoxyHQ helps startups enable enterprise features in any SaaS app with just a few lines of code. Integrate SAML, Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free.',
  url: 'https://boxyhq.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'boxyhq', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  scripts: [
    {
      src: 'https://cmp.osano.com/169lWRSfch3C32VM2/2cd324ff-6a09-4e61-94fa-6af31f004e67/osano.js',
      defer: true,
    },
  ],
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/boxyhq/jackson">⭐ Star us on GitHub</a>',
      isCloseable: false,
    },
    image: 'img/website-preview-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BoxyHQ',
      logo: {
        alt: 'BoxyHQ',
        width: '32px',
        height: '32px',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          label: 'Products',
          type: 'dropdown',
          items: [
            {
              to: '/enterprise-sso',
              label: 'Enterprise SSO',
            },
            {
              to: '/directory-sync',
              label: 'Directory Sync',
            },
            {
              to: '/audit-logs',
              label: 'Audit Logs',
            },
            {
              href: 'https://awesome-oss-devsec.boxyhq.com/',
              label: 'Developer Security Tools',
            },
          ],
        },
        { to: '/docs', label: 'Docs' },
        { to: '/guides', label: 'Guides' },
        { to: '/blog', label: 'Blog' },
        {
          label: 'Company',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              to: '/team',
              label: 'Team',
            },
            {
              to: '/careers',
              label: 'Careers',
            },
          ],
        },
        {
          href: 'https://github.com/boxyhq',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/boxyhq',
            },
            {
              label: 'Discord',
              href: 'https://discord.boxyhq.com',
            },
            {
              label: 'Aviyel',
              href: 'https://aviyel.com/projects/11/boxyhq',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/boxyhq',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/boxyhq',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/boxyhq',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/boxyhq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy & Cookies Policy',
              href: '/privacy.html',
            },
            {
              label: 'Terms',
              href: '/terms.html',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Careers',
              href: '/careers',
            },
            {
              label: 'Team',
              href: '/team',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription:
            'The BoxyHQ blog is where our team shares our thoughts and ideas about everything from our products to industry news and insights. We also welcome guest posts so please do get in touch if you have any thoughts you would like to share on our blog.',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
          },

          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-N9999D3', // GTM Container ID
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'careers',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'careers',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './careers',
        blogTitle: 'Careers',
        blogDescription:
          'Join us on our mission to help startups simplify the development of compliance and data security-related features in their products. Check out our open roles.',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars_guides.js'),
      },
    ],
    ['@cmfcmf/docusaurus-search-local', {}],
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
};
