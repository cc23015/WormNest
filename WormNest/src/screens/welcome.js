import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { NativeScreen } from '../styles/styles';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={NativeScreen.safeAreaView}>
            <ScrollView style={NativeScreen.scrollView}>
                <View style={NativeScreen.View}></View>
            </ScrollView>
        </SafeAreaView>
    );
}




export default Welcome;
