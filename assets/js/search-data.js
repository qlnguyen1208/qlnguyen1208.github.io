// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publication-lt-del-gt-s-lt-del-gt",
          title: "publication&lt;del&gt;s&lt;/del&gt;",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-creating-a-pcr-primer-table-in-latex-from-a-csv-file",
      
        title: "Creating a PCR Primer Table in LaTeX from a .csv File",
      
      description: "Example implementation from my bachelor&#39;s thesis.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/create-latex-primer-table-from-csv/";
        
      },
    },{id: "post-how-to-use-cellpose-with-cellprofiler-without-plugin",
      
        title: "How to use Cellpose with Cellprofiler (without plugin)",
      
      description: "A short tutorial on how cellpose segmentation can be used in cellprofiler pipelines without using the plugin.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/use_cellpose_with_cellprofiler/";
        
      },
    },{id: "news-i-was-accepted-into-the-pharmaceutical-sciences-master-s-program-at-lmu-munich-starting-october-2024",
          title: 'I was accepted into the Pharmaceutical Sciences Master’s Program at LMU Munich starting...',
          description: "",
          section: "News",},{id: "news-presentation-of-my-bachelor-39-s-thesis-at-urcup-2024",
          title: 'Presentation of my Bachelor&amp;#39;s Thesis at URCUP 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/urcup-2024/";
            },},{id: "news-happy-new-year-today-i-am-starting-my-challenge-for-2025-to-read-one-paper-per-day",
          title: 'Happy new year! 🎆 Today I am starting my challenge for 2025 to...',
          description: "",
          section: "News",},{id: "projects-bachelor-39-s-thesis-project",
          title: 'Bachelor&amp;#39;s Thesis Project',
          description: "Investigations on RPE remodeling during Retinitis Pigmentosa disease progression",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bachelors-thesis/";
            },},{id: "projects-instagram-weather-bot",
          title: 'Instagram Weather Bot',
          description: "Instagram bot for automated daily weather reports written in python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/insta-weather-bot/";
            },},{id: "projects-one-paper-a-day",
          title: 'One Paper a Day',
          description: "Documentation of my 2025 resolution to read one scientific publication per day",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paper-a-day/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6C%6F%72%69%61%6E@%66%72%69%65%73%65%6E%65%67%67%65%72.%78%79%7A", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/frieseneggerf", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/friesenegger.xyz", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mstdn.science/@ffriesenegger", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-8860-6623", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/friesenegger", "_blank");
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
