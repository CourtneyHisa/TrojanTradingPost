import React, { useState } from 'react';

export default function Categories() {
    // State for categories_array
    const [categoriesArray, setCategoriesArray] = useState(["Red", "Green", "Blue"]);

    // State for input value
    const [inputValue, setInputValue] = useState('');

    // Function to handle adding a category
    const addCategory = () => {
        if (inputValue.trim() !== '') {
            setCategoriesArray(prevState => [...prevState, inputValue.trim()]);
            setInputValue(''); // Clear input value after adding
        }
    }

    // Function to handle removing a category
    const removeCategory = (index: number) => {
        setCategoriesArray(prevState => {
            const newArray = [...prevState];
            newArray.splice(index, 1);
            return newArray;
        });
    }

    return (
        <>
            <div>
                <h2>Categories</h2>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What would the name of the Category be?</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <button className="btn" onClick={addCategory}>Add Category</button>
            </div>
            <div>
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesArray.map((category, index) => (
                            <tr key={index}>
                                <td>{category}</td>
                                <td>
                                    <button className="btn btn-circle" onClick={() => removeCategory(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}