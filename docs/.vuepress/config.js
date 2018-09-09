module.exports = {
  dest: "vuepress",
  title: "ElementsDocs",
  description: "Руководство пользователя Elements",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `https://res.cloudinary.com/cdn-01ht/image/upload/v1531730403/logos/01ht/elements/logo.png`
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
        href: `https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,w_152/v1531730403/logos/01ht/elements/logo.png`
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href:
          "https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,w_152/v1531730403/logos/01ht/elements/logo.svg",
        color: "#83b735"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content:
          "https://res.cloudinary.com/cdn-01ht/image/upload/c_scale,w_144/v1531730403/logos/01ht/elements/logo.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: true,
  // theme: "vue",
  themeConfig: {
    repo: "01ht/ht-docs-elements",
    editLinks: true,
    docsDir: "docs",
    nav: [
      { text: "Руководство", link: "/guide/" },
      { text: "Для разработчиков", link: "/developers/" }
      // { text: "Elements", link: "https://elements.01.ht" }
    ],
    editLinkText: "Редактировать страницу на GitHub",
    lastUpdated: "Последнее обновление",
    serviceWorker: {
      updatePopup: {
        message: "Доступен новый контент обновите страницу",
        buttonText: "Обновите страницу"
      }
    },
    sidebar: {
      "/guide/": genSidebarConfig("Руководство"),
      "/developers/": genSidebarConfig("Для разработчиков")
    }
  }
};

function genSidebarConfig(title) {
  switch (title) {
    case "Руководство":
      return [{ title, collapsable: false, children: ["", "signin", "purchase"] }];
    case "Для разработчиков":
      return [{ title, collapsable: false, children: ["", "getting-started", "payments", "verification"] }];
  }
}