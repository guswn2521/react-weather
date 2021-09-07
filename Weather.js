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
            "#fdeff9",],
        title:"Thunderstorm",
        subtitle:"천둥번개!"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#007991", "#78ffd6"],
        title:"Drizzle",
        subtitle:'이슬비내려'
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#9CECFB","#65C7F7","#0052D4"],
        title:"Rain",
        subtitle:"비내리는 오늘밤"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#E0EAFC","#1D2B64"],
        title:"Snow",
        subtitle:"눈이 와요!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#22c1c3","#fdbb2d"],
        title:"Clear",
        subtitle:"맑음. 쨍쨍함."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#feac5e","#c779d0","#4bc0c8"],
        title: "Cloud",
        subtitle: "no sunshine its grey"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F8CDDA", "#1D2B64"],
        title: "Haze",
        subtitle: "A little bit of fog with strong sunshine"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#134e5e","#71b280"],
        title:"Mist",
        subtitle:"촉촉한 날씨, 화장이 잘먹어요"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#3d7eaa","#ffe47a"],
        title:"Dust",
        subtitle:"마스크필수, 황사가 왔어요"
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
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
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
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10

    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
       alignItems:"flex-start",
       paddingHorizontal:10
        
    }
})