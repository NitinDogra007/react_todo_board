import { useState } from 'react';

function Input({ taskList, setTaskList }) {
	const [input, setInput] = useState('');

	function handleAddTask(e) {
		e.preventDefault();
		// Trim the input to remove leading/trailing spaces and check if it's not empty
		if (input.trim() === '') {
			alert('Task cannot be empty!'); // Optional: Provide feedback to the user
			return;
		}
		setTaskList([...taskList, input.trim()]); // Add trimmed input to the task list
		setInput(''); // Clear the input field
	}

	return (
		<>
			<form className="flex flex-row items-center gap-3">
				<input
					className="border rounded-lg py-1.5 px-2.5 text-lg"
					type="text"
					placeholder="Add a Task"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					className="bg-violet-400 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-70"
					onClick={handleAddTask}
				>
					Add
				</button>
			</form>
		</>
	);
}

export default Input;
