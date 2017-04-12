import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'


import HomePage from '../page/homePage';
export default class WelcomePage extends Component {
    //欢迎页面一般做轮播图，或app动画

    //模拟延时跳转
    componentDidMount(){
       this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000)
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer)
    }
    render(){
        return <View style={styles.container}>
            <Text style={styles.text}>
                欢迎页面
            </Text>
        </View> 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF'
  },
  text:{
      fontSize:20
  }

});