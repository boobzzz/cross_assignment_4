import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { colors, icons } from '../utils/constants';

export function Counter({ value, setValue, color }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialDesignIcons
                    name={icons.minus}
                    size={28}
                    color={color} />
            </TouchableOpacity>
            <Text style={[styles.text, color === colors.lightest && styles.textAlt]}>
                {value}
            </Text>
            <TouchableOpacity>
                <MaterialDesignIcons
                    name={icons.plus}
                    size={28}
                    color={color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 40,
        backgroundColor: 'transparent'
    },
    text: {
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        color: colors.primary,
        textTransform: 'capitalize'
    },
    textAlt: {
        color: colors.lightest
    }
});