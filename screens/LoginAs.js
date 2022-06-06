
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

  const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}

const LoginAs = ({ navigation }) => {
    //const { navigate } = this.props.navigation;  
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ flex: 2 }}>
                <Image
                    source={images.mainScreen}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '60%',
                    }}
                />
                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>

                <View
                    style={[{
                        position: 'absolute',
                        bottom: "75%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: "#465881"
                    }, styles.shadow]}
                >
                    <TouchableOpacity 
                        onPress={global.MyType= "Lawyer"}
                        onPress={() => navigation.navigate("LoginLawyer")}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.shadow}>
                                <Image
                                    source={images.laweyer}
                                    resizeMode="cover"
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                />
                            </View>
                            <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                                <Text style={{ ...FONTS.h3 }}>Lawyer </Text>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Login as Lawyer.</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: SIZES.radius }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                                As A lawyer:
                        </Text>
                            <Text style={{ color: "#003f5c", ...FONTS.body3 }}>   You can View Case Details </Text>
                            <Text style={{ color: "#003f5c", ...FONTS.body3 }}>   You can View get notifications </Text>
                            <Text style={{ color: "#003f5c", ...FONTS.body3 }}>   You can View Profile </Text>

                        </View>
                    </TouchableOpacity>

                </View>
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "05%",
                        right: "05%",
                        borderRadius: 20,
                        padding: SIZES.padding,
                        backgroundColor: "#465881"
                    }, styles.shadow]}
                >
                    <TouchableOpacity 
                        onPress={global.MyType="Client"}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.shadow}>
                                <Image
                                    source={images.clint}
                                    resizeMode="cover"
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                />
                            </View>
                            <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                                <Text style={{ ...FONTS.h3 }}>Client </Text>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Login as Client.</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: SIZES.radius }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                                As A Client:
                        </Text>
                            <Text style={{ color: "#003f5c", ...FONTS.body3 }}>   You can View Case Details </Text>
                            <Text style={{ color: "#003f5c", ...FONTS.body3 }}>   You can View Dictionary </Text>

                        </View>
                        </TouchableOpacity>
                    </View>


            </View>

            {/* Footer */}
            <View style={{ flex: 0, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={['#edf0fc', '#d6dfff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding }}>
                            <Text>No Account</Text>
                            <Text>Register Here  --</Text>

                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <LinearGradient
                                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={['#46aeff', '#5884ff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f5c"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default LoginAs;
