import {Editor } from '@monaco-editor/react';
import ThemeChoice from './ThemeChoice';
import LangChoice from './LangChoice';
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function CodeEditor() {
  const [selectedtheme, setSelectedTheme] = useState("vs-dark")
  const [selectedLang, setSelectedLang] = useState("java")
  const [code, setCode] = useState(`public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}`);
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate();

  function handleEditorChange(value, event) {
    setCode(value)
  }

  function handleEditorDidMount(editor, monaco) {
    editor.updateOptions({
      fontFamily: 'Fira Code',
      fontSize: 15,
    });
  }

  function handleCopy() {
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

  const fetchID = async () => {

    const requestData = {
      theme: selectedtheme,
      language: selectedLang,
      code: code
    };

    const response = await axios.post(import.meta.env.VITE_FETCH_ID_API, requestData, {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total!) * 100);
        setProgress(progress)
      }
    });
    
    const pasteId: string = response.data
    navigate(`/paste/${pasteId}`);

  };


  return (
    <div className='m-auto'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className='border border-white p-1'>
      <Editor
        height="80vh"
        language={selectedLang}
        value={code}
        theme={selectedtheme}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        loading
        />
        </div>

      <div className='flex my-2 items-center'>
        <ThemeChoice setSelectedTheme={setSelectedTheme} />
        <LangChoice setSelectedLang={setSelectedLang} />
        <button
          className='p-1 bg-blue-600 text-white mx-2 '
          onClick={handleCopy}>Copy</button>
        <button
          className='p-1 bg-blue-600 text-white' onClick={fetchID}>Create Paste</button>
      </div>

      <ToastContainer />
    </div>
  )

}
