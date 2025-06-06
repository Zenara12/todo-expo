import { router, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemedButton from '../components/ThemedButton';

const RootLayout = () => {
	const route = useRouter();
	return (
		<>
			<StatusBar />
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						title: 'Task List',
						headerRight: () => (
							<ThemedButton
								onPress={() => {
									router.push('/createtask');
								}}
								title={'+'}
							/>
						),
					}}
				/>
				<Stack.Screen
					name='createtask'
					options={{
						title: 'Add Task',
						presentation: 'modal',
					}}
				/>
				<Stack.Screen
					name='viewupdatetask'
					options={{
						title: 'View & Update Task',
						presentation: 'modal',
					}}
				/>
			</Stack>
		</>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1e1e2f',
		paddingVertical: 14,
		paddingHorizontal: 24,
		borderRadius: 10,
		marginVertical: 10,
	},
	pressed: {
		opacity: 0.7,
	},
});
