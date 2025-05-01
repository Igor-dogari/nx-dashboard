import config from '../../auth_config.json';

const {
  domain,
  clientId,
  authorizationParams: { audience },
  apiUri,
  errorPath,
} = config as {
  domain: string;
  clientId: string;
  authorizationParams: {
    audience?: string;
  };
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  googleAnalyticsId: '',
  pageTitle: 'Elementar',
  auth: {
    domain,
    clientId,
    authorizationParams: {
      ...(audience && audience !== '{yourApiIdentifier}' ? { audience } : null),
      redirect_uri: window.location.origin,
    },
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
