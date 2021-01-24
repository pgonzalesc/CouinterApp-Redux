import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import {increment, decrement} from '../../redux/actions/counter'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',   
        flexDirection: 'row',
        margin: '2%',
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 2,
        marginRight: 10,
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

const Counter = ({data, increment, decrement}) => {
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={()=>increment(data.count)}>
                <Text style={styles.textButton}>
                    +
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={()=>decrement(data.count)}>
                <Text style={styles.textButton}>
                    -
                </Text>
            </TouchableHighlight>
            <Text>{data.count}</Text>
        </View>
    )
}

const mapStateToProps = state => {
    return { data: state.counterReducer };
}

const mapDispatchToProps = dispatch => ({
    increment: (count) => dispatch(increment(count)),
    decrement: (count) => dispatch(decrement(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);