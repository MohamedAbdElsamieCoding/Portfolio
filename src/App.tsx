import HomePage from "./components/HomePage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <HomePage />
    </>
  );
}

export default App;
