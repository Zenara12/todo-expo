import { Pressable, Text, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface ThemedButtonProps {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	icon: boolean;
	iconName?: keyof typeof Ionicons.glyphMap;
	iconSize?: number;
	buttonStyle?: object;
	iconStyle?: object;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
	title,
	onPress,
	disabled = false,
	icon = false,
	iconName,
	iconSize = 16,
	buttonStyle,
	iconStyle,
}) => {
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={({ pressed }) => [
				styles.button,
				pressed && styles.pressed,
				disabled && styles.disabled,
				buttonStyle,
			]}
		>
			<View style={styles.content}>
				{icon && (
					<Ionicons
						name={iconName}
						size={iconSize}
						style={[styles.icon, iconStyle]}
					/>
				)}
				<Text style={[styles.text]}>{title}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#1f2937',
		marginHorizontal: 14,
		paddingVertical: 14,
		paddingHorizontal: 14,
		borderRadius: 10,
		alignItems: 'center',
		marginVertical: 10,
	},
	text: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
	icon: {
		color: '#fff',
		marginHorizontal: 8,
	},
	pressed: {
		opacity: 0.7,
	},
	disabled: {
		backgroundColor: '#888',
	},
});

export default ThemedButton;
