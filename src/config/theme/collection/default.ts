import { ThemeConfig, theme } from "antd";

const { defaultAlgorithm } = theme;

const instance: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  token: {
  },
  components: {
    Layout: {
      headerBg: "#f6f8fa",
      triggerBg: "#ffffff",
      siderBg: "#ffffff",
    },
  },
};

export default instance;
