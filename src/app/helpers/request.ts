import webStorageKeyEnum from "../enums/web-storage-key.enum";
import WebStorageService from "../services/webstorage.service";
import config from "../../../config";

type requestOptions = {
  auth: boolean;
  method?: string | "GET";
  authCustomBearerToken?: string;
};

export const login = (email: string, password: string) => {
  const entitlementToken = WebStorageService.getItem(
    webStorageKeyEnum.ENTITLEMENT_TOKEN
  );

  return new Promise((resolve, reject) => {
    fetch(config.resourceUrls.auth.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${entitlementToken}`,
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        // reject(response);
        response.json().then((data) => {
          reject(data);
        });
      }
    });
  });
};

export const sendEmailOtp = (email: string, password: string) => {
  const entitlementToken = WebStorageService.getItem(
    webStorageKeyEnum.ENTITLEMENT_TOKEN
  );

  return new Promise((resolve, reject) => {
    fetch(config.resourceUrls.auth.sendEmailOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${entitlementToken}`,
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response) {
        response.json().then((data) => {
          resolve(data);
        });
        // resolve(response);
      } else {
        reject(response);
      }
    });
  });
};

export const verifyEmailOtp = (code: string) => {
  const registrationToken = WebStorageService.getItem(
    webStorageKeyEnum.REGISTRATION_TOKEN
  );

  return new Promise((resolve, reject) => {
    fetch(config.resourceUrls.auth.verifyEmailOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${registrationToken}`,
      },
      body: JSON.stringify({ code }),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject(response);
      }
    });
  });
};

export const logout = () => {
  WebStorageService.removeItem(webStorageKeyEnum.LOGIN_TOKEN);
  WebStorageService.removeItem(webStorageKeyEnum.LOGIN_TOKEN_START_TIME);
  WebStorageService.removeItem(webStorageKeyEnum.ENTITLEMENT_TOKEN);
  if (!location.pathname.startsWith("/oauth/google/callback")) {
    WebStorageService.setItem(
      webStorageKeyEnum.RETURN_AFTER_LOGIN,
      location.pathname
    );
  }
  location.assign("/auth/login");
};

export const getEntitlementByEmail = (email: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${config.identityResourceHost}entitlement/${email}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        reject(response);
      }
    });
  });
};

export type entitlementPayload = {
  email: string;
  countryId: number;
  countryCode: number;
  countryStateDetailId?: number;
  stateCode?: number;
  packageSKU?: string;
  SKUQuantity?: number;
};
export const createEntitlement = (payload: entitlementPayload) => {
  const data: entitlementPayload = {
    email: payload?.email,
    countryId: payload?.countryId,
    countryCode: Number(payload?.countryCode),
    // packageSKU: payload?.packageSKU,
    // SKUQuantity: payload?.SKUQuantity,
  };

  if (payload?.stateCode && payload?.countryStateDetailId) {
    data.countryStateDetailId = payload.countryStateDetailId;
    data.stateCode = payload?.stateCode;
  }

  return new Promise((resolve, reject) => {
    fetch(`${config.identityResourceHost}entitlement`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      // console.log(response);
      if (response.ok) {
        response
          .json()
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        // console.log(response);
        reject(response);
      }
    });
  });
};

export const getCounteriesWithStates = () => {
  return new Promise((resolve, reject) => {
    fetch(`${config.identityResourceHost}countries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        reject(response);
      }
    });
  });
};

export const request = (endpoint: string, options: requestOptions) => {
  options = options || {};

  return fetch(endpoint, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.auth && {
        Authorization: `Bearer ${WebStorageService.getItem(
          webStorageKeyEnum.LOGIN_TOKEN
        )}`,
      }),
      ...(options.authCustomBearerToken && {
        Authorization: `Bearer ${options.authCustomBearerToken}`,
      }),
    },
  });
};
