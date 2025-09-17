import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/constants';

export function PrimaryButton({ name, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 48,
        borderRadius: 12,
        backgroundColor: colors.primary
    },
    text: {
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        color: colors.lightest,
        textTransform: 'capitalize'
    }
});