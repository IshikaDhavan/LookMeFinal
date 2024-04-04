import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.headingContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/appIcon.png')}
              style={styles.appIcon}
            />
            <Text style={styles.titleText1}>L</Text>
            <Image
              source={require('../assets/look-eyes.png')}
              style={styles.icon}
            />
            <Text style={styles.titleText1}>k</Text>
            <Text style={styles.titleText1}> Me</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Want to try different types of funny filters with the high quality
            camera without going to different apps? Well you've come to the
            right place! Look Me is the perfect app to try new filters, click
            selfies, and Enjoy!
          </Text>

          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <View style={{ flex: 0.25, flexDirection: 'row' }}>
              <Image
                source={require('../assets/crown-pic1.png')}
                style={{
                  marginTop: 25,
                  marginLeft: 50,
                  height: 50,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../assets/flower-pic1.png')}
                style={{
                  marginTop: 25,
                  marginLeft: 50,
                  height: 50,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row' }}>
            <View style={{ flex: 0.25, flexDirection: 'row' }}>
              <Image
                source={require('../assets/other-pic1.png')}
                style={{
                  marginTop: 50,
                  marginLeft: 50,
                  height: 50,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('../assets/other-pic3.png')}
                style={{
                  marginTop: 50,
                  marginLeft: 50,
                  height: 50,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
            onPress={()=> {this.props.navigation.navigate("Main")}}>
              <Text style={styles.buttonText}>Try Me!</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? Statusbar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EADBDD',
    borderRadius: 10,
  },
  titleText1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    height: 50,
    paddingTop: 5,
  },
  icon: {
    width: RFPercentage(7),
    height: RFPercentage(9),
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    paddingBottom: RFValue(50),
  },
  appIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 0.6,
    backgroundColor: '#FFC1CC',
    borderRadius: 10,
    paddingTop: 15,
    marginTop: 12,
  },
  contentText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  button: {
    paddingLeft: RFValue(50),
    paddingRight: RFValue(50),
    backgroundColor: "pink",
    height: 50,
    width: 150,
    borderRadius: 5,
    marginTop: RFValue(60),
    marginBottom: RFValue(70),
    paddingTop: 10
  },
  buttonText: {
    shadowColor: "black",
    fontWeight: 'bold',
    fontSize: 21
  }
});
