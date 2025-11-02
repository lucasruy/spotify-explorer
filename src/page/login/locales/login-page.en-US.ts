export const loginPageEnUS = {
  tagline: 'Secure access to artist intelligence',
  title: 'Connect your Spotify profile in seconds',
  subtitle:
    'Authenticate with Spotify to unlock personalized dashboards, curated analytics and favorites aligned with your catalog.',
  hero: {
    badge: 'Spotify single sign-on',
    highlights: {
      secure: 'OAuth 2.0 Authorization Code with PKCE',
      fast: 'One tap login and automatic session refresh',
      preview: 'Previews of upcoming artist insights and charts',
    },
    card: {
      title: 'How the connection works',
      description:
        'We guide you through a streamlined flow that preserves security and keeps the experience on brand.',
    },
  },
  cta: {
    primary: 'Connect with Spotify',
    secondary: 'Review the integration guide',
  },
  sections: {
    steps: {
      items: {
        connect: {
          title: 'Authorize access',
          description:
            'You are redirected to Spotify to grant read access to your public profile and email.',
        },
        review: {
          title: 'Verify the account',
          description:
            'We confirm your identity and securely store tokens using encrypted HttpOnly cookies.',
        },
        sync: {
          title: 'Sync your workspace',
          description:
            'In a few seconds your session is ready and data queries become available to the app.',
        },
      },
    },
    security: {
      title: 'Designed with security in mind',
      description:
        'Tokens never touch local storage. We rely on HttpOnly cookies, short-lived access tokens and refresh only when necessary.',
      callout: {
        title: 'Transparency guarantee',
        description:
          'You can revoke access at any time from your Spotify dashboard and the session is immediately revoked on our side.',
      },
    },
    support: {
      title: 'Need help getting started?',
      description:
        'Our team is ready to guide you through the connection or corporate onboarding process if you need a tailored setup.',
      actions: {
        contact: 'Talk to our team',
        back: 'Return to home',
      },
    },
  },
} as const;
