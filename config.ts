const apiServers = {
  local: "https://dev.groflex.io",
  development: "https://dev.groflex.io",
  qa: "https://qa.groflex.io",
  production: "https://app.groflex.io",
};

// const releaseStage = import.meta.env.VITE_RELEASESTAGE || "development";
const releaseStage = "local";
const baseUrl = apiServers[releaseStage];

function getResourceHost() {
  return `${baseUrl}/api/`;
}

function getIdentityResourceHost() {
  return `${baseUrl}/identityapi/`;
}
const resourceHost = releaseStage === "local" ? "/api/" : getResourceHost();
const identityResourceHost =
  releaseStage === "local" ? "/identityapi/" : getIdentityResourceHost();

const resourceUrls = {
  auth: {
    login: `${resourceHost}auth/login`,
    sendEmailOtp: `${resourceHost}user/register`,
    verifyEmailOtp: `${resourceHost}user/email/code`,
  },
};

const regex = {
  emailCheck:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
};

const config = {
  identityResourceHost,
  resourceHost,
  resourceUrls,
  regex,
};

export default config;
