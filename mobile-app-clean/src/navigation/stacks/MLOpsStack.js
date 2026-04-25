import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MLOpsPipelineScreen from '../../screens/mlops/MLOpsPipelineScreen';
import ModelRetrainingScreen from '../../screens/mlops/ModelRetrainingScreen';
import GitHubActionsScreen from '../../screens/mlops/GitHubActionsScreen';
import DockerHealthScreen from '../../screens/mlops/DockerHealthScreen';

const Stack = createNativeStackNavigator();
export default function MLOpsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MLOpsPipeline" component={MLOpsPipelineScreen} />
      <Stack.Screen name="ModelRetraining" component={ModelRetrainingScreen} />
      <Stack.Screen name="GitHubActions" component={GitHubActionsScreen} />
      <Stack.Screen name="DockerHealth" component={DockerHealthScreen} />
    </Stack.Navigator>
  );
}
