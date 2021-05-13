import React, {useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';

import WebView from 'react-native-webview';


const App = () => {
  const [url, setUrl] = useState('https://www.rapidola.com.br/')
  const webViewRef = useRef();

  useEffect(() => {
    setTimeout(function(){ webViewRef.current.reload() }, 50);
  }, [url]);

  return (

      <View style={{ flex: 1, marginBottom: 20, marginTop: 20 }}>
        <WebView
          ref={(ref) => webViewRef.current = ref} 
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
});

export default App;