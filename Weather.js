import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: [
            "#03001e",
            "#7303c0",
            "#ec38bc",
            "#fdeff9",]
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#007991", "#78ffd6"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#9CECFB","#65C7F7","#0052D4"]
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#E0EAFC","#CFDEF3"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#22c1c3","#fdbb2d"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#feac5e","#c779d0","#4bc0c8"]
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F8CDDA", "#1D2B64"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#134e5e","#71b280"]
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#3d7eaa","#ffe47a"]
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName}
                color="white"/>
                
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>
            </View>
        </LinearGradient>
        
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear","Clouds","Haze","Mist","Dust"]]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize:36,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})