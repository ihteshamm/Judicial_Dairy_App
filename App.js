import React from "react";
import {
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// screens
import {
    Onboarding, LoginAs, SignUp, SignUpLawyer, Lawyer, Cl_Cases, Cl_Review,
    Cl_Reminder, Cl_Profile, Cl_Hearings, Cl_Dictionary, Cl_Lawyer, Login, LoginLawyer,
    Client, Lw_Cases, Lw_Requests, Lw_Profile, Lw_Reminder, ViewReviews,Cl_MyRequests,Lw_Hearings
} from "./screens/";
import { icons, SIZES, FONTS } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();
const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    })
    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Onboarding'}
            >
                {/* Screens */}
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="LoginAs"
                    component={LoginAs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUpLawyer"
                    component={SignUpLawyer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginLawyer"
                    component={LoginLawyer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                                <Stack.Screen
                    name="Lw_Hearings"
                    component={Lw_Hearings}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Hearing dates</Text>),
                    }}
                />

                <Stack.Screen
                    name="Cl_Cases"
                    component={Cl_Cases}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Cases</Text>),
                    }}
                />
                <Stack.Screen
                    name="ViewReviews"
                    component={ViewReviews}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Reviews</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Review"
                    component={Cl_Review}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Add Reviews</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Dictionary"
                    component={Cl_Dictionary}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Dictionary</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Hearings"
                    component={Cl_Hearings}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Next Hearing Dates</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Lawyer"
                    component={Cl_Lawyer}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Request Case</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Profile"
                    component={Cl_Profile}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Profile</Text>),
                    }}
                />
                <Stack.Screen
                    name="Cl_Reminder"
                    component={Cl_Reminder}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}>My Reminders</Text>),
                    }}
                />
                <Stack.Screen
                    name="Lw_Cases"
                    component={Lw_Cases}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Cases</Text>),
                    }}
                />
                <Stack.Screen
                    name="Lw_Profile"
                    component={Lw_Profile}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Profile</Text>),
                    }}
                />
                                <Stack.Screen
                    name="Cl_MyRequests"
                    component={Cl_MyRequests}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Requests</Text>),
                    }}
                />

                <Stack.Screen
                    name="Lw_Reminder"
                    component={Lw_Reminder}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> My Reminders</Text>),
                    }}
                />
                <Stack.Screen
                    name="Lw_Requests"
                    component={Lw_Requests}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: '#003f5c'
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (<Text style={{ ...FONTS.h2, color: "white" }}> Case Requests</Text>),
                    }}
                />

                {/* Tabs */}
                < Stack.Screen
                    name="Client"
                    component={Client}
                    options={{ headerShown: false }}
                />


                {/* Tabs */}
                < Stack.Screen
                    name="Lawyer"
                    component={Lawyer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
