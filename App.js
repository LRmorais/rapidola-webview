import React, {useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';
import WebView from 'react-native-webview';
import {request,check, PERMISSIONS, RESULTS} from 'react-native-permissions';



const App = () => {
  request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then((result) => {
    console.log(result)
  });

  request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
    console.log(result)
  });
  
  check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });

  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });
  


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