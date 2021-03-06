import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {AppRegistry, StyleSheet, Text, View, Image,Navigator} from 'react-native';

import PopularPage from './popularPage'
export default class HomePage extends Component {
  state = {
    selectedTab: 'tb_popular'
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color:'red'}}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/Home.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/Home.png')}/>}
            badgeText="1"
            onPress={() => this.setState({selectedTab: 'tb_popular'})}>
            <PopularPage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle={{color:'yellow'}}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/elec.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/elec.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_trending'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{color:'yellow'}}
            title="收藏"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/elec.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/elec.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            selectedTitleStyle={{color:'yellow'}}
            title="我的"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/elec.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/elec.png')}/>}
            onPress={() => this.setState({selectedTab: 'tb_my'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    width: 22,
    height: 22
  }
});

