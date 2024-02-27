import { useState } from "react";

import NewReminder from "./components/NewReminder";
import NoReminderSelected from "./components/NoReminderSelected";
import ProjectSidebar from "./components/ReminderSidebar";

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

	let content;

	if (reminderState.selectedReminderId === null) {
		// we want to add a new reminder
		content = <NewReminder />;
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
