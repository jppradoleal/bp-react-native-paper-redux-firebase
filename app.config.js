export default {
  expo: {
    name: 'bp-react-native-paper-redux-firebase',
    slug: 'bp-react-native-paper-redux-firebase',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    plugins: [
      '@react-native-google-signin/google-signin',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
    ],
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'dev.jprado.ensaios',
      googleServicesFile: process.env.GOOGLE_SERVICES_INFOPLIST,
    },
    android: {
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      package: 'dev.jprado.ensaios',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'd00c82d4-dc17-4c08-90c2-2d5bc0acddd8',
      },
    },
  },
};
