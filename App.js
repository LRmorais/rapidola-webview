import React, {useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';
import WebView from 'react-native-webview';
import {request,check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';


const App = () => {

  useEffect(() => {
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then((result) => {
      console.log(result)
    });
    function requererLocation(){
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
        console.log(result)
      });
    }
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        requererLocation()
      // console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        requererLocation()
      // console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        // console.log('The permission is limited: some actions are possible');
        requererLocation()
        break;
      case RESULTS.GRANTED:
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 1500000, maximumAge: 1000000}
      );
        break;
      case RESULTS.BLOCKED:
        // console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });
  },[]);



  
  const [url, setUrl] = useState("https://www.rapidola.com.br/")
  const webViewRef = useRef();

  const INJECTED_JAVASCRIPT = `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDPbhTDRQ2WCCMkkL9S3KhOBozOVMhBMYQ&callback=loaderCB01621369257228&libraries=places&v=3&language=en"></script>`;

  var string = url.toString();
  var result = string.includes('/checkout');
  var time = 100
  

  useEffect(() => {
    if(result === true){
      time = 5000000;
    }
    setTimeout(function(){webViewRef.current.reload() }, time);
  }, [url]);


  return (

      <View style={{ flex: 1, marginBottom: 32, marginTop: 32 }}>
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
          javaScriptEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          javaScriptCanOpenWindowsAutomatically={true}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          useWebKit={true}
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