import { useState } from "react";

interface ThemeChoiceProps {
    setSelectedTheme: (theme: string) => void;
}

export default function Choices(props: ThemeChoiceProps) {
    const [selectedValue, setSelectedValue] = useState('option2');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const option:string = event.target.value;
        if(option === "option2"){
            props.setSelectedTheme("vs-dark")
        }
        else{
            props.setSelectedTheme("light")
        }
        setSelectedValue(event.target.value);
    };

    return (
        <div className="flex mr-2">
            <p className="mr-1 text-slate-100">Theme: </p>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">Theme</option>
                <option value="option1">light</option>
                <option value="option2">vs-dark</option>
            </select>
        </div>
    );
}
