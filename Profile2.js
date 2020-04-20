import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');

export default class PostView extends Component {
	
	
	
  render() {
    return (
      <ScrollView>
	  
        <View style={styles.container}>

		
				
		
		
		
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              OVERWATCH RETAIL PATCH NOTES – MARCH 24, 2020
            </Text>
          </View>

          <View style={styles.postContent}>
            <Text style={styles.postTitle}>GENERAL UPDATES</Text>

            <Text style={styles.postDescription}>
              Achievements listed on the Career Profile page can now be earned
              in Quick Play Classic
            </Text>
	  
	  
	  

	  
	  
            <Text style={styles.postTitle}>BUG FIXES</Text>

            <Text style={styles.postDescription}>
              Fixed several AI pathing issues in the Archives missions Reduced
              volume of Slicer's pre-attack sound in Uprising as they were
              previously a bit too prominent in Quick Play Classic
            </Text>

            <Text style={styles.tags}>
              PATCH, OVERWATCH, LAST, UPDATES.
            </Text>

            <Text style={styles.date}>2017-11-27 13:03:01</Text>

            <View style={styles.profile}>
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png',
                }}
              />

             </View>
        
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#FA9C1E',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 10,
    fontFamily: 'Bignoodletoo',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  postContent: {
    flex: 1,
    padding: 30,
	    fontFamily: 'Bignoodletoo',
		    marginTop: 10,


  },
  postTitle: {
    fontSize: 26,
    fontWeight: '600',
	    fontFamily: 'Bignoodletoo',
		    marginTop: 10,


  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
	    fontFamily: 'Regular',

  },
  tags: {
    color: '#00BFFF',
    marginTop: 10,
	    fontFamily: 'Bignoodletoo',

  },
  date: {
    color: '#696969',
    marginTop: 10,
	    fontFamily: 'Bignoodletoo',

  },
  avatar: {
    width: 80,
    height: 80,
   
 
  },
  profile: {
    flexDirection: 'row',
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: '#00BFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 10,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
