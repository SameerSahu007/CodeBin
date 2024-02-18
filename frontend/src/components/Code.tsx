import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";
import { ToastContainer, toast } from 'react-toastify';
import {Editor } from '@monaco-editor/react';
import ThemeChoice from './ThemeChoice';
import LangChoice from './LangChoice';
import { useNavigate } from "react-router-dom";

export default function Code() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedtheme, setSelectedTheme] = useState("")
    const [selectedLang, setSelectedLang] = useState("")
    const [code, setCode] = useState(``);
    let params = useParams();
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

    useEffect(() => {
        axios.get(import.meta.env.VITE_GET_CODE_API, {
            params: {
                codeId: params.codeId
            }
        })
            .then(response => {
                setCode(response.data.code)
                setSelectedLang(response.data.language)
                setSelectedTheme(response.data.theme)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, []);

    return (
        <>
            {isLoading ?
                <div className='m-auto flex justify-center items-center h-screen font-mono'>
                    <div className='flex-row'>
                        <PacmanLoader
                            color="#dbdbdb"
                            size={25}
                            speedMultiplier={1}
                        />
                        <p className='text-xl text-[#dbdbdb] my-2'>Loading...</p>
                    </div>
                </div>

                :
                <div className=' m-auto font-firacode bg-[#292626] h-screen'>
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
                    className='p-2 bg-blue-600 text-white ' onClick={() =>navigate('/')}>Create New Paste</button>
          
                </div>
                <ToastContainer />
              </div>
              </div>
              }
       </>
    );
}
