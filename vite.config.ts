import { defineConfig, loadEnv, ServerOptions } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const apiServers = {
  local: "https://dev.groflex.io",
  development: "https://dev.groflex.io",
  qa: "https://qa.groflex.io",
  production: "https://app.groflex.io",
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  type ReleaseStageType = keyof typeof apiServers;

  const releaseStage =
    (env.VITE_RELEASESTAGE as ReleaseStageType) || "development";
  console.log(env.VITE_RELEASESTAGE, "env.VITE_RELEASESTAGE");

  let apiRoot = apiServers[releaseStage];

  if (!apiRoot) {
    apiRoot = "https://app.groflex.io";
  }

  const serverConfig: ServerOptions = {
    host: true,
    port: Number(env.VITE_PORT),
  };

  return {
    server: serverConfig,
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION),
      __API_RELEASESTAGE: JSON.stringify(env.VITE_RELEASESTAGE),
    },
    plugins: [react(), tsconfigPaths()],
  };
});
