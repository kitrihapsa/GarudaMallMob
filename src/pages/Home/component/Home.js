import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native'
import {connect} from 'react-redux'
import { GET_NEWS } from '../action/index'

class Home extends Comment {

    componentDidMount() {
        this.props.dispatch(GET_NEWS())
    }

    render() {
        return(
            <View>
                {/* {
                    this.props.home.isLoading
                    ?
                    <Text>LOADING . . .</Text>
                    :
                    <FlatList
                        data={this.props.home.data.articles}
                        renderItem={({item}) =>(
                            <View key={key}>
                                <Text>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                } */}
                <Text>AAA</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    home: state.HomeReducer
})

export default connect(mapStateToProps)(Home)