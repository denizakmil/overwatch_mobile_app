import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import axios from 'axios';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { listRepos } from './reducer';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Character list',
  };

  state = { categories: [], services: [], slider: [] };
  slider = [1, 2, 3, 4, 5, 6];

  componentWillMount() {}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
	console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

    axios
      .get(
        'http://siteotomasyonu.com/api/b_s_wallpaper/32776372656174697665/list'
      )
      .then(response => this.setState({ sliders: response.data.data }));
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,

      'Regular': require('./assets/Regular.ttf'),
        'Bold': require('./assets/Bold.ttf'),
        'Bignoodletoo': require('./assets/bignoodletoo.ttf'),
      });
      this.setState({ fontLoaded: true });
    })();
  }

  render() {
    const { repos } = this.props;
    return (
      <ScrollView>
        <SafeAreaView style={styles.body}>
          <StatusBar hidden={true} />
          <View style={styles.headerRow}>
            <Text style={styles.headerButton} />

            <Text style={styles.headerTitle}>
              Overwatch Guides and Wallpapers
            </Text>
          </View>

          <FlatGrid
            //          itemDimension={110}

            items={this.state.sliders}
            style={styles.gridView}
            // staticDimension={300}
            //fixed
            spacing={4}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('RepoDetail', {
                    char_id: item.id,
                    char_name: item.name,
                  })
                }>
				
				

                <View style={[styles.itemContainer]}>
                  <Image
                    source={{ uri: item.thumb }}
                    style={styles.imageView}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1F273E',
	//    backgroundColor: '#FA9C1E',

  },

  gridView: {
    marginTop: 20,
    flex: 1,
  },

  imageView: {
    flex: 1,

    borderRadius: 7,
    resizeMode: 'cover',
  },

  itemContainer: {
    justifyContent: 'flex-end',
    //    borderRadius: 5,
    //    padding: 10,
    margin: 2,

    //   width: width*0.5,
    height: width * 0.75,
  },

  headerRow: {
    height: height * 0.06,
  },
  headerButton: {
    position: 'absolute',

    height: height * 0.06,
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 32,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    color: 'white',
    fontFamily: 'Bignoodletoo',
  },
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};

const mapDispatchToProps = {
  listRepos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
