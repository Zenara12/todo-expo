import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface ThemedTextInputProps extends TextInputProps {
	value: string;
	onChangeText: (text: string) => void;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
	placeholder,
	value,
	onChangeText,
	secureTextEntry = false,
	...rest
}) => {
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor='#aaa'
			value={value}
			onChangeText={onChangeText}
			secureTextEntry={secureTextEntry}
			{...rest}
			style={styles.input}
		/>
	);
};

export default ThemedTextInput;

const styles = StyleSheet.create({
	input: {
		width: '90%',
		marginVertical: 10,
		backgroundColor: '#1e1e2f',
		padding: 15,
		borderRadius: 10,
		color: '#fff',
		borderWidth: 1,
		borderColor: '#333',
		fontSize: 16,
	},
});
