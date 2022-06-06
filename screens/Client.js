import React, { useEffect, useState } from 'react';
import { Divider, Header, Card } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons, COLORS, FONTS, SIZES } from '../constants';
const App = ({ navigation }) => {
    const [count, setCount] = useState('');
    const [Requests, setRequests] = useState('');
    var numberPattern = /\d+/g;
    const CaseCount = () => {
        useEffect(() => {
            fetch(global.link + '/totalCases/' + global.MyName)
                .then((res) => res.json())
                .then((responseJson) => {
                    setCount(JSON.stringify(responseJson).match(numberPattern));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }
    const NewRequests = () => {
        useEffect(() => {
            fetch(global.link + '/Rejected_Request_Message/' + global.MyName)
                .then((res) => res.json())
                .then((responseJson) => {
                    setRequests(JSON.stringify(responseJson));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }
    const OptionItem = ({ bgColor, icon, label, onPress }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={onPress}
            >
                <View style={[styles.shadow, { width: 120, height: 120 }]}>
                    <LinearGradient
                        style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                        colors={bgColor}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <Image
                            source={icon}
                            resizeMode="cover"
                            style={{
                                tintColor: "#003f5c",
                                width: 50,
                                height: 50,
                            }}
                        />
                    </LinearGradient>
                </View>
                <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
            </TouchableOpacity>
        )
    }
    const AcceptingRequest = (Requests) => {
        Alert.alert(global.link + '/deleteRequest_Notification/' + global.MyName)

        fetch(global.link + '/deleteRequest_Notification/' + global.MyName, {
            method: 'DELETE'
        })
            .then(() =>
                navigation.navigate("Client"),
            )
            .catch(error => {
                setErrorMessage(error);
                console.error('There was an error!', error);
            });
    }
    return (
        CaseCount(),
        NewRequests(),
        console.log(Requests),
        <View style={styles.container}>
            {/* <Divider style={{ width: "95%", margin: 10 }} /> */}
            <Header
                containerStyle={{ width: 420, backgroundColor: "black" }}
                centerComponent={{
                    text: "Client Dashboard",
                    style: { color: 'white', fontSize: 20 }
                }}
                placement="center"
            />
            {/* Options */}
            <View style={{
                flexDirection: 'row',
                marginTop: 70, paddingHorizontal: SIZES.base
            }}>
                <OptionItem
                    icon={icons.search}
                    bgColor={['white', 'white']}
                    label="My Cases"
                    onPress={() => navigation.navigate("Cl_Cases")}
                />
                <OptionItem
                    icon={icons.event}
                    bgColor={['white', 'white']}
                    label="Case Request"

                    onPress={() => navigation.navigate("Cl_Lawyer")}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 70, paddingHorizontal: SIZES.base
            }}>
                <OptionItem
                    icon={icons.user}
                    bgColor={['white', 'white']}
                    label="Profile"
                    onPress={() => navigation.navigate("Lw_Profile")}
                />

                <OptionItem
                    icon={icons.compass}
                    bgColor={['white', 'white']}
                    label="My Requests"
                    onPress={() => navigation.navigate("Cl_MyRequests")}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 70, paddingHorizontal: SIZES.base
            }}>
                <OptionItem
                    icon={icons.event}
                    bgColor={['white', 'white']}
                    label="Dictionary"
                    onPress={() => navigation.navigate("Cl_Dictionary")}
                />
                <OptionItem
                    icon={icons.bookmark}
                    bgColor={['white', 'white']}
                    label="Hearing Date"
                    onPress={() => navigation.navigate("Cl_Hearings")}
                />
            </View>
        </View>
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

        elevation: 5,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});

export default App;



