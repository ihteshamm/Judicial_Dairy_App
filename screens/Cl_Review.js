import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar, AirbnbRating } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     email: "",
//     password: ""
//   }

// render() {
    // const getDetails = (type)=>{
        
    //     if(route.params){
    //        switch(type){
    //            case "name":
    //                return route.params.name
    //            case "email":
    //               return route.params.email
    //            case "lawyer":
    //              return route.params.contact
    //            case "entertext":
    //                return route.params.address  
    //            case "ratings":
    //                return  route.params.password
    //        }
    //     }
    //     return ""
    //  }
     
    //  const [name,setName] = useState(getDetails("name"))
    //  const [email,setEmail] = useState(getDetails("email"))
    //  const [lawyer,setLawyer] = useState(getDetails("lawyer"))
    //  const [entertext,setEntertext] = useState(getDetails("entertext"))
    //  const [ratings,setRatings] = useState(getDetails("ratings")) 

    //  const submitData = ()=>{
    //      if(name == ""){
    //          Alert.alert(`Please Enter Name`)
    //      }else if(email == ""){
    //          Alert.alert(`Please Enter Email`)
    //      }else if(lawyer == ""){
    //          Alert.alert(`Please Select Lawyer`)
    //      }else{
    //          fetch("http://b61b-39-50-117-105.ngrok.io/send-data",{
    //              method:"post",
    //                  headers:{
    //                  'Content-Type': 'application/json'
    //                  },
    //                  body:JSON.stringify({
    //                      name,
    //                      email,
    //                      lawyer,
    //                      entertext,
    //                      ratings  
    //                  })
    //              })
    //              .then(res=>res.json())
    //              .then(data=>{
    //                  Alert.alert(`Review done successfuly`)
    //              })
    //              .catch(err=>{
    //              Alert.alert("someting went wrong")
    //          })
    //      }
    //  }
    
const Cl_Review = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Add Review</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Username..."
                    placeholderTextColor="white"
                    onChangeText={text => setName(text)}
                    />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="white"
                    onChangeText={text => setEmail(text)}
                    />
            </View>
            <View  >
                <SearchBar style={styles.container}
                    platform="ios"
                    onChangeText={newVal => setValue(newVal)}
                    onClearText={() => console.log(onClearText())}
                    placeholder="Select Lawyer..."
                    placeholderTextColor="white"
                    cancelButtonTitle="Cancel"
                    cancelButtonProps={{}}
                    onCancel={() => console.log("")}
                    value={value}
                    onChangeText={text => setLawyer(text)}
                    />
                <Text> </Text>
            </View>

            <View style={styles.ReviewBox} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Text..."
                    placeholderTextColor="white"
                    onChangeText={text => setEntertext(text)}
                    />
            </View>

            <AirbnbRating
                count={5}
                defaultRating={1}
                reviews={[
                    "Terrible",
                    "Bad",
                    "Okay",
                    "Good",
                    "Great"
                ]}
                onFinishRating={() =>
                    console.log("onFinishRating()")
                }
                showRating
                onChangeText={text => setRatings(text)}
            />

            <TouchableOpacity onPress={() => submitData() }
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Submit Review</Text>
            </TouchableOpacity>


        </View>
    );
};

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
    },
    ReviewBox: {
        width: "100%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 100,
        marginBottom: 20,
        justifyContent: "center",
        padding: 10
    },

});

export default Cl_Review;
