import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextStyle,
	Image,
	ImageSourcePropType,
} from 'react-native';

import ThemedButton from './ThemedButton';
import { Ionicons } from '@expo/vector-icons';

interface ThemedCardProps {
	title: string;
	description?: string;
	image?: ImageSourcePropType;
	titleStyle?: object | undefined;
	descriptionStyle?: object;
	styleCard?: object;
	iconName: keyof typeof Ionicons.glyphMap;
	updatePress: () => void;
	deletePress: () => void;
	viewupdatePress: () => void;
}

const ThemedCard: React.FC<ThemedCardProps> = ({
	title,
	description,
	image,
	titleStyle,
	descriptionStyle,
	styleCard,
	iconName,
	updatePress,
	deletePress,
	viewupdatePress,
}) => {
	return (
		<View style={[styles.card, styleCard]}>
			{image && <Image source={image} style={styles.image} />}
			<ThemedButton
				onPress={updatePress}
				title={' '}
				icon={true}
				iconName={iconName}
				buttonStyle={{ marginHorizontal: 10 }}
			/>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			{description && (
				<Text style={[styles.description, descriptionStyle]}>
					{description}
				</Text>
			)}
			<ThemedButton
				onPress={viewupdatePress}
				title={' '}
				icon={true}
				iconName={'eye'}
				iconStyle={{ color: '#ff6600' }}
				buttonStyle={{ marginLeft: 25 }}
			/>
			<ThemedButton
				onPress={deletePress}
				title={' '}
				icon={true}
				iconName={'trash-bin-outline'}
				iconStyle={{ color: '#e60008' }}
				buttonStyle={{ marginHorizontal: 10 }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#1f2937',
		borderRadius: 12,
		padding: 5,
		marginVertical: 10,
		marginHorizontal: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 5,
	},
	image: {
		width: '100%',
		height: 150,
		borderRadius: 8,
		marginBottom: 12,
	},
	title: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 6,
	},
	description: {
		color: '#d1d5db',
		fontSize: 14,
	},
});

export default ThemedCard;
