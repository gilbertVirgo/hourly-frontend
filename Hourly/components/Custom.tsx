import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import text from "../style/text";
import box from "../style/box";

const styles = StyleSheet.create({
    input: {
        ...box
    },
    buttonContainer: {
        ...box,
        overflow: "visible"
    },
    buttonText: {
        ...text.font,
        ...text.center,
        ...text.medium
    }
});

interface InputProps {
    value?: string,
    onChange?: any,
    placeholder?: string,
    type?: string
}

interface ButtonProps {
    children?: any,
    onPress?: any
}

const Custom = {
    Input: ({ value = "", onChange, placeholder = "", type = "text" }: InputProps) => (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            textContentType={type}
            secureTextEntry={type === "password"} />
    ),
    Button: ({ children, onPress }: ButtonProps) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Custom;