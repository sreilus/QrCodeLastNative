import React, {Component} from 'react';
import {Text, View} from 'react-native';

function ProductFuture(data) {
  return (
    <View style={{backgroundColor: '#ABEBC6', borderRadius: 20, marginTop: 10}}>
      <Text style={{margin: 10}}> {data.data}</Text>
    </View>
  );
}

export default ProductFuture;
