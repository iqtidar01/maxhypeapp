import { StyleSheet } from 'react-native';

// export const BASE_URL = 'https://portal.myadvocator.com'
export const BASE_URL = 'https://portal.myadvocator.com';
// export const IMAGES = {
//     background: require('../assests/Images/background.jpeg'),
//     logo: require('../assests/Images/logo.png'),
//     facebook: require('../assests/Images/facebook.jpeg'),
//     google: require('../assests/Images/google.jpeg')
// }

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  primary: '#2F4082',
  secondary: '#4B92CE',
  darkGrey: '#373E4A',
  lightGrey: '#949494',
  grey: '#d3d3d3',
};

export const CONSTANT = {
  AUTH: {
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Create New Account',
    FORGOT_PASSWORD: 'Forgot Password',
    COMPANY_CODE: 'Company Code',
    SELECT_REPO: 'Select Sales Rep',
  },
  DRAWER: {
    DRAWER_DASHBOARD: 'DASHBOARD',
    DASHBOARD: 'DASHBOARD',
    HOME_SCREEN: 'Home Screen',
    ReferralsHistoryStack: 'Referrals Stack',
    ADD_REFERRALS: 'ADD REFERRALS',
    REFERRALS_HISTORY: 'Referrals History',
    DOCUMENTS: 'Documents',
    PROJECT_STAGES: 'Project Stages',
    ADVOCATOR: 'Advocator Wallet',
    TERMS: 'Terms',
    REVIEW: 'Write a Review',
    INBOX_SCREEN: 'Messaging',
    CHAT_LIST: 'Chat List',
    INBOX: 'Chat',
    SHARE: 'Share',
    PRIVACY_POLICY: 'Privacy Policy',
    CONTACT_US: 'Contact Us',
    SETTING_STACK: 'Settings',
    SETTING: 'Setting',
    CHANGE_PASSWORD: 'Change Password',
  },
};
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  card: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
