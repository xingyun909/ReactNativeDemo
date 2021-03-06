import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

import NavigatorBar from './navigatorBar';
import Girl from './girl'
export default class Boy extends Component {
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
                    title={'boy'}
                    statusBar={{
                    backgroundColor: 'red'
                }}
                    leftButton={this.renderButton(require('./images/back.png'))}
                    rightButton={this.renderButton(require('./images/fav.png'))}/>
                <Text style={styles.text}>I am a boy</Text>
                <Text
                    style={styles.text}
                    onPress={() => {
                    this
                        .props
                        .navigator
                        .push({
                            component: Girl,
                            params: {
                                word: "一朵玫瑰",
                                onCallback: (word) => {
                                    this.setState({word: word})
                                }
                            }
                        })
                }}>送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
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
        fontSize: 20
    }
})