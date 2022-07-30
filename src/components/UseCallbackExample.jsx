import React, { useState, useCallback } from "react";

// Made so the button doesn't need to be re-rendered each time it is pressed
// Can be very valuable to save processing power
// Used to optimize the rendering behaviour of react function components

function UseCallbackExample() {
	const [tasks, setTasks] = useState([]);

	const addTask = useCallback(() => {
		setTasks((prevState) => [...prevState, "Some Task"]);
	}, [setTasks]);

	return (
		<div>
			<Button addTask={addTask} />
			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</div>
	);
}

const Button = React.memo(({ addTask }) => {
	console.log("Button rendered");
	return (
		<div>
			<button className="btn btn-primary" onClick={addTask}>
				Add Task
			</button>
		</div>
	);
});

export default UseCallbackExample;
