import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
const App = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const lawyer = global.MyReviewLawyerName;
    var email;
    var name;
    var description;
    useEffect(() => {
        fetch(global.link + '/getreviews/'+lawyer)
        .then((res) => res.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
                console.log(responseJson);
            })
            .then(result => {
                ({
                    item: result
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const ItemView = ({ item }) => {
        //If server response message same as Data Matched
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.title}
                {' : '}
                {item.ratings}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: 'black',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        // alert(' Name : ' + item.name + '\nEmail : ' + item.email + '\nPhone : ' + item.contact
        // + '\nAddress : ' + item.address);
        Alert.alert(
            "Lawyer Details",
            "Lawyer : " + item.lawyer + "\nTitle : " + item.title + "\nDescription : " + item.description +
            "\nRatings : " + item.ratings,
            [
                { text: "Reviews", 
                onPress:() => Reviews(item)
             },
                {
                    text: "Back",
                    style: "cancel"
                },
                { text: "Send Request", onPress: () => SendRequest(item) }
            ],
        );
    };
    const SendRequest = (item) => {
        Alert.prompt(
            "Send Request",
            "Describle Your Case here!",
            [
                {
                    text: "Back",
                    onPress: () => console.log("Cancel Pressed"),
                },
                {
                    text: "Send",
                    onPress: password => BackendCaseSend(item, password),

                }
            ],

        );
    }
    const Reviews = (item) => {
        global.MyReviewLawyerName = item.name;
        navigation.navigate("ViewReviews")

    }

    const BackendCaseSend = (item, password) => {
        name = item.name;
        description = password;
        email = item.email;
        fetch(global.link + "/send-CaseRequest", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                client,
                description
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`Request Send successfuly`)
            })
            .catch(err => {
                Alert.alert("someting went wrong")
            })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <View style={styles.container}>
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
    },
});
export default App;