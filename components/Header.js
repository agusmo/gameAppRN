import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"
console.log(Colors)

//componente reutilizable que se muestra en todas las pantallas con props
//estos son los tontos
// le paso title como PROPS ya que cuando llamo a <Header /> le paso title="lo  que quiera"

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
},
headerTitle :{
    color: "black",
    fontSize: 22
} 
})

export default Header