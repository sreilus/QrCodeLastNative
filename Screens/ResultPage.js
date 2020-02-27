import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ProductFuture from '../Components/ProductFuture';

export default class ResultPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold'}}> DİA FREZELER ÖZELLİKLERİ</Text>
        </View>
        <ProductFuture data="DP:70x54x30 Z3 ; TURANLAR" />
        <ProductFuture data="DP:70x54x30 Z3 ; TURANLAR" />
        <ProductFuture data="DP:70x54x30 Z3 ; TURANLAR" />
        <ProductFuture data="DP:100x63x30 Z3 ; BRANDT ; IDM ; TÖRK" />
      </View>
    );
  }
}
