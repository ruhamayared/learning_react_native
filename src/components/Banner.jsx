import { StyleSheet, View, Text } from 'react-native'


const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>OMDB API MOVIE SEARCH</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: "black",
        flex: 1,
        maxHeight: 300
    },
    bannerText: {
        color: "white",
        fontSize: 48,
        textAlign: "center"
    },
})

export default Banner