import React, {useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import WebView from 'react-native-webview';


const App = () => {
  const [url, setUrl] = useState('https://www.rapidola.com.br/')
  const [urlA, setUrlA] = useState('https://www.rapidola.com.br/')
  const [loading, setLoading] = useState(false)
  const webViewRef = useRef(null)

  // if(urlA != url){

  // }

  // if(loading){
  //   setTimeout(function(){ setLoading(false) }, 2000);
  //   return <Text>Carregando</Text>
  // }

  return (

      <View style={{ flex: 1, marginBottom: 25 }}>
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          // onNavigationStateChange={(navState) => {
          //   setUrlA(navState.url)
          //   if(url != urlA){
          //     setLoading(true)
          //   }
            
          // }}
          cacheEnabled={true}
          limitsNavigationsToAppBoundDomains={false}
          geolocationEnabled={true}
          pullToRefreshEnabled={true}
          sharedCookiesEnabled={true}
          allowsBackForwardNavigationGestures={true}
          useWebKit={false}
          style={styles.content}
        />

      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  content: {
    flex: 1,
    marginTop: '10%',
  },
  keyboardAvoidingView: {
    flexGrow: 1, flexShrink: 1
  },

});

export default App;