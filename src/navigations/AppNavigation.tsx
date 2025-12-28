import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../sreens/LoginScreen';
import SignupScreen from '../sreens/SignupScreen';
import HomePage from '../sreens/HomePage';
import NewlyAdded from '../sreens/NewlyAdded';
import PizzaMenu from '../sreens/PizzaMenu';
import Favorite from '../sreens/Favorite';
import FoodBeverage from '../sreens/FoodBeverage';
import Settings from '../sreens/Settings';
import SplashScreen from '../sreens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="NewlyAdded" component={NewlyAdded} />
        <Stack.Screen name="PizzaMenu" component={PizzaMenu} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="FoodBeverage" component={FoodBeverage} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
