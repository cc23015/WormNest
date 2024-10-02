import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export const NativeScreen = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#F5F5DC",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#F5F5DC",
    },
    View: {
        flex: 1,
        backgroundColor: "#F5F5DC",
        paddingBottom: width * 0.2,
        paddingRight: width * 0.1,
        marginBottom: 58,
    }
});

export const text = StyleSheet.create({
    bigText: {
        fontFamily: 'Halant-Regular',
        fontWeight: '700', 
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 32,
        textAlign: 'center', 
        letterSpacing: 0.2,
        color: "#273115",
        top: width * 1,
        left: height * 0.03,
    },

    littleText: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
        color: "#273115",
        top: width * 1.01,
        left: 24,

    },
});
