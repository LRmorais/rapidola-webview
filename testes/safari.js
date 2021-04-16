import React from "react";
import SafariView from "react-native-safari-view";
import { View, Text } from 'react-native';


const App = () => {

  function pressHandler() {
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "https://rapidola.com.br",
        readerMode: true,
        fromBottom: true,
        barTintColor : "#000"  // opcional 

      }))
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
      });
  }
pressHandler()

  return (
    <View>
      <Text>
        Ok
      </Text>
    </View>

  );
};


export default App;