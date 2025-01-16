import webStorageKeyEnum from "./src/app/enums/web-storage-key.enum";
import WebStorageService from "./src/app/services/webstorage.service";

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
    login: `${resourceHost}user/loginUser`,
    sendEmailOtp: `${resourceHost}user/register`,
    verifyEmailOtp: `${resourceHost}user/email/code`,
  },
};

const regex = {
  emailCheck:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
};

const checkLoginTokenIsValid = () => {
  const loginExpireHours = 6;
  const loginToken = WebStorageService.getItem(webStorageKeyEnum.LOGIN_TOKEN);
  const loginTokenStartTime = WebStorageService.getItem(
    webStorageKeyEnum.LOGIN_TOKEN_START_TIME
  );

  if (loginTokenStartTime && loginToken) {
    const difference = Math.abs(
      new Date().getTime() - parseInt(loginTokenStartTime)
    );
    const hours = parseFloat(Math.abs(difference / 36e5).toFixed(2));
    // console.log("Hours after login: ", hours);
    if (hours <= loginExpireHours) {
      return true;
    }
  }
  // localStorage.clear();
  WebStorageService.removeItem(webStorageKeyEnum.LOGIN_TOKEN);
  WebStorageService.removeItem(webStorageKeyEnum.LOGIN_TOKEN_START_TIME);
  return false;
};

const config = {
  checkLoginTokenIsValid,
  identityResourceHost,
  resourceHost,
  resourceUrls,
  regex,
};

export default config;
