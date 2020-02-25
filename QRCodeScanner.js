import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {QRScannerView} from 'ac-qrcode-rn';

export default class QRCodeScanner extends Component {
  constructor(props) {
    super(props);
  }

  onScanResultReceived = ({data, type}) => {
    console.log(`Type: ${type}\nData: ${data}`);
    // do anything
  };

  renderTopBarView() {
    return <Text style={styles.text}>这里添加标题</Text>;
  }

  renderBottomMenuView() {
    return <Text style={styles.text}>这里添加底部菜单</Text>;
  }

  render() {
    return (
      <View>
        <QRScannerView
          onScanResultReceived={this.onScanResultReceived}
          renderTopBarView={this.renderTopBarView}
          renderBottomMenuView={this.renderBottomMenuView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    padding: 12,
  },
});
