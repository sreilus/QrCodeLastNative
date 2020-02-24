'use strict';
/* eslint react/prop-types: 0 */

import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';
//import RNFS from 'react-native-fs';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  CameraRoll,
  ToastAndroid,
} from 'react-native';

const staticLabel = '/*deneme*/';

class QrHelloWorld extends Component {
  svg;

  state = {
    input1: '',
    input2: '',
    text: 'deneme',
  };

  generateQrCode = () => {
    this.setState({
      text: this.state.input1 + staticLabel + this.state.input2,
    });
    console.log('dd:' + this.state.text);
    this.saveQrToDisk();
  };

  saveQrToDisk = () => {
    this.svg.toDataURL(data => {
      RNFS.writeFile(
        RNFS.CachesDirectoryPath + '/some-name.png',
        data,
        'base64',
      )
        .then(success => {
          return CameraRoll.saveToCameraRoll(
            RNFS.CachesDirectoryPath + '/some-name.png',
            'photo',
          );
        })
        .then(() => {
          this.setState({busy: false, imageSaved: true});
          ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
        });
    });
  };

  render() {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Text>Ürün Adı</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({input1: text})}
            value={this.state.input1}
          />
          <Text>Ürün Fiyatı</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({input2: text})}
            value={this.state.input2}
          />
          <Button
            style={{
              marginBottom: 50,
              backgroundColor: 'aqua',
              justifyContent: 'center',
            }}
            onPress={() => this.generateQrCode()}
            title="Generate QR Code"
          />
          <View style={{marginTop: 50}}>
            <QRCode
              value={this.state.text}
              logo={{uri: base64Logo}}
              logoSize={30}
              logoBackgroundColor="transparent"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
});

AppRegistry.registerComponent('QrHelloWorld', () => QrHelloWorld);

module.exports = QrHelloWorld;
