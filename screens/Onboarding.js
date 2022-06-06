
import React, { useCallback } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Alert, Button, Linking } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { images, COLORS, FONTS, SIZES } from '../constants';


const supportedURL = "https://google.com";
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
            await Linking.openURL(url);
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};
const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={images.mainScreenLogo}
                    resizeMode="contain"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2, color: "#fb5b5a" }}> Judicial Dairy</Text>
                    <Text style={{ ...FONTS.h2, color: "#fb5b5a" }}>Clients & Lawyers</Text>
                    <Text style={{ color: "white", marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Android App for Juducial Dairy Web app where Clients can use its all features while Lawyer can get only notifications</Text>
                </View>
                <Text> </Text>
                {/* <ActivityIndicator size="large" color="white" /> */}
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() =>  navigation.navigate("LoginAs")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}> Get Start !</Text>

                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View >
            <Text style={{ color: COLORS.white, justifyContent: 'center' }}>                                            OR</Text>
                <OpenURLButton url={supportedURL}>Open our website</OpenURLButton>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,


    }
});

export default Onboarding;
