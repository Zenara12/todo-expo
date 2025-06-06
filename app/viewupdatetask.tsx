import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useTaskStore } from '../stores/useTaskStore';

import ThemedTextInput from '../components/ThemedTextInput';
import ThemedButton from '../components/ThemedButton';

const ViewUpdateTask = () => {
	const { taskKey, taskTitle, taskDescription, taskStatus } =
		useLocalSearchParams();
	const router = useRouter();

	const [title, setTitle] = useState((taskTitle as string) || '');
	const [description, setDescription] = useState(
		(taskDescription as string) || ''
	);

	const updateTask = useTaskStore((state) => state.updateTask);

	const handleUpdateTask = () => {
		if (!title.trim() || !description.trim()) {
			console.log('Please fill in both title and description');
			return;
		}

		const newTask = {
			title: title.trim(),
			description: description.trim(),
			key: taskKey as string,
			status: taskStatus === 'true' ? true : false,
		};

		updateTask(newTask);

		setTitle('');
		setDescription('');

		router.back();

		console.log('Task updated successfully!');
	};

	return (
		<View style={styles.container}>
			<ThemedTextInput
				placeholder='Update Title'
				value={title}
				onChangeText={setTitle}
			/>
			<ThemedTextInput
				placeholder='Update Description'
				value={description}
				onChangeText={setDescription}
			/>
			<ThemedButton
				onPress={handleUpdateTask}
				title={'Update'}
				icon={true}
				iconName={'save'}
				buttonStyle={{ width: '90%' }}
			/>
		</View>
	);
};

export default ViewUpdateTask;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
