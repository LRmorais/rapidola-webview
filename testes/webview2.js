import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableHighlight

} from 'react-native';

import WebView from 'react-native-webview';


const App = () => {
  const [url, setUrl] = useState('https://www.rapidola.com.br')
  const [urlA, setUrlA] = useState('https://www.rapidola.com.br')
  const [isReloadWebView, setReloadWebView] = useState(false);
  const webViewRef = useRef(null)
  const [goback, setGoBack] = useState('home')
  const [history, setHistory] = useState([''])
  const [loading, setLoading] = useState(true)

  function addHistory(value){
    setHistory([...history, value])
    console.log(history[history.length-1])
  }

  useEffect(() => {
    // ---------------- Com Botão- back home-------------------
    if(url === 'https://www.rapidola.com.br/alerts'){
      setGoBack('home')
    }
    if(url === 'https://www.rapidola.com.br/cart'){
      setGoBack('home')
    }
    if(url === 'https://www.rapidola.com.br/explore'){
      setGoBack('home')
    }
    // -----------------Sem o botão----------------
    if(url === 'https://www.rapidola.com.br/'){
      setGoBack('home')
    }
    if(url === 'https://www.rapidola.com.br/my-account'){
      setGoBack('home')
    }
    if (url !== urlA) {
      setReloadWebView(!isReloadWebView);
      setUrlA(url)
      addHistory(url)
    }
  }, [url]);


  // if(loading){
  //   setTimeout(function(){ setLoading(false) }, 2000);
  //   return <Text>Carregando</Text>
  // }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={0}

    >
      <View style={{ flex: 1, marginBottom: 25 }}>
        <WebView
          ref={webViewRef}
          key={isReloadWebView}
          // source={{ uri: url }}
          source={{ uri: url }}
          onNavigationStateChange={(navState) => {
            setUrl(navState.url)
          }}
          cacheEnabled={true}
          limitsNavigationsToAppBoundDomains={false}
          geolocationEnabled={true}
          pullToRefreshEnabled={true}
          sharedCookiesEnabled={true}
          allowsBackForwardNavigationGestures={true}
          originWhitelist={['*']}
          useWebKit={true}
          style={{ flex: 1, marginTop: '10%' }}
        />

        {
          (() => {
            if (goback === 'home' ) {
              return (
                <View style={{ position: 'absolute', right: 0, marginTop: '22%', marginRight: '78%', zIndex: 1, height: '0%', width: 5 }}>
                  <TouchableHighlight style={styles.addButton}
                    underlayColor='#rrggbbaa' onPress={() => setUrl('https://www.rapidola.com.br')}>
                    <Text></Text>
                  </TouchableHighlight>
                </View>
              )
            }
            if (goback === 'produtos' ) {
              return (
                <View style={{ position: 'absolute', right: 0, marginTop: '22%', marginRight: '78%', zIndex: 1, height: '0%', width: 5 }}>
                  <TouchableHighlight style={styles.addButton}
                    underlayColor='#rrggbbaa' onPress={() => setUrl('https://rapidola.com.br/')}>
                    <Text></Text>
                  </TouchableHighlight>
                </View>
              )
            }
          })()
        }
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
  keyboardAvoidingView: {
    flexGrow: 1, flexShrink: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  addButton: {

    borderColor: '#fff',
    borderWidth: 1,
    height: 60,
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