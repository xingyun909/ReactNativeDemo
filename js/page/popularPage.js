import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text,TextInput, View, Image} from 'react-native';

import ScrollableTabView ,{ ScrollableTabBar, }from 'react-native-scrollable-tab-view';

import NavigatorBar from '../common/navigatorBar';
import DataRepository from '../expend/dao/dataRepository';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class HomePage extends Component {
  state = {
      text:'',
      result:''
  }
  constructor(props) {
    super(props);
    this.dataRepository = new DataRepository();
  }
  getUrl(key){
      return URL+key+QUERY_STR
  } 
  onload(){
        let url = this.getUrl(this.state.text);
        this.dataRepository.fetchNetReposity(url)
                            .then(result=>{
                                this.setState({
                                    result:JSON.stringify(result)
                                })
                            })
                            .catch(error=>{
                                this.setState({
                                    result:JSON.stringify(error)
                                })
                            })
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigatorBar title='最热'/>
         <Text onPress={()=>{this.onload()}} style={styles.text}>获取数据</Text>
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
        <Text style={{height:600}}>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'
  },
  text:{
    fontSize:18
  },
  image: {
    width: 22,
    height: 22
  }
});

