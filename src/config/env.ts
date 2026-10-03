import 'dotenv/config';

interface EnvConfig {
  baseUrl: string;
  tokenUrl: string;
  clientId: string;
  clientSecret: string;
  scope: string;
  environment: string;
  serviceEnv: string;
  transactionId: string;
  itemQuoteUrl: string;
  uiTestBaseUrl: string;
}

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key} (check your .env file)`);
  }
  return value;
}

export const env: EnvConfig = {
  baseUrl: requireEnv('BASE_URL'),
  tokenUrl: requireEnv('TOKEN_URL'),
  clientId: requireEnv('CLIENT_ID'),
  clientSecret: requireEnv('CLIENT_SECRET'),
  scope: requireEnv('SCOPE'),
  environment: requireEnv('ENVIRONMENT'),
  serviceEnv: requireEnv('SERVICE_ENV'),
  transactionId: requireEnv('TRANSACTION_ID'),
  itemQuoteUrl: requireEnv('ITEM_QUOTE_URL'),
  uiTestBaseUrl: requireEnv('UI_TEST_BASE_URL'),
};
