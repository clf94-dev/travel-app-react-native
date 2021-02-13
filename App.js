
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import SettingsScreen from './screens/SettingsScreen'
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
tabBarIcon: ({focused, color, size}) => {
  let iconName;

  if(route.name === 'Home'){
    iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
  } else if(route.name ==='Search') {
    iconName = focused ? 'search-circle': 'search';
  }else if(route.name === 'Settings'){
iconName = focused ? 'ios-list-box': 'ios-list';
  }
  return <Ionicons name={iconName} size={size} color={color} />
},
  })}
  tabBarOptions={{
    activeTintColor: 'white',
    inactiveTintColor: 'green',
   /* showLabel: false,*/
    style: { width: '90%',margin: 20, height:80,backgroundColor: 'lightgreen',borderWidth:1,borderColor: 'lightgreen' , borderRadius:'10px', paddingTop:10}
  }}
  >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
