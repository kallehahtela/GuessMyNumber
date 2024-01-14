import { View, Text, Pressable, StyleSheet  } from 'react-native';

function PrimaryButton({children}) {
    function pressHandler() {
        console.log('Pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: '#0c3f64'}}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

       
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#124e78',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        textAlign: 'center',
        color: '#f0f0c9'
    },
    pressed: {
        opacity: 0.75
    }
});