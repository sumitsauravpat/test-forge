import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';

// Purpose — every real API call in this project needs a fresh Bearer token first
export async function getAccessToken(request: APIRequestContext): Promise<string> {
  const response = await request.post(env.tokenUrl, {
    form: {
      grant_type: 'client_credentials',
      scope: env.scope,
      client_secret: env.clientSecret,
      client_id: env.clientId,
    },
  });

  const value = await response.json();
  return value.access_token;
}
