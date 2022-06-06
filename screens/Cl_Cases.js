import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
const App = () => {   
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
         fetch(global.link + '/getClientCases/'+global.MyName)
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
                    const itemData = item.lawyer
                        ? item.lawyer.toUpperCase()
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
                {item.lawyer}
                {' : '}
                {item.title}
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
        alert(' Title : ' + item.title+ '\nType : ' + item.type
        + '\nClient : ' + item.client + '\nCourt : ' + item.court+ '\nHearing : ' + 
        item.hearingDate+ '\nDescription : ' + item.description+
        '\nstatus : ' + item.status);
        // alert(' Name : ' + item.name+ '\nID : ' + item.id +'\nLawyer : ' + item.lawyer
        // + '\nClient : ' + item.client + '\nRemarks : ' + item.remarks+ '\nNext Hearing : ' + 
        // item.nexthearing+ '\nNext Hearing Points : ' + item.nexthearingpints+ '\nProofs : ' + item.proofs+
        // '\nCourt : ' + item.court+ '\nDescription : ' + item.description);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Case!"
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