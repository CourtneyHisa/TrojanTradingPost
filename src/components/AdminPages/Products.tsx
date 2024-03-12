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
    const categories = ["Red", "Green", "Blue"];
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Red', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 2, name: 'Green', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
        { id: 3, name: 'Blue', price: 999.99, in_stock: 99, image: null, category: [], selectedCategories: [], restock_date: new Date(), ref: useRef<HTMLDialogElement>(null) },
    ]);
    const [editableIndex, setEditableIndex] = useState<number>(-1);
    const [editedPrice, setEditedPrice] = useState<string>('');
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

    const handleEdit = (index: number): void => {
        setEditableIndex(index);
        setEditedPrice(items[index]!.price.toString());
    };

    const handleConfirmEdit = (index: number): void => {
        if (editedPrice !== '') {
            const updatedItems: Item[] = [...items];
            updatedItems[index]!.price = parseFloat(editedPrice);
            setItems(updatedItems);
            setEditableIndex(-1);
        }
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
            <div className="overflow-x-auto relative h-screen">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In-Stock</th>
                            <th>Image</th>
                            <th>Categories</th>
                            <th>Restock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    {editableIndex === index ? (
                                        <input type="number" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
                                    ) : (
                                        item.price
                                    )}
                                    {editableIndex !== index && (
                                        <button onClick={() => handleEdit(index)} className='px-2'>Edit Price</button>
                                    )}
                                    {editableIndex === index && (
                                        <button onClick={() => handleConfirmEdit(index)} className='px-2'>Confirm</button>
                                    )}
                                </td>
                                <td>{item.in_stock}</td>
                                <td>
                                    <td>
                                        {item.image ? (
                                            showImage ? (
                                                <img src={item.image} onClick={handleImageClick} />
                                            ) : (
                                                <button onClick={handleButtonClick}>Show Image</button>
                                            )
                                        ) : (<input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />)}
                                    </td>
                                </td>
                                <td>
                                    {item.category.length > 0 ? item.category.join(', ') : (<label>No Categories</label>)}
                                    <button className="px-2" onClick={() => item.ref.current?.showModal()} >Edit</button>
                                    <dialog className="modal" ref={item.ref}>
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
                                <td>
                                    <DatePicker
                                        showIcon
                                        toggleCalendarOnIconClick
                                        selected={item.restock_date}
                                        onChange={(date) => date ? newDate(index, date) : item.restock_date}
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