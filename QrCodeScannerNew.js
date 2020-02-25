import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet,Alert} from 'react-native';
import {QRScannerRectView} from 'react-native-qrcode-scanner-view';
import {RNCamera} from 'react-native-camera';

class CodeScan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: '扫一扫',
  };

  renderTitleBar = () => <Text style={styles.text}>扫一扫</Text>;

  renderMenu = () => <Text style={styles.text} />;

  barcodeReceived = event => {
    const {navigation} = this.props;
    if (
      event.data.indexOf('http') !== -1 ||
      event.data.indexOf('https') !== -1
    ) {
      Alert.alert('kod: ' + event.data);
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <RNCamera
          style={styles.preview}
          onBarCodeRead={this.barcodeReceived}
          renderFooterView={this.renderMenu}
          scanBarAnimateReverse>
          <QRScannerRectView />
        </RNCamera>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 16,
  },
  preview: {
    flex: 1,
  },
});
export default CodeScan;
