import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const App = () => {
  useEffect(() => {
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
      console.log(result);
    });
    function requererLocation() {
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        console.log(result);
      });
    }
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            requererLocation();
            // console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            requererLocation();
            // console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            // console.log('The permission is limited: some actions are possible');
            requererLocation();
            break;
          case RESULTS.GRANTED:
            break;
          case RESULTS.BLOCKED:
            // console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  }, []);

  const [url, setUrl] = useState('https://rapidola.com.br');
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: url}}
        cacheEnabled={true}
        limitsNavigationsToAppBoundDomains={false}
        geolocationEnabled={true}
        pullToRefreshEnabled={true}
        sharedCookiesEnabled={true}
        allowsBackForwardNavigationGestures={true}
        javaScriptEnabled={true}
        allowUniversalAccessFromFileURLs={true}
        javaScriptCanOpenWindowsAutomatically={true}
        useWebKit={true}
        style={styles.content}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
    marginTop: 35,
  },
});

export default App;
