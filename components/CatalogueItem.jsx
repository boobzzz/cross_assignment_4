import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { COLORS, FONTS } from '../utils/constants';

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
        borderColor: COLORS.SECONDARY,
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
        fontFamily: FONTS.BOLD,
        fontSize: 16,
        color: COLORS.PRIMARY
    },
    price: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
        color: COLORS.PRIMARY
    }
});