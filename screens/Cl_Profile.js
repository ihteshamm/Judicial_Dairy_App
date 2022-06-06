import * as React from 'react';
import { images, icons, SIZES, COLORS, FONTS } from '../constants';
import { Tab, Divider, SearchBar, Header, Icon, Card, ListItem, Avatar } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
var NameUser;
var UserEmail;
var UserContact;
var UserAddress;
var UserPassword;

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    
//   componentDidMount(){
//     this.UserSignupFunction();
// }
    render() {
        const { UserName } = this.state;
            console.log("UserName");
            const { items } = this.state;
    
            fetch('http://192.168.10.9:3210/Users', {
            })
              .then(res => res.json())
              .then(result => {
                this.setState({
                  items: result
                });
                console.log(result);
            // If server response message same as Data Matched
            var i = 0;
            while (result.length > i) {
              if (result[i].Email == global.MyEmial) {
                if (result[i].Password == global.MyPass ) {
                  if (result[i].User_Type == "Lawyer") {
                    console.log("Successfully Login Lawyer");
                    break;
                  } else if (result[i].User_Type == "Client") {
                    console.log("Successfully Login Client");
                    NameUser = result[i].Name;
                    UserEmail = result[i].Email;
                    UserContact = result[i].Number;
                    UserAddress = result[i].Address;
                    UserPassword = result[i].Password;
                    break;
                  }
                } else {
                  i++;
                }
              }
              else {
                i++;
              }
            }
        });
    
        return (
            
            <View style={styles.container}>
                <Divider style={{ width: "50%", margin: -5 }} />                
                <Card containerStyle={{ marginTop: 150, backgroundColor: "#003f5c" }} wrapperStyle={{}} >
    
                    <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Profile</Card.Title>

                    <Card.Divider />
                    <View >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Name  :  {(NameUser)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Email  :  {(UserEmail)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Contact No.  : {(UserContact)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Address : {(UserAddress)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Password : {(UserPassword)}</Text>
                    </View>
                </Card>

            </View>
        );
    }
}

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