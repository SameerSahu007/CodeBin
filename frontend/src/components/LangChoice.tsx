import { useState } from "react";

interface LangChoiceProps {
    setSelectedLang: (theme: string) => void;
}

export default function LangChoice(props: LangChoiceProps) {
    const [selectedValue, setSelectedValue] = useState('java');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const option:string = event.target.value;
        props.setSelectedLang(option)
        setSelectedValue(option);
    };

    return (
        <div className="flex mr-2">
            <p className="mr-1 text-slate-100">Language: </p>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">Language</option>
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="less">LESS</option>
                <option value="scss">SCSS</option>
                <option value="json">JSON</option>
                <option value="html">HTML</option>
                <option value="xml">XML</option>
                <option value="php">PHP</option>
                <option value="c#">C#</option>
                <option value="c++">C++</option>
                <option value="razor">Razor</option>
                <option value="markdown">Markdown</option>
                <option value="diff">Diff</option>
                <option value="java">Java</option>
                <option value="vb">VB</option>
                <option value="coffeescript">CoffeeScript</option>
                <option value="handlebars">Handlebars</option>
                <option value="batch">Batch</option>
                <option value="pug">Pug</option>
                <option value="f#">F#</option>
                <option value="lua">Lua</option>
                <option value="powershell">Powershell</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
                <option value="sass">SASS</option>
                <option value="r">R</option>
                <option value="objective-c">Objective-C</option>
            </select>
        </div>
    );
}
