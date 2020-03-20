import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Context } from "../context/BlogContext";
import BlogPostForm from "../context/BlogPostForm";



const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(
        (BlogPost) => BlogPost.id === id
    );


    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop());
            }}
        />
    )
}

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

export default EditScreen
