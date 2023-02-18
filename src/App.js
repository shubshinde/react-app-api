import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<div className="container">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<h1>Rick & Morty - API</h1>
					<h5>React APP using ReactQuery</h5>
				</div>
				<QueryClientProvider client={queryClient}>
					<Characters />
				</QueryClientProvider>
			</div>
		</div>
	);
}

export default App;
