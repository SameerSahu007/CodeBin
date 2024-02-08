import Editor from '@monaco-editor/react';
import Choices from './Choices';

export default function CodeEditor() {
  return(
    <div className='w-5/6 m-auto'>
          <Choices />
          <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment"  theme="vs-dark"/>  
    </div>
  )

}
