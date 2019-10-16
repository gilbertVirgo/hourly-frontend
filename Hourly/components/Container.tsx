import React from "react";
import { StyleSheet, View } from "react-native";

interface ContainerProps {
    children?: any
}

const Container = ({ children }: ContainerProps) => {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        maxWidth: 500,
        width: "100%",
        padding: 15
    }
})

export default Container;