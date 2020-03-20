import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';



const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (BlogPost) => BlogPost.id === navigation.getParam('id')
    );

    return (
        <View>
            <Text style={styles.header}>Blog Detail</Text>

            <Text style={styles.title}>#{blogPost.title}: </Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() =>
                navigation.navigate('Edit', {
                    id: navigation.getParam('id')
                })}>
                <EvilIcons name='pencil' size={30} style={{ marginRight: 10 }} />
            </TouchableOpacity>
        )
    };

}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    }, title: {
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal: 25
    }, content: {
        marginHorizontal: 25,
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 10


    }
});

export default ShowScreen
