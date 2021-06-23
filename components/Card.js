import React from "react"
import {View, Text, StyleSheet} from "react-native"
//React.fragment == <>
//combino estilos de inputcomtainer con props.style
//props son los tags dentro de card cuando renderizamos
//children es una prop de react que referencia a todo el contenido q ue esta dentro de donde llamo a card o sea startfamescreen
const Card = props => {
    
return (
    <View style={{...styles.inputCard, ...props.style}}>
        {props.children}

    </View>

)
}

const styles = StyleSheet.create({
    //cardcontainer en video
    inputContainer: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white"
    },
})

export default Card