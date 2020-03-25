import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Heading, Paragraph } from "./components/core";
import Panel from "./components/Panel";

import * as Font from "expo-font";

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);

	React.useEffect(() => {
		(async function() {
			await Font.loadAsync({
				"Gill Sans": require("./assets/fonts/GillSans-Light.ttf"),
				Alata: require("./assets/fonts/Alata-Regular.ttf")
			});

			setFontsLoaded(true);
		})();
	}, []);

	return (
		<View>
			{fontsLoaded && (
				<Panel>
					<Heading>Psalm 63:4</Heading>
					<Paragraph>My soul faints for you.</Paragraph>
				</Panel>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
