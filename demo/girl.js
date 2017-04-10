import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native'

export default class Girl extends Component {
    state = {
        word: ''
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
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
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})