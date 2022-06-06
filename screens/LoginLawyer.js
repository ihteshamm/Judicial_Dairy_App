import React, { Component } from 'react';
import {
  StyleSheet, TextInput, View, Alert, Button,
  Text, TouchableOpacity
} from 'react-native';

// Creating Login Activity.
//global.MyEmial ;
//global.MyPass  ;
//global.MyID  ;
var lg = "no";
var MyType = global.MyType;
//global.MyType;
class LoginLawyer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      UserEmail: '',
      UserPassword: ''

    }

  }
  UserLoginFunction = ({ navigation }) => {
    console.log("UserName");
    const { items } = this.state;
    const { UserEmail } = this.state;
    const { UserPassword } = this.state;

    fetch(global.link + '/getLawyer', {
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result
        });
        //console.log(items);
      });
    // If server response message same as Data Matched
    var i = 0;
    if (UserEmail == "") {
      Alert.alert(`Enter Email`)
    } else if (UserPassword == "") {
      Alert.alert(`Enter Password`)
    } else {
      while (i < items.length) {
        if (items[i].email == UserEmail) {
          if (items[i].password == UserPassword) {
            global.MyID = items[i]._id;
            global.MyName = items[i].name;
            global.MyEmial = items[i].email;
            global.MyAddress = items[i].address;
            global.MyContact = items[i].contact;
            global.MyGender = items[i].gender;
            global.MyCourt = items[i].court;
            global.MyExperiance = items[i].experiance;
            global.MyPass = items[i].password;
            lg = "yes";
            console.log("Lawyer Login Successfully!");
            this.props.navigation.navigate('Lawyer');
            break;
          } else {
            i++;
          }
        }
        else {
          i++;
        }
      }
      if (lg == "no") {
        //Alert.alert(`Enter Valid Login ID`)
      } else if (lg == "yes") {
        lg = "no";
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Lawyer Login</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={UserEmail => this.setState({ UserEmail })}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={UserPassword => this.setState({ UserPassword })}
          />
        </View>

        <TouchableOpacity
          onPress={this.UserLoginFunction}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUpLawyer")}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
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

export default LoginLawyer;