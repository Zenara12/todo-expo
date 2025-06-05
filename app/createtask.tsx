import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { useTaskStore } from '../stores/useTaskStore';

import ThemedTextInput from '../components/ThemedTextInput';
import ThemedButton from '../components/ThemedButton';

const CreateTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const router = useRouter();

	const addTask = useTaskStore((state) => state.addTask);

	const handleSaveTask = () => {
		if (!title.trim() || !description.trim()) {
			console.log('Please fill in both title and description');
			return;
		}

		const newTask = {
			title: title.trim(),
			description: description.trim(),
			key: Date.now().toString(),
			status: false,
		};

		addTask(newTask);

		setTitle('');
		setDescription('');

		router.back();

		console.log('Task saved successfully!');
	};

	return (
		<View style={styles.container}>
			<ThemedTextInput
				placeholder='Enter Title'
				value={title}
				onChangeText={setTitle}
			/>
			<ThemedTextInput
				placeholder='Enter Description'
				value={description}
				onChangeText={setDescription}
			/>
			<ThemedButton
				onPress={handleSaveTask}
				title={'Save'}
				icon={true}
				iconName={'save'}
				buttonStyle={{ width: '90%' }}
			/>
		</View>
	);
};

export default CreateTask;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
