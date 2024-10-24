import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="text-cyan-500">ola mundo!</div>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
