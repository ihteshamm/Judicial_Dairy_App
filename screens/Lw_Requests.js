import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    Alert
} from 'react-native';
const App = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    var title
    var type;
    var code;
    var client;
    var lawyer;
    var court;
    var hearingDate;
    var description;
    var status;
    var MY_AcceptID;
    var Requesttype;
    var Requestclient;
    var Requestlawyer;
    var Requestdescription;
    var Requeststatus;
    useEffect(() => {
        fetch(global.link + '/getcasesRequestLawyer/' + global.MyName)
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
                console.log("Error!");
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
                        ? item.client.toUpperCase()
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
                {item.type}
                {' : '}
                {item.description}
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
        Alert.alert(
            "Request Details",
            "Client Name : " + item.client + "\nCase Type : " + item.type
            + "\nCase Description : " + item.description,
            [
                {
                    text: "Back",
                    style: "cancel"
                },
                { text: "Accept Case", onPress: () => AcceptingRequest(item) }

            ]
        );
    };
    const AcceptingRequest = (item) => {
        Alert.alert(
            "Are you sure!",
            "You want to accept case",
            [
                {
                    text: "Reject",
                    onPress: () => Reject(item),
                },
                {
                    text: "Accept",
                    onPress: () => Accept(item),
                }
            ],

        );
    }
    const Reject = (item) => {
        client = item.client;
        type = item.type;
        lawyer = global.MyName;
        description = item.description;
        status = "Rejected";
        fetch(global.link + '/deleteRequest/' + item._id, {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client,
                type,
                lawyer,
                description,
                status,
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`Request Rejected`)
            })
            .catch(err => {
                Alert.alert("someting went wrong")
            })
    }

    const back = () => {
        Alert.alert(`Request Remove successfuly`);
    }
    const ChangeStatusAfterAccept = (item) => {
        Requesttype = item.type
        Requestclient = item.client;
        Requestlawyer = global.MyName;
        Requestdescription = item.description;
        Requeststatus = "Accepted";
        fetch(global.link + '/AcceptCaseRequest/' +item._id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Requestclient,
                Requesttype,
                Requestlawyer,
                Requestdescription,
                Requeststatus,
            })
        })
            .then(() =>
                navigation.navigate("Lawyer"),
            )
            .catch(error => {
                setErrorMessage(error);
                console.error('There was an error!', error);
            });

    }
    const Accept = (item) => {
        title = "--"
        type = item.type
        code = "--";
        client = item.client;
        lawyer = global.MyName;
        court = "--";
        hearingDate = "--";
        description = item.description;
        status = true;
        fetch(global.link + "/send-Case/" + item._id, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                type,
                code,
                client,
                lawyer,
                court,
                hearingDate,
                description,
                status,
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`Request Accepted`)
                ChangeStatusAfterAccept(item);
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
                    placeholder="Search Requests!"
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