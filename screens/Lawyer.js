import React, { useEffect, useState } from 'react';
import { Divider, Header, Card, Footer,Icon  } from 'react-native-elements';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
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
            fetch(global.link + '/totalRequests/' + global.MyName)
                .then((res) => res.json())
                .then((responseJson) => {
                    setRequests(JSON.stringify(responseJson).match(numberPattern));
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
                        style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'blue' }]}
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
                <Text style={{ marginTop: 12, color: COLORS.white, ...FONTS.body3 }}>{label}</Text>
            </TouchableOpacity>
        )
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
                    text: "Lawyer Dashboard",
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
                    label="Cases"
                    onPress={() => navigation.navigate("Lw_Cases")}
                />
                <OptionItem
                    icon={icons.event}
                    bgColor={['white', 'white']}
                    label="Requests"

                    onPress={() => navigation.navigate("Lw_Requests")}
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
                    icon={icons.bookmark}
                    bgColor={['white', 'white']}
                    label="Notifications"
                    onPress={() => navigation.navigate("Cl_Reminder")}
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
                    icon={icons.compass}
                    bgColor={['white', 'white']}
                    label="Hearings Date"
                    onPress={() => navigation.navigate("Lw_Hearings")}
                />
            </View>
            {/* <Card containerStyle={{ backgroundColor: "#003f5c" }} wrapperStyle={{}} >
                        <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Total Cases</Card.Title>
                        <Card.Divider />
                        <View
                            style={{
                                position: "relative",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}> {count} </Text>
                        </View>
                    </Card> */}
            {/* <Header
                containerStyle={{ width: 420, marginTop: 20, height: 100, backgroundColor: "black" }}
                centerComponent={{
                    text: "Copyright © 2018-2022 COMSATS.",
                    style: { color: 'white', fontSize: 10 }
                }}
                placement="center"
            /> */}

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
    }
});

export default App;
