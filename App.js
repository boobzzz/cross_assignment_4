import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
