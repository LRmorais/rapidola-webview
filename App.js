import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Alert,
  Button,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text
} from 'react-native';

import WebView from 'react-native-webview';


const App = () => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width
  const [url, setUrl] = useState('https://rapidola.com.br/');

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={0}

    >
      <View style={{ flex: 1, marginBottom: 25 }}>
        <WebView
          source={{ uri: url }}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            Alert.alert('WebView error: ', "" + nativeEvent);
          }}
          onHttpError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn(
              'WebView received error status code: ',
              nativeEvent.statusCode,
            );
          }}
          mixedContentMode={'always'}
          geolocationEnabled={true}
          ignoreSslError={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          startInLoadingState={false}
          style={{ flex: 1, width: deviceWidth, height: deviceHeight, marginTop: '10%' }}
        />

        <View style={{ position: 'absolute', right: 0, marginTop: '20%', marginRight: '75%', zIndex: 1, height: '89%', width: 10 }}>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/')}>
            <Text></Text>
          </TouchableHighlight>
        </View>

        <View style={{ position: 'absolute', right: 0, marginTop: '17%', marginRight: '55%', zIndex: 1, height: '89%', width: 10 }}>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/alerts')}>
            <Text></Text>
          </TouchableHighlight>
        </View>

        <View style={{ position: 'absolute', right: 0, marginTop: '15%', marginRight: 140, zIndex: 1, height: '89%', width: 10 }}>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/explore')}>
            <Text></Text>
          </TouchableHighlight>
        </View>

        <View style={{ position: 'absolute', right: 0, marginTop: '14%', marginRight: 68, zIndex: 1, height: '89%', width: 10 }}>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/cart')}>
            <Text style={{ fontSize: 50, color: 'black' }}></Text>
          </TouchableHighlight>
        </View>
        
        

        <View style={{ position: 'absolute', right: 0, marginTop: '13%', marginRight: '0%', zIndex: 1, height: '89%', width: 10 }}>
          <TouchableHighlight style={styles.addButton}
            underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/my-account')}>
            <Text></Text>
          </TouchableHighlight>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  buttonContainer: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flexGrow: 1, flexShrink: 1, width: '100%', 
    alignItems: 'center'
  },
  addButton: {

    borderColor: '#ff5722',
    borderWidth: 1,
    height: 70,
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 20,
    shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
  }
});

export default App;