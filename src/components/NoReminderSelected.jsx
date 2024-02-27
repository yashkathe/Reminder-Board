import React from "react";

import logo from "../assets/no-projects.png";
import Button from "./Button";

const NoReminderSelected = ({onAddReminder}) => {
	return (
		<div className='mt-24 text-center w-2/3'>
			<img src={logo} alt='empty reminders' className="w-16 h-16 object-contain mx-auto"></img>
			<h2 className='text-xl font-bold text-stone-500 my-4'>
				No Reminder Selected
			</h2>
			<p className="text-stone-400 mb-4">Check your reminders or add a new new one</p>
			<p className="mt-8">
				<Button onClick={onAddReminder}>Create Reminder</Button>
			</p>
		</div>
	);
};

export default NoReminderSelected;
