import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import text from "../style/text";
import box from "../style/box";

const inline = StyleSheet.create({
    container: {
        ...box,
        flexDirection: "row"
    },
    label: {
        ...text.font,
        ...text.regular,
        ...text.medium,
    },
    icon: {
        marginLeft: "auto"
    }
})

interface CheckProps {
    checked?: boolean,
    onChange?: any,
    style?: object,
    label?: string
}

const Check = ({ checked = true, onChange, style, label }: CheckProps) => (
    <TouchableOpacity style={{ ...inline.container, ...style }} onPress={() => onChange(!checked)}>
        <Text style={inline.label}>{label}</Text>
        <Image
            style={inline.icon}
            source={
                (checked ?
                    require("../assets/checked.png") :
                    require("../assets/unchecked.png"))} />
    </TouchableOpacity>
);

export default Check;