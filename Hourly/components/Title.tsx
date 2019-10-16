import React from "react";
import { Text, StyleSheet } from "react-native";

import text from "../style/text";
import color from "../style/color";

const styles = StyleSheet.create({
    title: {
        ...text.large,
        ...text.thin,
        ...text.center,
        ...text.font,
        color: color.muted,
        marginBottom: 60
    }
})

interface TitleProps {
    children?: string
}

const Title = ({ children }: TitleProps) => (
    <Text style={styles.title}>{children}</Text>
);

export default Title;