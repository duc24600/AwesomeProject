import { StyleSheet, Text, View } from "react-native";

function Home() {
    return (
        <View style={style.container}>
            <Text>Settings Screen</Text>
        </View>
    );s
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default Home;