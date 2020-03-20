import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"



const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Write a new Blog </Text>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
            <Button
                title='Save'
                onPress={() => onSubmit(title, content)}

            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 20,
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20
    }
});

export default BlogPostForm
