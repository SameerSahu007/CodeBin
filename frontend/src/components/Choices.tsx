import { useState } from "react";


export default function Choices() {
    const [selectedValue, setSelectedValue] = useState('');

    // Event handler to update the selected value when an option is selected
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            {/* Dropdown select element */}
            <select value={selectedValue} onChange={handleSelectChange}>
                {/* Default option */}
                <option value="">Select an option</option>
                {/* Dropdown options */}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            {/* Display the selected value */}
            <p>Selected Value: {selectedValue}</p>
        </div>
    );
}
