import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,

} from 'react-native';

import WebView from 'react-native-webview';


const App = () => {
  const [url, setUrl] = useState('https://www.rapidola.com.br')
  const [urlA, setUrlA] = useState('https://www.rapidola.com.br')
  const [isReloadWebView, setReloadWebView] = useState(false);
  console.log(url)

  useEffect(() => {
    if (url !== urlA) {
      setReloadWebView(!isReloadWebView);
      setUrlA(url)
    }
  }, [url]);
  

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={0}

    >
      <View style={{ flex: 1, marginBottom: 25 }}>
        <WebView
          ref={CandleWVref => (CandleWebViewRef = CandleWVref)}
          key={isReloadWebView}
          source={{ uri: url }}
          onNavigationStateChange={(navState) => {
            setUrl(navState.url)
          }}
          geolocationEnabled={true}
          pullToRefreshEnabled={true}
          sharedCookiesEnabled={true}
          originWhitelist={['*']}
          useWebKit={true}
          style={{ flex: 1, marginTop: '10%' }}
        />



      </View>
    </KeyboardAvoidingView>
  );
}



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
    flexGrow: 1, flexShrink: 1
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