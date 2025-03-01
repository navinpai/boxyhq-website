module.exports = {
  GuidesSidebar: [
    'index',
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
        {
          type: 'category',
          label: 'Deployment Guides',
          collapsed: false,
          items: [
            'jackson/deployments/heroku',
            'jackson/deployments/vercel',
            'jackson/deployments/mogenius',
          ],
        },
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: false,
          items: [
            'jackson/frameworks/express',
            'jackson/frameworks/nextjs',
            'jackson/frameworks/remix',
          ],
        },
        {
          type: 'category',
          label: 'Integrations Guides',
          collapsed: false,
          items: [
            'jackson/integrations/auth0',
            'jackson/integrations/firebase',
            'jackson/integrations/nextauth',
            'jackson/integrations/supertokens',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Directory Sync',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'directory-sync/overview' },
      items: [
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: true,
          items: [
            'directory-sync/frameworks/nextjs',
            'directory-sync/frameworks/express',
          ],
        },
      ],
    },
  ],
};
