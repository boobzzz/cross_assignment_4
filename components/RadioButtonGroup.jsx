import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from './RadioButton';

export function RadioButtonGroup({ options }) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <RadioButton
                    key={option.label}
                    label={option.label}
                    icon={option.icon}
                    selectedValue={selectedOption}
                    onSelect={setSelectedOption}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    }
});
