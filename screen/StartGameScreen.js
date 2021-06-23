import React from "react"
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import Card from "../components/Card"
import Colors from "../constants/colors"

const StartGameScreen = () => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Elegí un número</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" onPress={()=>{} }  color={Colors.accent}></Button>
                    <Button title="Confirmar" onPress={()=>{}} color={Colors.primary}></Button>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
screen : {
    flex: 1,
    padding: 10,
    alignItems: "center"
},
title: {
    fontSize: 20,
    marginVertical: 10
}, 
inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white"
},
buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
}
})

export default StartGameScreen