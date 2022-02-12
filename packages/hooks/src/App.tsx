import { AppLayout } from "./components/app-layout";
import { Trip } from "./components/trip";

function App() {
  return (
    <AppLayout>
      <Trip />
      <Trip />
      <Trip />
      <Trip />
    </AppLayout>
  );
}

export default App;
