import React, {Component} from 'react';
import {AppRegistry, StyleSheet,ListView ,Text,TextInput, View, Image} from 'react-native';

import ScrollableTabView ,{ ScrollableTabBar, }from 'react-native-scrollable-tab-view';

import NavigatorBar from '../common/navigatorBar';
import DataRepository from '../expend/dao/dataRepository';
import RepositoryCell from '../common/repositoryCell';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class HomePage extends Component {
  state = {
      text:''
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
        {/*<NavigatorBar title='最热'/>
         <Text onPress={()=>{this.onload()}} style={styles.text}>获取数据</Text>
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
        <Text style={{height:600}}>{this.state.result}</Text>*/}
        <ScrollableTabView
            initialPage={2}
            renderTabBar={() => <ScrollableTabBar />}
            >
            <PopularTab tabLabel='java'>java</PopularTab>
            <PopularTab tabLabel='IOS'>IOS</PopularTab>
            <PopularTab tabLabel='Android'>Adroid</PopularTab>
            <PopularTab tabLabel='javascript'>js</PopularTab>
        </ScrollableTabView>
      </View>
    );
  }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state={
            result:'',
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        }
    }
    componentDidMount(){
        this.loadData()
    }
    getUrl(key){
      return URL+key+QUERY_STR
    } 
    loadData(){
        let url = this.getUrl(this.props.tabLabel);
        this.dataRepository.fetchNetReposity(url)
                            .then(result=>{
                                this.setState({
                                    dataSource:this.state.dataSource.cloneWithRows(result.items)
                                })
                            })
                            .catch(error=>{
                                this.setState({
                                    result:JSON.stringify(error)
                                })
                            })
  }
  renderRow(data){
    return <RepositoryCell data={data}/>
  }
  render(){
      return   <View>
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
            />
      </View>  
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

