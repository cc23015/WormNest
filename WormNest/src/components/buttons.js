import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ButtonComponent = () => {
    return (
        <View style={buttons.container}>
            <TouchableOpacity style={buttons.darkButton} onPress={console.log('login')}>
                <Text style={buttons.textButton}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttons.lightButton} onPress={console.log('cadastro')}>
                <Text style={buttons.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const buttons = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: height * 0.1, // Altura dos botões em relação ao final da tela (10% da tela)
        alignItems: 'center',
        left: width * 0.065,
        right: width * 0.065,
    },
    darkButton: {
        backgroundColor: "#273115", 
        padding: 10,
        marginBottom: 10,
        borderRadius: 40,
        width: 200,  // Tamanho fixo do botão
        alignItems: 'center',
    },
    lightButton: {
        backgroundColor: "#556B2F",
        padding: 10,
        borderRadius: 40,
        width: 200,  // Tamanho fixo do botão
        alignItems: 'center',
    },
    textButton: {
        fontFamily: 'Halant-Regular',
        color: "#F5F5DC",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonComponent;
