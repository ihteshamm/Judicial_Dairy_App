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
    var client;
    var lawyer;
    var type;
    var description;
    var status;
    useEffect(() => {
        fetch(global.link + '/GetLawyerList/')
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
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        //If server response message same as Data Matched
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.name}
                {' : '}
                {item.address}
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
            "Name : " + item.name + "\nType : " + item.type+ "\nFee : " + item.fee+ "\nEmail : " + item.email + "\nAddress : " + item.address +
            "\nPhone : " + item.contact +
            "\nGender : " + item.gender + "\nCourt : " + item.court + "\nExperiance : " + item.experiance,
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
                    onPress: descriptions => BackendCaseSend(item, descriptions),

                }
            ],

        );
    }
    const Reviews = (item) => {
        global.MyReviewLawyerName = item.name;
        navigation.navigate("ViewReviews")

    }

    const BackendCaseSend = (item, descriptions) => {
        client = global.MyName;
        type = item.type;
        lawyer = item.name;
        description = descriptions;
        status="pending";
        fetch(global.link + "/send-CaseRequest", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client,
                type,
                lawyer,
                description,
                status
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
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Lawyers!"
                />
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