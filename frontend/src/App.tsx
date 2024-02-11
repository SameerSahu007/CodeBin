import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
function App() {
  return( <>
  <div className=" m-auto font-firacode bg-[#292626] h-screen">
  <Navbar />
  <CodeEditor />
  </div>
  </>

  )
}
export default App;