import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native';
import { Component } from 'react';

const SignUp = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "name":
          return route.params.name
        case "type":
          return route.params.type
        case "fee":
          return route.params.fee
        case "email":
          return route.params.email
        case "address":
          return route.params.address
        case "contact":
          return route.params.contact
        case "gender":
          return route.params.gender
        case "court":
          return route.params.court
        case "experiance":
          return route.params.experiance
        case "password":
          return route.params.password
      }
    }
    return ""
  }

  const [name, setName] = useState(getDetails("name"))
  const [type, setType] = useState(getDetails("type"))
  const [fee, setFee] = useState(getDetails("fee"))
  const [email, setEmail] = useState(getDetails("email"))
  const [address, setAddress] = useState(getDetails("address"))
  const [contact, setContact] = useState(getDetails("contact"))
  const [gender, setGender] = useState(getDetails("gender"))
  const [court, setCourt] = useState(getDetails("court"))
  const [experiance, setExperiance] = useState(getDetails("experiance"))
  const [password, setPassword] = useState(getDetails("password"))
  const submitData = () => {
    console.log("In submit data");
    if (name == "") {
      Alert.alert(`Please Enter Name`)
    } else if (email == "") {
      Alert.alert(`Please Enter Email`)
    } else if (password == "") {
      Alert.alert(`Please Enter Password`)
    } else {
      fetch(global.link + "/send-dataLawyer", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          type,
          fee,
          email,
          address,
          contact,
          gender,
          court,
          experiance,
          password,
        })
      })
        .then(res => res.json())
        .then(data => {
          Alert.alert(`${data.name} is saved successfuly`)
          navigation.navigate("Login")
        })
        .catch(err => {
          Alert.alert("someting went wrong")
        })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up Lawyer</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username. . ."
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Type"
          placeholderTextColor="#003f5c"
          onChangeText={text => setType(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="fee"
          placeholderTextColor="#003f5c"
          onChangeText={text => setFee(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email. . ."
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Address. . ."
          placeholderTextColor="#003f5c"
          onChangeText={text => setAddress(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Contact No."
          placeholderTextColor="#003f5c"
          onChangeText={text => setContact(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Gender"
          placeholderTextColor="#003f5c"
          onChangeText={text => setGender(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Working Court"
          placeholderTextColor="#003f5c"
          onChangeText={text => setCourt(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Experiance"
          placeholderTextColor="#003f5c"
          onChangeText={text => setExperiance(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => submitData()}
        style={styles.loginBtn}
      >

        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginLawyer")}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>login As Lawyer</Text>
      </TouchableOpacity>


    </View>
  );

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

export default SignUp



// {
//   "name": "shehram",
//   "email": "sheh@gmail.com",
//   "contact": "03454545566",
//   "address": "rawal",
//   "password": "sh1234",
//   "types": "lawyer"

// }