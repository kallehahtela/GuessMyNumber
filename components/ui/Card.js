import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.inputContainer}>{children}</View> 
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 }, 
        shadowRadius: 6,
        shadowOpacity: .75
    },
});