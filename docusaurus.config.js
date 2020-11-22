module.exports = {
  title: "e-learn",
  tagline:
    "An electronic learning platform to curate learning materials for members of DSC to enhance personalized learning. This is to serve as the first point of reference for students in need of course materials",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/google.png",
  organizationName: "kwasu-ng", // Usually your GitHub org/user name.
  projectName: "e-learn", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "learn/",
          activeBasePath: "learn",
          label: "Learning Resources",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              html: "DSC KWASU",
            },
            {
              html: `© ${new Date().getFullYear()} | All Rights Reserved.`,
            },
            {
              html: "Learn, Grow and Connect",
            },
          ],
        },
        {
          title: "Learning Resources",
          items: [
            {
              label: "web",
              to: "learn/",
            },
            {
              label: "UI/UX",
              to: "learn/design/",
            },
            {
              label: "Mobile App",
              to: "learn/android/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "Slack",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Official website",
              href: "https://dsckwasu.club",
            },
            {
              label: "GitHub",
              href: "https://github.com/kwasu-ng",
            },
          ],
        },
      ],
      copyright: "Built with Docusaurus.",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
