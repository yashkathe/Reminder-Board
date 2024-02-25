import NewReminder from "./components/NewReminder";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSidebar />
            <NewReminder/>
		</main>
	);
}

export default App;
