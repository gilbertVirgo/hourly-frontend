import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Check from "./Check";

const inline = StyleSheet.create({
    box: {

    }
})

interface BoxProps {
    children: any,
    style: object
}
const Box = ({ children, style }: BoxProps) => (
    <View style={inline.box}>{children}</View>
);

interface InputProps {
    value?: string,
    onTextChange?: any,
    placeholder?: string,
    style?: object
}
Box.Input = ({ value, onTextChange, placeholder, style }: InputProps) => (
    <TextInput
        value={value}
        onTextChange={onTextChange}
        placeholder={placeholder}
        style={{ ...style, ...inline.box }} />
);



export default Box;