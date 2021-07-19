import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen';
import { NativeBaseProvider } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
         <TabScreen/>

      </NativeBaseProvider>
     
    );
  }
}