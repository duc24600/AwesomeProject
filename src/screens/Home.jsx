import { StyleSheet, Text, View } from "react-native/types";

function Home() {
    return (
        <View style={style.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default Home;