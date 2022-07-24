import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://127.0.0.1:8080',
  redirectUri: window.location.origin + '/index.html',
  oidc: true,
  useHttpBasicAuth: true,
  responseType: 'code',
  requireHttps: false,
  logoutUrl: '127.0.0.1:8080/logout',
  clientId: 'spa',
  dummyClientSecret: '',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};
