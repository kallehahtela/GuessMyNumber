import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButtons';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function generateRandomNumberBetween(min, max, exlcude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exlcude) {
        return generateRandomNumberBetween(min, max, exlcude);
    } else {
        return rndNum;
    }
}

let minBuondary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver }){
    const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) { // direction --> 'lower', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(`Don't lie`, 'You know that this is wrong...', [{text: 'Sorry', style: 'cancel'}, ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBuondary = currentGuess + 1;
        }
        console.log(minBuondary, maxBoundary);
        const newRndNumber = generateRandomNumberBetween(minBuondary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (    
        <View style={styles.screen}>
            <Title style={styles.title}>Opponet's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
               {/* LOG ROUNDS */} 
            </View> 
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 54,
    },
    InstructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});