import * as React from 'react';
import { COLORS, FONTS } from '../constants';
import { Divider, Header, Card } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        UserEmail: '',
        UserPassword: '',
  }
}

    render() {
        return (
            <View style={styles.container}>
                <Divider style={{ width: "50%", margin: -5 }} />                
                <Card containerStyle={{marginTop: 130, backgroundColor: "#003f5c" }} wrapperStyle={{}} >
    
                    <Card.Title style={{ color: COLORS.white, ...FONTS.h3 }}>Profile</Card.Title>

                    <Card.Divider />
                    <View >
                        
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Name  :  {(global.MyName)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Email  :  {(global.MyEmial)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Address : {(global.MyAddress)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Contact No.  : {(global.MyContact)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Gender  : {(global.MyGender)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Court  : {(global.MyCourt)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Experiance  : {(global.MyExperiance)}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>  </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Password : {(global.MyPass)}</Text>
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