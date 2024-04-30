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

export default function Products() {
    const categories = ["Red", "Green", "Blue", "Spacing test a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a"];
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Red', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 2, name: 'Green', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 3, name: 'Blue', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 3, name: 'Spacing test a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
    ]);
    const [showImage, setShowImage] = useState(false);

    const handleImageClick = () => {
        setShowImage(false);
    };

    const handleButtonClick = () => {
        setShowImage(true);
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

    return (
        <>
            <div className="overflow-x-auto relative h-screen font-mhs">
                <table className="w-full">
                    <thead className="text-left">
                        <tr className="border-b-2">
                            {/* <th className='w-1/12 pb-2 pl-16'>#</th> */}
                            <th className='w-3/12 pb-2 pl-16 pr-4'>Name</th>
                            <th className='w-1/12 pb-2'>Price</th>
                            <th className='w-1/12 pb-2'>In-Stock</th>
                            <th className='w-1/12 pb-2'>Image</th>
                            <th className='w-3/12 pb-2 pr-4'>
                                Categories
                                <button className='ml-4 text-blue-500 btn btn-sm btn-outline ' >
                                    Add / Remove 
                                </button>
                            </th>
                            <th className="w-1/12">
                                Select Categories
                            </th>
                            <th className='w-1/12 pr-16'>Restock</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {items.map((item, index) => (
                            <tr key={item.id} className="border-b-2">
                                {/* ID */}
                                {/* <td className="w-1/12 py-3 pl-16">{index + 1}</td> */}
                                {/* Name */}
                                <td className="w-2/12 py-3 pl-16 pr-4">
                                    {item.name}
                                </td>
                                {/* Price  */}
                                <td className="w-1/12 py-3">
                                    $ {item.price}
                                </td>
                                {/* Stock */}
                                <td className="w-1/12 py-3">{item.in_stock}</td>
                                {/* Image */}
                                <td className="w-1/12 py-3">
                                    <button
                                        className="btn-sm btn-outline btn"
                                        onClick={handleButtonClick}>
                                        Show Image</button>
                                </td>
                                {/* Categories */}
                                <td className="w-3/12 py-3 pr-4">
                                    {item.category.length > 0 ? item.category.join(" / ") : (<label>No Categories</label>)}
                                </td>
                                {/* Edit button */}
                                <td className='w-1/12 py-3'>
                                    <button className="px-2 btn btn-sm btn-outline text-blue-500 " onClick={() => item.ref.current?.showModal()} >Select</button>
                                    <dialog className="modal " ref={item.ref}>
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Choose Categories</h3>
                                            <div className="form-control">
                                                {categories.map(category => (
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
                                <td className="w-1/12 text-blue-500 py-3 pr-16">
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