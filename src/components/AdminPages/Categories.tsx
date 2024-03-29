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
        const inputRef = categories[category]!.inputRef;
        const editRef = categories[category]!.editRef;
        const confirmRef = categories[category]!.confirmRef;
        if (inputRef.current) {
            inputRef.current.style.display = '';
        }
        if (editRef.current) {
            editRef.current.style.display = 'none';
        }
        if (confirmRef.current) {
            confirmRef.current.style.display = ''
        }
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
    };

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(categories).map(([category, { description, inputRef, editRef, confirmRef }], index) => (
                            <tr key={index}>
                                <td>{category}</td>
                                <td>{description}</td>
                                <td>
                                    <button className='btn btn-circle' onClick={() => editCategory(category)} ref={editRef} style={{ display: "" }}>Edit</button>
                                    <input ref={inputRef} style={{ display: "none" }}></input>
                                    <button className='btn btn-circle' onClick={() => confirmEditCategory(category)} style={{ display: "none" }} ref={confirmRef}>Confirm Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-circle" onClick={() => removeCategory(category)}>
                                        Delete
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