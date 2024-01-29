import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButtons';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBuondary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLenght = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name='remove-sharp' size={24} color={'white'} />
                            </PrimaryButton>
                        </View>

                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name='add-sharp' size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove-sharp' size={24} color={'white'} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name='add-sharp' size={24} color={'white'}/>
                            </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
               {/*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)*/}
               <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index} guess={itemData.item} />} keyExtractor={(item) => item}/>
            </View> 
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 54,
        alignItems: 'center'
    },
    InstructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});