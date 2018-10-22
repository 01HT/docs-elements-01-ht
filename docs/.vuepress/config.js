module.exports = {
  dest: "vuepress",
  title: "Elements Docs",
  description: "Руководство пользователя Elements",
  ga: "UA-117327494-4",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,q_100,w_512/v1537280524/logos/01ht/elements/logo.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#83b735" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,q_100,w_152/v1537280524/logos/01ht/elements/logo.png`
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href:
          "https://res.cloudinary.com/cdn-01ht/image/upload/v1537280524/logos/01ht/elements/logo.svg",
        color: "#83b735"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content:
          "https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,q_100,w_144/v1537280524/logos/01ht/elements/logo.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: true,
  evergreen: true,
  // theme: "vue",
  themeConfig: {
    repo: "01HT/docs-elements-01-ht",
    editLinks: true,
    docsDir: "docs",
    // displayAllHeaders: true,
    sidebarDepth: 3,
    // algolia: {
    //   apiKey: "012853d1e7866badd85449541d83a5cb",
    //   indexName: "webtutor_docs"
    // },
    nav: [
      { text: "Руководство", link: "/guide/" },
      { text: "Для авторов", link: "/for-authors/" },
      { text: "FAQ", link: "/faq/" }
    ],
    editLinkText: "Редактировать страницу на GitHub",
    lastUpdated: "Последнее обновление",
    serviceWorker: {
      updatePopup: {
        message: "Доступен новый контент, обновите страницу",
        buttonText: "Обновить"
      }
    },
    sidebar: {
      "/guide/": [
        {
          collapsable: false,
          children: [
            ""
          ]
        },
        {
          title: "Действия",
          collapsable: false,
          children: [
            "/guide/element-search/",
            "/guide/element-choice/",
            "/guide/element-getting/",
            "/guide/license-compliance/",
            "/guide/element-using/",
            "/guide/license-check/",
            "/guide/element-update/"
          ]
        },
        {
          title: "Разделы",
          collapsable: false,
          children: [
            "/guide/sign-in/",
            "/guide/account/",
            "/guide/my-organizations/",
            "/guide/my-elements/",
            "/guide/purchases/",
            "/guide/payments/",
            "/guide/catalog/",
            "/guide/element/",
            "/guide/user/",
            "/guide/organization/",
            "/guide/license/"
          ]
        }, {
          title: "Прочее",
          collapsable: false,
          children: [
            "/guide/verified-user/"
          ]
        }
      ],
      "/for-authors/": [
        {
          title: "Для авторов",
          collapsable: false,
          children: [
            "/for-authors/how-become-author/",
            "/for-authors/payments/"
          ]
        }
      ],
      "/faq/": [
        {
          title: "FAQ",
          collapsable: false,
          children: [""]
        }
      ],
      // fallback
      "/": [""]
    }
  }
};