import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { CatalogueItem } from './components/CatalogueItem';
import { RadioButtonGroup } from './components/RadioButtonGroup';
import { Counter } from './components/Counter';
import { PrimaryButton } from './components/PrimaryButton';
import { colors, icons } from './utils/constants';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const coffeeOptions = [
        { label: 'beans', icon: icons.beans },
        { label: 'ground', icon: icons.ground }
    ];

    const weightOptions = [
        { label: '500g' },
        { label: '100g' }
    ];

    return (
        <View style={styles.container}>
            <CatalogueItem
                image={require("./assets/images/coffee_img_4.png")}
                title="Cinamon coffee"
                price={10} />
            <RadioButtonGroup options={coffeeOptions} />
            <RadioButtonGroup options={weightOptions} />
            <Counter value={1} setValue={() => {}} color={colors.primary} />
            <PrimaryButton name="checkout" onPress={() => {}} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        paddingHorizontal: 16,
        fontFamily: 'Inter_500Medium',
        backgroundColor: colors.lightest
    }
});
