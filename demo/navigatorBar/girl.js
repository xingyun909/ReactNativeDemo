import React, {Component} from 'react';
import {Text, View,StyleSheet, Image, TouchableOpacity} from 'react-native'

import NavigatorBar from './navigatorBar';
export default class Girl extends Component {
    state = {
        word: ''
    }
    constructor(props) {
        super(props);
    }
    renderButton(image) {
        return (
            <TouchableOpacity 
            onPress={()=>{
                this.props.navigator.pop()
            }}>
                <Image
                    style={{
                    width: 25,
                    height: 25,
                    margin: 5
                }}
                    source={image}></Image>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                 <NavigatorBar 
                    title={'Gril'} 
                    statusBar={{
                    backgroundColor:'red'
                    }}
                    leftButton={this.renderButton(require('./images/back.png'))}
                    rightButton={this.renderButton(require('./images/fav.png'))}
                 />
                <Text style={styles.text}>I am a girl</Text>
                <Text style={styles.text}>我收到男孩送的{this.props.word}</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.onCallback('一盒巧克力');
                    this.props.navigator.pop();
                    }}>回赠巧克力</Text>
            </View>
        )
    }
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        // justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})