import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Item {
    id: number;
    name: string;
    price: number;
    in_stock: number;
    image: string | null;
    category: string[];
    selectedCategories: string[];
    restock_date: Date
    ref: React.MutableRefObject<HTMLDialogElement | null>;
}

interface Category {
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    editRef: React.MutableRefObject<HTMLButtonElement | null>;
    confirmRef: React.MutableRefObject<HTMLButtonElement | null>;
}

export default function Products() {
    const [categories, setCategories] = useState<Record<string, Category>>({
        "Red": { inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) },
        "Green": { inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) },
        "Blue": { inputRef: useRef<HTMLInputElement>(null), editRef: useRef<HTMLButtonElement>(null), confirmRef: useRef<HTMLButtonElement>(null) }
    });
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Red', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 2, name: 'Green', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 3, name: 'Blue', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
    ]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const editRef = useRef<HTMLButtonElement>(null)
    const confirmRef = useRef<HTMLButtonElement>(null)
    const editCategory = useRef<HTMLDialogElement>(null)
    // adding a category
    const addCategory = () => {
        if (inputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategory = inputValue.trim();
                return {
                    ...prevState,
                    [newCategory]: { inputRef: inputRef, editRef: editRef, confirmRef: confirmRef }
                };
            });
            setInputValue('');
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
    const handleButtonClick = () => {
        null
    };

    const handleCategoryChange = (category: string, index: number) => {
        console.log(category, index)
        const updatedItems = [...items];
        const item = updatedItems[index];
        if (item!.selectedCategories.includes(category)) {
            item!.selectedCategories = item!.selectedCategories.filter(cat => cat !== category);
        } else {
            item!.selectedCategories.push(category);
        }
        setItems(updatedItems);
    };

    const categoryEdit = (index: number) => {
        const updatedItems = [...items];
        updatedItems[index]!.category = updatedItems[index]!.selectedCategories; // Update category based on selectedCategories
        setItems(updatedItems);
        items[index]?.ref.current?.close()
    };

    const newDate = (index: number, date: Date) => {
        if (date) {
            const updatedItems = [...items]
            const item = updatedItems[index]
            item!.restock_date = date
            setItems(updatedItems)
        }
    }

    const handleEditCategory = (category: string) => {
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

    const handleCategoryEdit = (category: string) => {
        const editInputValue = categories[category]!.inputRef.current?.value;
        if (editInputValue && editInputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategories = { ...prevState };
                delete newCategories[category]
                Object.assign(newCategories, { [editInputValue]: { inputRef: inputRef, editRef: editRef, confirmRef: confirmRef } })
                return newCategories;
            });
        } else {
            console.error("Edit input value cannot be empty");
        }
        categories[category]!.inputRef.current!.style.display = 'none';
        categories[category]!.confirmRef.current!.style.display = 'none';
        categories[category]!.editRef.current!.style.display = '';
        document.getElementById(category)!.style.display = ''
    }

    return (
        <>
            <div>
                <dialog className="modal" ref={editCategory}>
                    <div className="mockup-window border bg-base-300">
                        <div className="flex px-96 py-64 bg-base-200 ">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Edit</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(categories).map(([category, { editRef, inputRef, confirmRef }], index) => (
                                        <tr className="" key={index}>
                                            <td className="">
                                                <h2 className="" id={category} style={{ display: "" }}>{category}</h2>
                                                <input className="" ref={inputRef} style={{ display: "none" }} defaultValue={category} />
                                            </td>
                                            <td className="">
                                                <button className='btn' onClick={() => handleEditCategory(category)} ref={editRef} style={{ display: "" }}>Edit</button>
                                                <button className='btn' onClick={() => handleCategoryEdit(category)} style={{ display: "none" }} ref={confirmRef}>Save</button>
                                            </td>
                                            <td className="">
                                                <button className="btn" onClick={() => removeCategory(category)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr >
                                        <td>
                                            <label className="form-control w-full max-w-xs">
                                                <input
                                                    type="text"
                                                    placeholder="Category name"
                                                    className="input input-bordered w-full max-w-xs"
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                />
                                            </label>
                                        </td>
                                        <td>
                                            <button className="btn" onClick={addCategory}>Add Category</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-action">
                            <button className="btn" onClick={() => editCategory.current?.close()}>Save</button>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="overflow-x-auto relative h-screen font-mhs">
                <table className="w-full">
                    <thead className="text-left">
                        <tr className="border-b-2">
                            <th className='w-1/12 pb-2 pl-16'>#</th>
                            <th className='w-2/12'>Name</th>
                            <th className='w-1/12'>Price</th>
                            <th className='w-1/12'>In-Stock</th>
                            <th className='w-1/12'>Image</th>
                            <th className='w-3/12'>Categories <button className='px-2 text-blue-500 -mr-28' onClick={() => editCategory.current?.showModal()}>Edit</button></th>
                            <th className='w-1/12 pr-16'>Restock</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {items.map((item, index) => (
                            <tr key={item.id} className="border-b-2">
                                {/* ID */}
                                <td className="w-1/12 py-3 pl-16">{index + 1}</td>
                                {/* Name */}
                                <td className="w-2/12">
                                    {item.name}
                                </td>
                                {/* Price  */}
                                <td className="w-1/12">
                                    $ {item.price}
                                </td>
                                {/* Stock */}
                                <td className="w-1/12">{item.in_stock}</td>
                                {/* Image */}
                                <td className="w-1/12">
                                    <button
                                        className="btn-sm btn-outline btn"
                                        onClick={handleButtonClick}>
                                        Show Image</button>
                                </td>
                                {/* Categories */}
                                <td className="w-3/12">
                                    {item.category.length > 0 ? item.category.join(" / ") : (<label>No Categories</label>)}
                                    <button className="px-2 text-blue-500 -mr-28" onClick={() => item.ref.current?.showModal()} >Edit</button>
                                    <dialog className="modal " ref={item.ref}>
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Choose Categories</h3>
                                            <div className="form-control">
                                                {Object.entries(categories).map(([category], index) => (
                                                    <label className="label cursor-pointer" key={category}>
                                                        <span className="label-text">{category}</span>
                                                        <input type="checkbox" className="checkbox" checked={item.selectedCategories.includes(category)} onChange={() => handleCategoryChange(category, index)} />
                                                    </label>
                                                ))}
                                            </div>
                                            <div className="modal-action">
                                                <button className="btn" onClick={() => categoryEdit(index)} >Save</button>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                {/* Restock */}
                                <td className="w-1/12 text-blue-500 pr-16">
                                    <DatePicker
                                        showIcon
                                        toggleCalendarOnIconClick
                                        selected={item.restock_date}
                                        onChange={(date) => date ? newDate(index, date) : item.restock_date}
                                        className='-mr-20'
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}