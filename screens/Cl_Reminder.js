import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { images, icons, SIZES, COLORS, FONTS } from '../constants';
import { Tab, Divider, SearchBar, Header, Icon, Card, ListItem, Avatar } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const App = ({ navigation }) => {
    const [count, setCount] = useState('');
    const [Requests, setRequests] = useState('');
    const [Reviews, setReviews] = useState('');
    const [Lawyers, setLawyers] = useState('');
    const [Clients, setClients] = useState('');
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
    const ClientsCount = () => {
        useEffect(() => {
            fetch(global.link + '/ClientsCount')
                .then((res) => res.json())
                .then((responseJson) => {
                    setClients(JSON.stringify(responseJson).match(numberPattern));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }
    const LawyersCount = () => {
        useEffect(() => {
            fetch(global.link + '/LawyersCount')
                .then((res) => res.json())
                .then((responseJson) => {
                    setLawyers(JSON.stringify(responseJson).match(numberPattern));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }

    const NewRequests = () => {
        useEffect(() => {
            fetch(global.link + '/newRequests/' + global.MyName)
                .then((res) => res.json())
                .then((responseJson) => {
                    setRequests(JSON.stringify(responseJson).match(numberPattern));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }
    const ReviewsCount = () => {
        useEffect(() => {
            fetch(global.link + '/ReviewsCount/' + global.MyName)
                .then((res) => res.json())
                .then((responseJson) => {
                    setReviews(JSON.stringify(responseJson).match(numberPattern));
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);
    }

    return (
        CaseCount(),
        NewRequests(),
        ReviewsCount(),
        LawyersCount(),
        ClientsCount(),
        <View style={styles.container}>
            <Divider style={{ width: "50%", margin: -5 }} />
            <Card containerStyle={{ marginTop: 60, backgroundColor: "#003f5c" }} wrapperStyle={{}} >
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
            </Card>
            <Card containerStyle={{ backgroundColor: "#003f5c" }} wrapperStyle={{}} >
                <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Case Requests</Card.Title>
                <Card.Divider />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}> {Requests} </Text>
                </View>
            </Card>

            <Card containerStyle={{ backgroundColor: "#003f5c" }} wrapperStyle={{}} >
                <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Totel Reviews</Card.Title>
                <Card.Divider />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}> {Reviews} </Text>
                </View>
            </Card>
            <Card containerStyle={{ backgroundColor: "#003f5c" }} wrapperStyle={{}} >
                <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Total Lawyers in Judicial Dairy</Card.Title>
                <Card.Divider />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}> {Lawyers}</Text>
                </View>
            </Card>
            <Card containerStyle={{ backgroundColor: "#003f5c" }} wrapperStyle={{}} >
                <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Total Clients in Judicial Dairy</Card.Title>
                <Card.Divider />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}> {Clients} </Text>
                </View>
            </Card>

        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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