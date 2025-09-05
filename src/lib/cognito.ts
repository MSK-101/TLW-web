import { Amplify } from 'aws-amplify';

// Validate required environment variables
const userPoolId = process.env.NEXT_PUBLIC_USER_POOL_ID;
const userPoolClientId = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID;

if (!userPoolId || !userPoolClientId) {
  throw new Error('Missing required Cognito configuration: USER_POOL_ID and USER_POOL_CLIENT_ID must be set');
}

const cognitoConfig = {
  Auth: {
    Cognito: {
      userPoolId,
      userPoolClientId,
      loginWith: {
        email: true,
      },
    }
  }
};

Amplify.configure(cognitoConfig);
