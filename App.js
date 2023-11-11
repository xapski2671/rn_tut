import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { useState } from "react"

export default function App() {
	const [name, setName] = useState("shaun")
	const [person, setPerson] = useState({ name: "mario", age: 40 })

	const pressHandler = () => {
		// name == "shaun" ? setName("xapski") : setName("shaun")
		setName("xapski")
		setPerson({ name: "luigi", age: 45 })
	}

	return (
		<View style={s.container}>
			<Text>My name is {name}</Text>
			<Text>
				His name is {person.name} and his age is {person.age}
			</Text>
			<View style={s.button_container}>
				<Button title="update state" onPress={pressHandler} />
			</View>
			<StatusBar style="auto" />
		</View>
	)
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button_container: {
		marginTop: 20,
	},
})
