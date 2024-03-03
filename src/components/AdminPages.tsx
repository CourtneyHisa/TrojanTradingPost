import React, { useRef, useState } from 'react';

export function Home() {
    return (
        <>
            <div>
                <h2>Home</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item Request</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>${'reservation.id'}</th>
                            <td>${'reservation.item'}</td>
                            <td>${'reservation.contact'}</td>
                            <td>
                                <button className="btn btn-sm h-2">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

interface Item {
    id: number;
    name: string;
    price: number;
    in_stock: number;
    image: string;
    category: string[];
}

export function Products(): JSX.Element {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Red', price: 999.99, in_stock: 99, image: 'image', category: ['Red', 'Green', 'Blue'] },
        { id: 2, name: 'Green', price: 999.99, in_stock: 99, image: 'image', category: ['Red', 'Green', 'Blue'] },
        { id: 3, name: 'Blue', price: 999.99, in_stock: 99, image: 'image', category: ['Red', 'Green', 'Blue'] },
    ]);

    const [editableIndex, setEditableIndex] = useState<number>(-1);
    const [editedPrice, setEditedPrice] = useState<string>('');

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

    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In-Stock</th>
                            <th>Image</th>
                            <th>Categories</th>
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
                                </td>
                                <td>{item.in_stock}</td>
                                <td>
                                    <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                                </td>
                                <td>
                                    {item.category.join(', ')}
                                </td>
                                <td>
                                    {editableIndex !== index && (
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                    )}
                                    {editableIndex === index && (
                                        <button onClick={() => handleConfirmEdit(index)}>Confirm</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export function Users() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>${'user.id'}</th>
                            <td>${'user.name'}</td>
                            <td>${'user.email'}</td>
                            <td>${'user.password'}</td>
                            <td>
                                <button className="btn btn-sm h-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

interface Category {
    description: string;
    ref: React.MutableRefObject<HTMLInputElement | null>;
}

export function Categories() {
    const [categories, setCategories] = useState<Record<string, Category>>({
        "Red": { description: "It's red", ref: useRef<HTMLInputElement>(null) },
        "Green": { description: "It's green", ref: useRef<HTMLInputElement>(null) },
        "Blue": { description: "It's blue", ref: useRef<HTMLInputElement>(null) }
    });
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // adding a category
    const addCategory = () => {
        if (inputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategory = inputValue.trim();
                return {
                    ...prevState,
                    [newCategory]: { description: textareaValue.trim(), ref: inputRef }
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
        const inputRef = categories[category]!.ref;
        if (inputRef.current) {
            inputRef.current.style.display = '';
        }
    };

    // confirm edit a category description
    const confirmEditCategory = (category: string) => {
        const editInputValue = categories[category]!.ref.current?.value;
        if (editInputValue && editInputValue.trim() !== '') {
            setCategories(prevState => {
                const newCategories = { ...prevState };
                newCategories[category]!.description = editInputValue.trim();
                return newCategories;
            });
        } else {
            console.error("Edit input value cannot be empty");
        }

        categories[category]!.ref.current!.style.display = 'none';
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
                        {Object.entries(categories).map(([category, { description, ref }], index) => (
                            <tr key={index}>
                                <td>{category}</td>
                                <td>{description}</td>
                                <td>
                                    <button className='btn btn-circle' onClick={() => editCategory(category)}>Edit</button>
                                    <input ref={ref} style={{ display: "none" }}></input>
                                    <button className='btn btn-circle' onClick={() => confirmEditCategory(category)}>Confirm Edit</button>
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
