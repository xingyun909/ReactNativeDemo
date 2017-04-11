import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, Image} from 'react-native'
import NavigatorBar from './navigatorBar/navigatorBar';
import HttpUtils from '../js/util/HttpUtils';

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            result: ''
        }
    }
    onload(url) {
        //  fetch(url)     .then(response=>response.json())     .then(result=>{
        // this.setState({             result:JSON.stringify(result)         })
        // }).catch(err=>{         this.setState({
        // result:JSON.stringify(err)         })     })
        HttpUtils
            .get(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(err => {
                this.setState({
                    result: JSON.stringify(err)
                })
            })
    }
    onSubmit(url, data) {
        //  fetch(url,{      method:'POST',      headers:{
        // 'Accept':'aplication/json',          'Content-Type':'aplication/json'      },
        //      body:JSON.stringify(data)  })     .then(response=>response.json())
        // .then(result=>{         this.setState({
        // result:JSON.stringify(result)         })     }).catch(err=>{
        // this.setState({             result:JSON.stringify(err)         })     })
        HttpUtils
            .post(url, data)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(err => {
                this.setState({
                    result: JSON.stringify(err)
                })
            })

    }
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar title='FetchTest' statusBar={{}}/>
                <Text
                    style={[styles.text, styles.row]}
                    onPress={() => this.onload('http://rapapi.org/mockjsdata/16935/get')}>获取数据</Text>
                <Text
                    style={[styles.text, styles.row]}
                    onPress={() => this.onSubmit('http://rapapi.org/mockjsdata/16935/post')}>发送数据</Text>
                <Text>
                    返回的结果：{this.state.result}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        // justifyContent: 'center'
    },
    text: {
        fontSize: 16
    },
    row: {
        height: 60
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }
})