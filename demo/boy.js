import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native'


import Girl from './girl'
export default class Boy extends Component {
    state = {
        word: ''
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am a boy</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.navigator.push({
                        component:Girl,
                        params:{
                            word:"一朵玫瑰",
                            onCallback:(word)=>{
                                this.setState({
                                    word:word
                                })
                            }
                        }
                    })
                }}>送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})