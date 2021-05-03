export const authConstants = {
  AUTH_SERVICE: 'AUTH_SERVICE',
  JWT_SECRET: process.env.JWT_SECRET || 'secretKey',
  ACCESS_TOKEN_LIFE: process.env.ACCESS_TOKEN_LIFE || '1d',
  REFRESH_TOKEN_LIFE: process.env.REFRESH_TOKEN_LIFE || '15d',
};

export const GRANTTYPE = {
  REFRESH_TOKEN: 'refreshToken',
  PASSWORD: 'password',
};
