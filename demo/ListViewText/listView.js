import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
    RefreshControl
} from 'react-native'
import NavigatorBar from '../navigatorBar/navigatorBar';
import Toast,{DURATION} from 'react-native-easy-toast';
var data = {
    result: [
        {
            "email": "v.harris@allen.co.uk",
            "name": "Carol Gonzalez"
        }, {
            "email": "j.miller@walker.org",
            "name": "Melissa Young"
        }, {
            "email": "y.garcia@anderson.gov",
            "name": "Paul Jackson"
        }, {
            "email": "m.williams@moore.net",
            "name": "Mary Davis"
        }, {
            "email": "q.gonzalez@garcia.edu",
            "name": "Carol Garcia"
        }, {
            "email": "e.walker@hall.gov",
            "name": "Timothy Martinez"
        }, {
            "email": "j.martin@thomas.org",
            "name": "Sarah Garcia"
        }, {
            "email": "f.anderson@lewis.co.uk",
            "name": "Jeffrey Johnson"
        }, {
            "email": "g.martin@smith.org",
            "name": "Gary Thomas"
        }, {
            "email": "m.jones@lopez.edu",
            "name": "Sarah Jones"
        }, {
            "email": "y.lewis@gonzalez.edu",
            "name": "Barbara Thomas"
        }, {
            "email": "y.brown@thompson.gov",
            "name": "Jeffrey Martin"
        }, {
            "email": "u.moore@young.io",
            "name": "Mary Thompson"
        }, {
            "email": "f.perez@lee.edu",
            "name": "Paul Walker"
        }, {
            "email": "o.clark@gonzalez.edu",
            "name": "Donna Harris"
        }, {
            "email": "c.taylor@miller.org",
            "name": "Susan Taylor"
        }, {
            "email": "y.moore@miller.com",
            "name": "Charles Williams"
        }, {
            "email": "g.davis@harris.org",
            "name": "Richard Lee"
        }
    ]
}
export default class ListViewText extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
             isRefreshing:true
        }
        this._onRefresh();
    }
    _onRefresh(){
            setTimeout(()=> {
                this.setState({
                    isRefreshing:false
                })
            }, 6000);
        }
    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity onPress={()=>{
                    this.toast.show('你单击了：'+item.name,DURATION.LENGTH_LONG)
                }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){ //返回视图，在行与行之间，三个参数
        return <View key={rowID} style={styles.line}></View>   
    }
    renderFooter(){
        return <Image style={{width:400,height:100}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491906409469&di=7aba380e3abbb107d03a82eb595e2bdb&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd33554303b80000019ae9d58bcf.jpg'}}/>    
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title='listView'
                    statusBar={{
                    backgroundColor: 'red'
                }}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                    renderFooter={()=>this.renderFooter()}
                    refreshControl={
                         <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this._onRefresh()}
                        />
                    }   
                    />
                <Toast ref={toast=>{this.toast = toast}} />
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
    row:{
        height:60
    },
    line:{
        height:1,
        backgroundColor:'black'
    }
})