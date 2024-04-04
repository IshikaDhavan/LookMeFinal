import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { StatusBar } from 'expo-status-bar';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import Filter1 from './filter1';
import Filter2 from './filter2';
import Filter3 from './filter3';
import Filter4 from './filter4';
import Filter5 from './filter5';
import Filter6 from './filter6';
import Filter7 from './filter7';

const data = {
  crown: [
    {
      id: '1',
      image: require('../assets/crown-pic.png'),
    },
    {
      id: '2',
      image: require('../assets/crown-pic3.png'),
    },
  ],
  flower: [
    {
      id: '3',
      image: require('../assets/flower-pic1.png'),
    },
    {
      id: '4',
      image: require('../assets/flower-pic2.png'),
    },
  ],
  others: [
    {
      id: '5',
      image: require('../assets/other-pic1.png'),
    },
    {
      id: '6',
      image: require('../assets/other-pic2.png'),
    },
    {
      id: '7',
      image: require('../assets/other-pic3.png'),
    },
  ],
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: [],
      current_filter: 'filter_1',
      selected: 'crown',
    };

    this.onFacesDetected = this.onFacesDetected.bind(this);
  }
  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  onFacesDetected({ faces }) {
    this.setState({ faces: faces });
  }
  onFacesDetectionError({ error }) {
    console.log(error);
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>Access Not Granted</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />

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

        <View style={styles.cameraStyle}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
            }}
            onFacesDetected={this.onFacesDetected}
            onFacesDetectionError={this.onFacesDetectionError}
          />
          {this.state.faces.map((face) => {
            if (this.state.current_filter === 'crown-pic1') {
              return <Filter1 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'crown-pic3') {
              return <Filter2 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'other-pic3') {
              return <Filter3 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'flower-pic1') {
              return <Filter4 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'other-pic2') {
              return <Filter5 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'other-pic1') {
              return <Filter6 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === 'flower-pic2') {
              return <Filter7 key={(face.faceID)} face={face} />;
            }
          })}
        </View>

        <View style={styles.framesContainer}>
        <View style={styles.categoryContainer}>
       <TouchableOpacity
       style = {
         this.state.selected == "crown"
         ? styles.categoryBoxSelected
         : styles.categoryBox
       }
        onPress={() => {this.setState({selected: "crown"})}}>
        <Text>Crown</Text>
       </TouchableOpacity>
       <TouchableOpacity style={
         this.state.selected == "flower"
         ? styles.categoryBoxSelected
         : styles.categoryBox
       }
       onPress={()=>{this.setState({selected : "flower"})}}>
       <Text>Flower</Text>
       </TouchableOpacity>
       <TouchableOpacity style={
         this.state.selected == "others"
         ? styles.categoryBoxSelected
         : styles.categoryBox
       }
       onPress={()=>{this.setState({selected : "others"})}}>
       <Text>Others</Text>
       </TouchableOpacity>
        </View>
          <ScrollView
            style={{ flexDirection: 'row', flex: 0.6 }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {data[this.state.selected].map((filter_data) => {
              return (
                <TouchableOpacity
                  style={styles.filterImageContainer}
                  onPress={() =>
                    this.setState({
                      current_filter: `filter_${filter_data.id}`,
                    })
                  }>
                  <Image
                    source={filter_data.image}
                    style={styles.filters}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
  },

  cameraStyle: {
    flex: 0.65,
  },
  framesContainer: {
    flex: 0.2,
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    paddingTop: RFValue(30),
    backgroundColor: '#F0E27B',
  },
  filterImageContainer: {
    height: RFPercentage(10),
    width: RFPercentage(10),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#a87e62',
    borderRadius: 30,
    marginRight: 20,
  },
  filters: {
    height: '60%',
    width: '60%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  categoryContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: RFValue(10),
  },
  categoryBox: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: RFValue(3),
    margin: 1,
  },
  categoryBoxSelected: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#b07154',
    width: '100%',
    padding: RFValue(3),
    margin: 1,
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
});
