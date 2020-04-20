import React, { Component, useState } from 'react';
import {
  Platform,
  Dimensions,
  Linking,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,ImageBackground,
  Button,
  Share,
  Image,
  StatusBar,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { Video } from 'expo-av';
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const FONT_SIZE = 14;
const { width, height } = Dimensions.get('window');
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { DefaultTabBar } from 'rn-collapsing-tab-bar';

import SafeAreaView from 'react-native-safe-area-view';

import axios from 'axios';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import AwesomeButton from 'react-native-really-awesome-button';
 

function downloadFile(uri) {
  let filename = uri.split('/');
  filename = filename[filename.length - 1];
  let fileUri = FileSystem.documentDirectory + filename;
  FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
      saveFile(uri);
    })
    .catch(error => {
      Alert.alert('Error', "Couldn't download photo");
      console.error(error);
    });
}

async function downloadVideo() {
  setButtonTitle('Downloading');

  const callback = downloadProgress => {
    setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite));

    var progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    progress = progress.toFixed(2) * 100;
    setProgressValue(progress.toFixed(0));
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    videoUrl,
    FileSystem.documentDirectory + 'small.mp4',
    {},
    callback
  );

  try {
    const { uri } = await downloadResumable.downloadAsync();

    console.log('Finished downloading to ', uri);
    setButtonTitle('Downloaded');
  } catch (e) {
    console.error(e);
  }
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function saveFile(fileUri) {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === 'granted') {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync('Download', asset, false);
    Alert.alert('Success', 'Image was successfully downloaded!');
  }
}
const repos_1_FIRST_ITEM = 1;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const backIcon = require('./assets/icon.png');
import { Ionicons } from '@expo/vector-icons';
 import { WebView } from 'react-native-webview';

 
 
 
export default class ReactNativeImageLayoutExample extends Component {
  static navigationOptions = {
    header: null,
  };
  state = { categoryDetail: [], visibleModal: false, sliders: [] };
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
   'Regular': require('./assets/Regular.ttf'),
        'Bold': require('./assets/Bold.ttf'),
        'Bignoodletoo': require('./assets/bignoodletoo.ttf'),
      });
      this.setState({ fontLoaded: true });
    })();
    const { char_id, char_name } = this.props.navigation.state.params;
    this.props.navigation.setParams({ title: char_name });
    axios

      .get(
        `http://siteotomasyonu.com/api/b_s_wallpaper/32776372656174697665/detail/${char_id}`
      )

      .then(response => this.setState({ categoryDetail: response.data.data }));
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };

  _shareWallpaper = async image => {
    try {
      await Share.share({
        message:
          'Checkout this wallpaper ' + this.props.navigation.getParam('url'),
      });
    } catch (error) {
      console.log(error);
    }
  };
 
  _onPress = () => {
    setInterval(() => {
      let progress = 0;
      let reset = false;

      if (this.state.progress <= 100) {
        progress = this.state.progress + 5;
      } else {
        reset = true;
      }

      this.setState({
        reset: reset,
        progress: progress,
      });
    }, 1000);
  };

  

  render() {
    const { categoryDetail } = this.state;

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FA9C1E' }}>
          <StatusBar hidden={true} />

          <View>
            <Image

                    source={{ uri: categoryDetail.thumb }}
                                style={styles.icon1}
            />
          </View>
 <ImageBackground
      source={{ uri: categoryDetail.Skills_icon }}
     style={styles.background}
    >   
           <View style={styles.modal}>
		   

		   
            <View style={styles.modal_title}>
					 
              <Text style={styles.modal_title_text}>
                {categoryDetail.Slogan}
              </Text>
            </View>

            <View style={styles.info}>
              <View style={styles.info_area}>
                <Text style={styles.modal_title_text2}>Real Name: <Text  style={{fontSize: 20,color: '#FFF',textAlign: 'center',fontFamily: 'Regular',fontWeight:'900'}}>{categoryDetail.Real_name}</Text>
				  
				  			  
				  </Text>
                <Text style={styles.modal_title_text2}>Occupation: <Text  style={{fontSize: 20,color: '#FFF',textAlign: 'center',fontFamily: 'Regular',fontWeight:'900'}}>{categoryDetail.Occupation} </Text></Text>
				
                <Text style={styles.modal_title_text2}>
                  Base of operations: <Text  style={{fontSize: 20,color: '#FFF',textAlign: 'center',fontFamily: 'Regular',fontWeight:'900'}}>{categoryDetail.Base}

                </Text></Text>
                <Text style={styles.modal_title_text2}>Affiliation: <Text  style={{fontSize: 20,color: '#FFF',textAlign: 'center',fontFamily: 'Regular',fontWeight:'900'}}>{categoryDetail.Affiliation}</Text></Text>
              </View>
			  
	  
 

              <View style={styles.info_area}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Bignoodletoo',
                  }}>
                  STRATEGY
                </Text>

                <Text
                  style={{
                    fontFamily: 'Regular',
                    fontSize: 20,
                    color: '#FFF',
                    flexDirection: 'row',
                    textAlign: 'justify',
                   
                  }}>
					{categoryDetail.Strategy}
                </Text>
              </View>
            </View>

            <View style={styles.video}>
			
	 	   
							  
								  <WebView
					javaScriptEnabled={true}
							domStorageEnabled={true}   

	//source={{uri: 'https://www.youtube.com/embed/yzFWIw7wV8Q?rel=0&autoplay=0&showinfo=0&controls=0'}}
	                source={{ uri: categoryDetail.Video }}

        style={{width: '100%', height: height, aspectRatio: 16 / 9}}

				/>
			  
			
			
			  
			  
            </View>

            <View style={styles.skill_title}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Bignoodletoo',
                }}>
                TIPS
              </Text>

              <Text
                style={{
                  fontFamily: 'Regular',
                  fontSize: 20,
                  color: '#FFF',
                  flexDirection: 'row',
                  textAlign: 'justify',
                  padding: 20,
                }}>
				{categoryDetail.Tips} 
              </Text>
            </View>

            <View style={styles.skills}>
              <Text
                style={{
                  fontFamily: 'Bignoodletoo',
                  fontSize: 30,
                  width:250,
                  textAlign:'center',
                  color: 'black',
                }}>
                ABILITIES
              </Text>
           
