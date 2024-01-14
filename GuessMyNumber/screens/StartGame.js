import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButtons';

function StartGameScreen() {
    return ( 
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>

    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#37729c',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 }, 
        shadowRadius: 6,
        shadowOpacity: .75
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#f0f0c9',
        borderBottomWidth: 2,
        color: '#f0f0c9',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})