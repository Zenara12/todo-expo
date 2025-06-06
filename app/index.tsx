import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';

import ThemedCard from '../components/ThemedCard';
import { useTaskStore } from '../stores/useTaskStore';

type Task = {
	title: string;
	description: string;
	key: string;
	status: boolean;
};

const Home = () => {
	const tasks = useTaskStore((state) => state.tasks);
	const updateTask = useTaskStore((state) => state.updateTask);
	const deleteTask = useTaskStore((state) => state.deleteTask);

	const router = useRouter();

	const handleUpdateTaskStatus = (task: Task) => {
		task.status = !task.status;
		const updatedTask = {
			...task,
		};

		updateTask(updatedTask);
		console.table(updatedTask);
	};

	const handleDeleteTask = (key: string) => {
		Alert.alert(
			'Delete Task',
			'Are you sure you want to delete this?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
						deleteTask(key);
						console.log('Task Deleted!');
					},
				},
			],
			{ cancelable: true }
		);
	};

	return (
		<View style={styles.container}>
			{tasks.length === 0 ? (
				<Text style={styles.addTask}>Add a task to get started</Text>
			) : (
				<FlatList
					data={tasks}
					keyExtractor={(item) => item.key}
					renderItem={({ item }) => (
						<ThemedCard
							updatePress={() => handleUpdateTaskStatus(item)}
							deletePress={() => handleDeleteTask(item.key)}
							viewupdatePress={() =>
								router.push({
									pathname: '/viewupdatetask',
									params: {
										taskKey: item.key,
										taskTitle: item.title,
										taskDescription: item.description,
										taskStatus: item.status.toString(),
									},
								})
							}
							title={item.title}
							iconName={item.status ? 'checkbox' : 'square-outline'}
							titleStyle={
								item.status ? { textDecorationLine: 'line-through' } : undefined
							}
							styleCard={{
								width: '95%',
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						/>
					)}
				/>
			)}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	addTask: {
		marginTop: 20,
		fontSize: 16,
		color: '#4f46e5',
	},
});
