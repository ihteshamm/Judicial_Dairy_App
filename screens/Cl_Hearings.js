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
    const ItemView = ({ item }) => {
        //If server response message same as Data Matched
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {"Lawyer : "+item.lawyer}
                {' / Hearing Date :  '}
                {item.hearingDate}
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
        <SafeAreaView style={{ flex: 2 }}>
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
        padding: 20,
    },
    textInputStyle: {
        height:40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
    },
});
export default App;