import React, { useState, useRef } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const url = 'https://rapidola.com.br/'
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={styles.container}
    >
      <WebView
        automaticallyAdjustContentInsets={false}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        source={{ uri: url }}
        style={{ flex: 1, marginTop: 20 }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color='black'
            size='large'
            style={{ justifyContent: 'center' }}
          />
        )}
    
      />
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;