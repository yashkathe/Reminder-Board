import { useState } from "react";

import NewReminder from "./components/NewReminder";
import NoReminderSelected from "./components/NoReminderSelected";
import ProjectSidebar from "./components/Sidebar";

function App() {
	const [reminderState, setReminderState] = useState({
		selectedReminderId: undefined, // neither adding a project, nor have we selected a project
		reminders: [],
	});

	const handleStartAddReminder = () => {
		setReminderState((prevState) => {
			return {
				...prevState,
				selectedReminderId: null,
			};
		});
	};

	// add new reminder to state
	const handleAddReminder = (reminder) => {
		setReminderState((prevState) => {
			const newReminder = {
				...reminder,
				id: Math.random(),
			};

			return {
				...prevState,
				reminders: [...prevState.reminders, newReminder],
			};
		});
	};

	// render content conditionally
	let content;

	if (reminderState.selectedReminderId === null) {
		// we want to add a new reminder
		content = <NewReminder onAdd={handleAddReminder} />;
	} else if (reminderState.selectedReminderId === undefined) {
		content = <NoReminderSelected onAddReminder={handleStartAddReminder} />;
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar onAddReminder={handleStartAddReminder} />
			{content}
		</main>
	);
}

export default App;
