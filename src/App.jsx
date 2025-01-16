import { useEffect, useState } from 'react';
import Board from './components/Board';
import Input from './components/Input';

function App() {
	const [taskList, setTaskList] = useState([]);

	console.log(taskList);

	// Load tasks from local storage when the app loads
	useEffect(() => {
		const storedTasks = localStorage.getItem('taskList');
		console.log('Loaded tasks from localStorage:', storedTasks);
		if (storedTasks) {
			setTaskList(JSON.parse(storedTasks)); // Parse the JSON string back into an array
		}
	}, []);

	// Save tasks to local storage whenever the taskList changes
	useEffect(() => {
		console.log('Saving tasks to localStorage:', taskList);
		if (taskList.length > 0) {
			// Prevent overwriting with empty array
			localStorage.setItem('taskList', JSON.stringify(taskList));
		}
	}, [taskList]);

	return (
		<>
			<div className="flex flex-col items-center justify-center py-8 gap-4 w-full max-w-7xl mx-auto">
				<h1 className="text-3xl font-semibold">TODO Board</h1>
				<Input taskList={taskList} setTaskList={setTaskList} />
				<div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 w-full max-w-7xl">
					{/* Display tasks on board */}
					{taskList.map((task, index) => (
						<Board
							key={index}
							index={index}
							task={task}
							taskList={taskList}
							setTaskList={setTaskList}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
