import React from "react";
import { Linking, View, Text } from 'react-native'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'


const App = () => {

  async function openLink(){
    try {
      const url = 'https://www.rapidola.com.br'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: 'white',
          preferredControlTintColor: 'black',
          readerMode: true,
          animated: true,
          // modalPresentationStyle: 'fullScreen',
          // modalTransitionStyle: 'coverVertical',
          // modalEnabled: true,
          enableBarCollapsing: true,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          
        })
        App()
      }
      else Linking.openURL(url)
    } catch (error) {
      console.log('ok')
    }
  }

openLink()
  return (
    <View>
      <Text>
        Olá mundo
      </Text>
    </View>

  );
};


export default App;