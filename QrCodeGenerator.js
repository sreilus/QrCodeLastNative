'use strict';

import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Alert,
} from 'react-native';

const staticLabel = '/*deneme*/';

class QrCodeGenerator extends Component {
  svg;

  state = {
    input1: '',
    input2: '',
    text: 'SDFSDFSFSFFSFFdsfd dfsdfdsfffffffffffffffffffff sdssssssssssssssss sdddddddddddddddddd fffffffff dsdsdddddddddddddddddddddddddddddddddddddddddddddddd sddddddddd  ddddddddddddddddddddddddddddddddddddddddddddddddddddfs dssssssssssssssssssssssssssssssssss sddddddddddddddddddddddddddddddddd +sddddddddddddddddddddddd +sd ssssssssssssssssssssssssssssssss',
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
        RNFS.CachesDirectoryPath + '/' + this.state.input1 + '.png',
        data,
        'base64',
      )
        .then(success => {
          return CameraRoll.saveToCameraRoll(
            RNFS.CachesDirectoryPath + '/' + this.state.input1 + '.png',
            'photo',
          );
        })
        .then(() => {
          this.setState({busy: false, imageSaved: true});
          ToastAndroid.show('Galeriye Kaydedildi !', ToastAndroid.SHORT);
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
            title="QR Code Oluştur ve Kaydet"
          />
          <Button
            style={{
              marginBottom: 50,
              marginTop: 50,
              backgroundColor: 'aqua',
              justifyContent: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('ResultPage', {name: 'jack'})
            }
            title="Geçiş Yap"
          />
          <View style={{marginTop: 50}}>
            <QRCode
              value={this.state.text}
              logo={{uri: base64Logo}}
              logoSize={30}
              logoBackgroundColor="transparent"
              getRef={ref => (this.svg = ref)}
            />
          </View>
          <Button
            style={{
              marginBottom: 50,
              backgroundColor: 'aqua',
              justifyContent: 'center',
            }}
            onPress={() => this.saveQrToDisk()}
            title="Kaydet"
          />
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

AppRegistry.registerComponent('QrCodeGenerator', () => QrCodeGenerator);

module.exports = QrCodeGenerator;
