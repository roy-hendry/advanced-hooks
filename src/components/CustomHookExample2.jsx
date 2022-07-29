import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
	// For just a single task that we are taking in by String format
	const [task, setTask] = useLocalStorage("task", "");
	// For potentially multiple tasks that we could be taking in by array format
	const [tasks, setTasks] = useLocalStorage("tasks", []);

	const onSubmit = (e) => {
		e.preventDefault();

		const taskObj = {
			task,
			completed: false,
			date: new Date().toLocaleDateString(),
		};

		setTasks([...tasks, taskObj]);
	};

	return (
		<>
			<div>
				<form className="w-50" onSubmit={onSubmit}>
					<div className="mb-3">
						<label className="form-label">Tasks</label>
						<input
							className="form-control"
							type="text"
							value={task}
							onChange={(e) => setTask(e.target.value)}
						/>
					</div>
					<button className="btn btn-primary" type="submit">
						Submit
					</button>
				</form>
				<hr />
				{tasks.map((task) => (
					// Using the date as the id because we don't have an id
					<h3 key={task.date}>{task.task}</h3>
				))}
			</div>
		</>
	);
}

export default CustomHookExample2;
