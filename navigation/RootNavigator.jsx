import { createNativeStackNavigator } from 'react-native-screens/src/native-stack';
import { TabNavigator } from './TabNavigator';
import { ROUTES } from '../utils/constants';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ROUTES.MAIN_TABS}
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}