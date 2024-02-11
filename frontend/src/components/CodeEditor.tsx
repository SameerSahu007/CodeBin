import Editor from '@monaco-editor/react';
import ThemeChoice from './ThemeChoice';
import { useState, useRef } from "react";
import LangChoice from './LangChoice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CodeEditor() {
  const [selectedtheme, setSelectedTheme] = useState("vs-dark")
  const [selectedLang, setSelectedLang] = useState("java")
  const [code, setCode] = useState(`public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}`);

  function handleEditorChange(value, event) {
    setCode(value)
  }

  function handleEditorDidMount(editor, monaco) {
    editor.updateOptions({
      fontFamily: 'Fira Code', 
      fontSize: 15, 
    });
  }

  function handleCopy(){
    navigator.clipboard.writeText(code);
    toast.success('🦄 Copied!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className='m-auto'>
      <Editor
        height="80vh"
        language={selectedLang}
        value={code}
        theme={selectedtheme}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        loading
      />
      <div className='flex my-2'>
        <ThemeChoice setSelectedTheme={setSelectedTheme} />
        <LangChoice setSelectedLang={setSelectedLang} />
        <button
          className='p-2 bg-blue-600 text-white mx-2'
          onClick={handleCopy}>Copy</button>
        <button
          className='p-2 bg-blue-600 text-white'>Create Paste</button>

      </div>
      <ToastContainer />
    </div>
  )

}
