import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NativeScreen, text } from '../styles/styles';
import ButtonComponent from '../components/buttons';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={NativeScreen.safeAreaView}>
            <ScrollView contentContainerStyle={NativeScreen.View}>
                <Text style={text.bigText}>BEM VINDO AO SEU NINHO DE LEITURA!</Text>
                <Text style={text.littleText}>Resenhe, compre e troque novas histórias!</Text>
                
                <ButtonComponent/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Welcome;
