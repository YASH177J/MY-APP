import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from './components/Appheader';
import HomeScreen from './screens/Homescreen';
import ReportScreen from './screens/reportScreen';
import * as Notifications from 'expo-notifications';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>
      <Container/>
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
 ReportScreen: ReportScreen
});


const Container = createAppContainer(navigator);
