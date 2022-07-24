import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://127.0.0.1:8080',
  redirectUri: window.location.origin,
  loginUrl: 'http://127.0.0.1:8080/login',
  oidc: true,
  useHttpBasicAuth: true,
  responseType: 'code',
  requireHttps: false,
  logoutUrl: '127.0.0.1:8080/logout',
  clientId: 'secret',
  dummyClientSecret: 'secret',
  // scope: 'openid profile email offline_access api',
  scope: 'read write openid',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};
