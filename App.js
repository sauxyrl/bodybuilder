
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AIChatbotScreen from './screens/AIChatbotScreen';
import WorkoutTrackerScreen from './screens/WorkoutTrackerScreen';
import NutritionTrackerScreen from './screens/NutritionTrackerScreen';
import CompetitionPreparationScreen from './screens/CompetitionPreparationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WorkoutTracker">
          <Stack.Screen name="AIChatbot" component={AIChatbotScreen} />
          <Stack.Screen name="WorkoutTracker" component={WorkoutTrackerScreen} />
          <Stack.Screen name="NutritionTracker" component={NutritionTrackerScreen} />
          <Stack.Screen name="CompetitionPreparation" component={CompetitionPreparationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
