import { CodeTabs } from "D:/programme/vuepress-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dquqoqvhi4ajdfvy4wmdtbgwda/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/programme/vuepress-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dquqoqvhi4ajdfvy4wmdtbgwda/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/programme/vuepress-blogs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.65_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dquqoqvhi4ajdfvy4wmdtbgwda/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
