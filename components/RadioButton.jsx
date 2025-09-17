import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { colors } from '../utils/constants';

export function RadioButton({ label, icon, selectedValue, onSelect }) {
    const isSelected = selectedValue === label;

    return (
        <TouchableOpacity
            onPress={() => onSelect(label)}
            style={[styles.container, isSelected && styles.containerSelected]}>
            {icon && <MaterialDesignIcons
                         name={icon}
                         size={24}
                         color={isSelected ? colors.primary : colors.secondary} />}
            {label && <Text style={[styles.text, isSelected && styles.textSelected]}>
                          {label}
                      </Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 40,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 20,
        backgroundColor: 'transparent'
    },
    containerSelected: {
        borderColor: colors.primary
    },
    text: {
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        color: colors.secondary,
        textTransform: 'capitalize'
    },
    textSelected: {
        color: colors.primary
    }
});