import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { CatalogueItem } from '../components/CatalogueItem';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

const cartItems = [];

export function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
    }
});