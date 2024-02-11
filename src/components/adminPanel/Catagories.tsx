import React, { useState } from 'react';

export default function Categories() {
    const [categoriesArray, setCategoriesArray] = useState(["Red - It's red", "Green - It's green", "Blue - It's Blue"]);
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    // adding a category
    const addCategory = () => {
        if (inputValue.trim() !== '') {
            const newCategory = inputValue.trim() + (textareaValue.trim() ? ` - ${textareaValue.trim()}` : '');
            setCategoriesArray(prevState => [...prevState, newCategory]);
            setInputValue(''); 
            setTextareaValue(''); 
        }
    }

    // removing a category
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
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Description</span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Type Here"
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                    ></textarea>
                    <div className="label"></div>
                </label>
                <button className="btn" onClick={addCategory}>Add Category</button>
            </div>
            <div>
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesArray.map((category, index) => (
                            <tr key={index}>
                                <td>{category.split(' - ')[0]}</td>
                                <td>{category.split(' - ')[1]}</td> 
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