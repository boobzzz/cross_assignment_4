import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import { colors } from '../utils/constants';

export function CatalogueItem({ image, title, price }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.price}>
                    {`${price.toFixed(2)} €`}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 12,
        backgroundColor: 'transparent',
        overflow: 'hidden'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover'
    },
    text: {
        padding: 8,
        gap: 8
    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: colors.primary
    },
    price: {
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        color: colors.primary
    }
});