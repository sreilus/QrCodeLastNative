/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import QrCodeTest from './QrCodeTest';
import QRCodeScanner from './QRCodeScanner';
import QrCodeScannerNew from './QrCodeScannerNew';

import QRCode from 'react-native-qrcode-svg';

const App: () => React$Node = () => {
  return (
    <>
      <QrCodeScannerNew />
    </>
  );
};

export default App;
