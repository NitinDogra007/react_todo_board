function Board({ task, index, taskList, setTaskList }) {
	function handleDelete() {
		// we'll create a new array that will copy the prop task list
		const [...newTasks] = taskList;
		newTasks.splice(index, 1);
		setTaskList(newTasks);
	}

	return (
		<>
			<div className="max-w-md w-full rounded-xl flex flex-col items-center justify-start border text-center text-lg pt-3 pb-4 px-4 md:px-6">
				<p>{task}</p>
				<button
					className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</>
	);
}
export default Board;
