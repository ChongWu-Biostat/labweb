// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Success is not final, failure is not fatal. It is the courage to continue that counts. By Winston Churchill.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "The best thing about being a statistician is that you get to play in everyone&#39;s backyard. By John Tukey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Open-source software, tools, and resources developed by members in Chong Wu Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Meet the dedicated researchers and students driving our work forward. We are always looking for talented individuals to join us!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Team/";
          },
        },{id: "nav-grants",
          title: "Grants",
          description: "Overview of current and previous research funding supporting our work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/grants/";
          },
        },{id: "news-our-r01-grant-uncovering-causal-protein-markers-to-improve-prostate-cancer-etiology-understanding-and-risk-prediction-in-africans-and-europeans-mpi-lang-wu-and-chong-wu-has-been-awarded-by-the-nci",
          title: 'Our R01 grant, “Uncovering causal protein markers to improve prostate cancer etiology understanding...',
          description: "",
          section: "News",},{id: "news-our-u01-grant-uncovering-causal-protein-markers-to-characterize-pancreatic-cancer-etiology-and-improve-risk-prediction-mpi-lang-wu-and-chong-wu-has-been-awarded-by-the-nci",
          title: 'Our U01 grant, “Uncovering Causal Protein Markers to Characterize Pancreatic Cancer Etiology and...',
          description: "",
          section: "News",},{id: "news-our-trans-pwas-work-has-been-selected-by-ashg-for-a-platform-talk-congratulations-zichen",
          title: 'Our trans-PWAS work has been selected by ASHG for a platform talk. Congratulations,...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%77%75%31%38@%6D%64%61%6E%64%65%72%73%6F%6E.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ChongWu-Biostat", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8400-1785", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sWUsT2UAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
