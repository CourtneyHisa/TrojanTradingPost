{/* 






















DELETE
THIS
PAGE























*/}
import React, { useRef, useState } from 'react';

interface Category {
    description: string;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    editRef: React.MutableRefObject<HTMLButtonElement | null>;
    confirmRef: React.MutableRefObject<HTMLButtonElement | null>;
}

export default function Categories() {
    const [categories, setCategories] = useState<Record<string, Category>>({
        "Red": { description: "It's red", inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) },
        "Green": { description: "It's green", inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) },
        "Blue": { description: "It's blue", inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) }
    });
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const editRef = useRef<HTMLButtonElement>(null)
    const confirmRef = useRef<HTMLButtonElement>(null)
    // adding a category
    const addCategory = () => {
        if (inputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategory = inputValue.trim();
                return {
                    ...prevState,
                    [newCategory]: { description: textareaValue.trim(), inputRef: inputRef, editRef: editRef, confirmRef: confirmRef }
                };
            });
            setInputValue('');
            setTextareaValue('');
        }
    };
    // removing a category
    const removeCategory = (category: string) => {
        setCategories(prevState => {
            const newCategories = { ...prevState };
            delete newCategories[category];
            return newCategories;
        });
    };
    // edit a category
    const editCategory = (category: string) => {
        const h2Element = document.getElementById(category);
        const inputRef = categories[category]?.inputRef;
        const editRef = categories[category]?.editRef;
        const confirmRef = categories[category]?.confirmRef;
        if (inputRef?.current) {
            inputRef.current.style.display = '';
        } else return console.error("Input error editCategory")
        if (editRef?.current) {
            editRef.current.style.display = 'none';
        } else return console.error("Edit error editcategory")
        if (confirmRef?.current) {
            confirmRef.current.style.display = ''
        } else return console.error("Confirm error editcategory")
        if (h2Element) {
            h2Element.style.display = 'none';
        } else return console.error("description error editCategory")
    };
    // confirm edit a category description
    const confirmEditCategory = (category: string) => {
        const editInputValue = categories[category]!.inputRef.current?.value;
        if (editInputValue && editInputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategories = { ...prevState };
                newCategories[category]!.description = editInputValue.trim();
                return newCategories;
            });
        } else {
            console.error("Edit input value cannot be empty");
        }
        categories[category]!.inputRef.current!.style.display = 'none';
        categories[category]!.confirmRef.current!.style.display = 'none';
        categories[category]!.editRef.current!.style.display = '';
        document.getElementById(category)!.style.display = ''
    };
    return (
        <>
            <div className="font-mhs">
                <table className="w-full">
                    <thead className="text-left">
                        <tr className="w-full border-b-2">
                            <th className="4/12 pb-2 pl-16">Name</th>
                            <th className="w-6/12">Description</th>
                            <th className="w-1/12">Edit</th>
                            <th className="w-1/12"></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Object.entries(categories).map(([category, { description, editRef, inputRef, confirmRef }], index) => (
                            <tr className="border-b-2" key={index}>
                                {/* Name */}
                                <td className="py-3 pl-16">{category}</td>
                                {/* Description */}
                                <td className="">
                                    <h2 className="" id={category} style={{ display: "" }}>{description}</h2>
                                    <input className="text-blue-700" ref={inputRef} style={{ display: "none" }} defaultValue={description} />
                                </td>
                                {/* Edit */}
                                <td className="">
                                    <button className='btn btn-sm btn-outline ' onClick={() => editCategory(category)} ref={editRef} style={{ display: "" }}>Edit</button>
                                    <button className='btn btn-circle bg-green-200 hover:bg-green-300 hover:border-green-400 border-green-200' onClick={() => confirmEditCategory(category)} style={{ display: "none" }} ref={confirmRef}>Save</button>
                                </td>
                                {/* Delete */}
                                <td className="">
                                    <button className="btn btn-error btn-sm" onClick={() => removeCategory(category)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className=''>
                            {/* Add name */}
                            <td className='py-3 pl-16 w-3/12 '>
                                <label className="form-control w-full max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Category name"
                                        className="input input-bordered w-full max-w-xs "
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                </label>
                            </td>
                            {/* Add description */}
                            <td>
                                <label className="form-control">
                                    <textarea
                                        className="input input-bordered w-full m-2 p-2"
                                        placeholder="Description"
                                        value={textareaValue}
                                        onChange={(e) => setTextareaValue(e.target.value)}
                                    ></textarea>
                                </label>
                            </td>
                            <td>
                            </td>
                            <td>
                                <button className="btn" onClick={addCategory}>Add Category</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                </div>
            </div>
        </>
    );
}