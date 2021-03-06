import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context as blogContext } from '../context/BlogContext';


const EditScreen = ({ navigation }) => {
    const { state: blogPosts } = useContext(blogContext);

    const blogPost = blogPosts.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput 
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;