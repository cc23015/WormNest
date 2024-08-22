import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';

export const Responsive = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center' 
})


export const NativeScreen = StyleSheet.create({
    safeAreaView: 
    {
        flex: 1,
        backgroundColor: "#F5F5DC",
    },

    scrollView: 
    {
        flex: 1,
        backgroundColor: "#F5F5DC",
    },

    View: 
    {
        flexDirection: "row",
        backgroundColor: "#F5F5DC",
        paddingBottom: 14,
        paddingLeft: 34,
        paddingRight: 15,
        marginBottom: 58,

    }
});

export const Button = StyleSheet.create({
    darkButton:{
        position: absolute,
        width: 195,
        height: 45,
        left: 21,
        top: 11,
        backgroundColor: "#273115",
        borderRadius: 40,
    },

    lightButton:{
        position: absolute,
        width: 195,
        height: 45,
        left: 21,
        top: 11,
        backgroundColor: "#556B2F",
        borderRadius: 40,
    },

    textButton:{
        position: absolute,
        width: 102,
        height: 32,
        /*left: 67, estou insegura com isso, acho que deveria colocar dentro de um componente, mas n lembro como faz skkskskssk
        top: 18,*/
        fontFamily: 'Halant',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 32,
        color: "#F5F5DC",
    },
})

export const text = StyleSheet.create({
    bigText:{
        position: absolute,
        width: 327,
        height: 63,
        left: 32,
        top: 342,

        fontFamily: 'Halant',
        fontStyle: normal,
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 32,
        textAling: 'center',
        letterSpacing: 0.2,
        color: "#273115",
    },

    littleText:{
        position: absolute,
        width: 327,
        height: 24,
        left: 32,
        top: 405,
        fontFamily: 'Halant',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: "#273115"
    },
})