<ScrollableTabView
                scrollWithoutAnimation
                initialPage={0}
                renderTabBar={() => (
                  <DefaultTabBar
                    inactiveTextColor="white"
                    activeTextColor="orange"
                    backgroundColor="transparent"
                    color= "black"
                    fontSize= {20}

                  />
                )}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 20,
                    fontFamily: 'Regular',
                  }}
                  tabLabel="Primary">
                  <Text
                    style={{
                      fontFamily: 'Regular',
					  color:'black',
                      fontSize: 15,
                      flexDirection: 'row',
                      textAlign: 'justify',
                      padding: 20,
                    }}>
                    {categoryDetail.Skill_1_}
				  </Text>

                </View>

                <View
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 20,
                    fontFamily: 'Regular',
                  }}
                  tabLabel="Secondary">
                  <Text
                    style={{
                      fontFamily: 'Regular',
					  color:'black',
                      fontSize: 15,
                      flexDirection: 'row',
                      textAlign: 'justify',
                      padding: 20,
                    }}>
                    {categoryDetail.Skill_2_}
				  </Text>

                </View>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 20,
                    fontFamily: 'Regular',
                  }}
                  tabLabel="Shift">
                  <Text
                    style={{
                      fontFamily: 'Regular',
					  color:'black',
                      fontSize: 15,
                      flexDirection: 'row',
                      textAlign: 'justify',
                      padding: 20,
                    }}>
                    {categoryDetail.Skill_3_}
				  </Text>

                </View>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 20,
                    fontFamily: 'Regular',
                  }}
                  tabLabel="Ability">
                  <Text
                    style={{
                      fontFamily: 'Regular',
					  color:'black',
                      fontSize: 15,
                      flexDirection: 'row',
                      textAlign: 'justify',
                      padding: 20,
                    }}>
                    {categoryDetail.Skill_4_}
				  </Text>

                </View>

			<View
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: 20,
                    fontFamily: 'Regular',
                  }}
                  tabLabel="Ultimate">
                  <Text
                    style={{
                      fontFamily: 'Regular',
					  color:'black',
                      fontSize: 15,
                      flexDirection: 'row',
                      textAlign: 'justify',
                      padding: 20,
                    }}>
                    {categoryDetail.Skill_5_}
				  </Text>

                </View>

              </ScrollableTabView>
            </View>
          </View>
		   </ImageBackground>
        </ScrollView>
     );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  newSlider: {
    flex: 1,
    borderRadius: 22,
    paddingHorizontal: 20,
  },
  newSliderImg: {
    flex: 1,
    borderRadius: 22,
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_HEIGHT * 0.9,
    resizeMode: 'contain',
  },
  icon1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT*0.80,
    resizeMode: 'cover',
    flex: 1,
  },
    background: {
    resizeMode: 'cover',
	opacity: .8,
  
  
   
  },

  modalContent: {
    backgroundColor: '#1F273E',
    //padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,

    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  modal: {
    marginTop: 40,
    backgroundColor: '#474645',
    width: DEVICE_WIDTH,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
  },

  modal_title: {
    marginTop: 10,
    alignItems: 'center',
    textAlign: 'center',
    width: DEVICE_WIDTH * 0.75,
  },

  modal_title_text: {
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Bignoodletoo',
  },

  modal_title_text2: {
    fontSize: 20,
    color: '#FFF',
    flexDirection: 'row',
    fontFamily: 'Bold',
	
  },

  info: {
    marginTop: 10,
	padding:20,
    borderColor: 'white',
    flex: 1,
  },

  info_area: {
    flexDirection: 'column',
    marginTop: 15,
    flex: 1,

  },

  video: {
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_WIDTH * 0.6,
    //backgroundColor: 'gray',

    borderRadius: 33,
    alignItems: 'center',
    textAlign: 'center',
    borderColor: 'white',
    marginBottom: 10,
    marginVertical: 20,
  },

  skills: {
    marginTop: 20,
    overflow: 'hidden',
    width: DEVICE_WIDTH,
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    alignItems: 'center',
    textAlign: 'center',

    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,

    borderColor: 'white',
  },

  skill_title: {
    flexDirection: 'column',
    marginTop: 15,
    flex: 1,
  },

  video_area_image: {
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: 'white',
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_WIDTH * 0.6,
    borderRadius: 11,
  },
});
