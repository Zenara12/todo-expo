import { create } from 'zustand';

type Task = {
	title: string;
	description: string;
	key: string;
	status: boolean;
};

interface TaskState {
	tasks: Task[];
	addTask: (task: Task) => void;
	updateTask: (updatedTask: Task) => void;
	deleteTask: (key: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
	tasks: [],

	addTask: (task: Task) =>
		set((state) => ({
			tasks: [...state.tasks, task],
		})),

	updateTask: (updatedTask: Task) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.key === updatedTask.key ? updatedTask : task
			),
		})),

	deleteTask: (key: string) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.key !== key),
		})),
}));
