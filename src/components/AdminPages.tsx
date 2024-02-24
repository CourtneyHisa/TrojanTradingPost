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

export function Products() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In-Stock</th>
                            <th>Image</th>
                            <th>Catgories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>${'item.name'}</td>
                            <td>
                                <input type="number" id="price" name="price" placeholder="0" step="0.01" min="0" max="10" />
                            </td>
                            <td>${'item.in_stock'}</td>
                            {/* if there is a image it would most likely have a link to the image */}
                            <td>
                                {/* Should make it that if there is no image have the option to upload one.
                                If not, maybe just add the ability to replace it or just leave it */}
                                {/* {!item.image ? (
                                    <form action='/action_page.php'>
                                        <input type="file" id="myFile" name="filename"></input>
                                        <input type="submit" className="btn btn-sm h-2" />
                                    </form>) : null} */}
                                <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                            </td>
                            <td>
                                {/* // v0 by Vercel.
                                // https://v0.dev/t/UhVw2HRszVg */}
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shrink-0"
                                    type="button"
                                    id="radix-:rq:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    Category{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="w-4 h-4 ml-2"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
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

export function Categories() {
    const [categoriesArray, setCategoriesArray] = useState(["Red - It's red", "Green - It's green", "Blue - It's Blue"]);
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const editButtonRef = useRef<HTMLButtonElement>(null)

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

    // edit a category
    const editCategory = () => {
        if (inputRef.current) {
            if (inputRef.current.style.display == 'none') {
                inputRef.current.style.display = ''
            } else {
                console.error("input hiding error editCategory")
            }
            if (editButtonRef.current) {
                if (inputRef.current.style.display == '') {
                    editButtonRef.current.style.display = 'none'
                } else {
                    console.error("button hiding error editCategory")
                }
            }
        }
        // const entry = categoriesArray[index]?.split(' - ')
        // if (entry) {
        //     return
        // }
    }

    const confirmEditCategory = (index: number) => {

        if (editInputValue != '') {
            console.log(editInputValue);
            if (categoriesArray) {
                const newArray = categoriesArray
                if (newArray) {
                    const newString = newArray[index].split(" - ")
                    newString[1] == editInputValue
                    newArray[index] == newString?.join(" - ")
                    console.log(newArray)
                    setCategoriesArray(newArray)
                }
            }
        }

        if (inputRef.current) {
            if (inputRef.current.style.display == '') {
                inputRef.current.style.display = 'none'
            } else {
                console.error("input hiding error editCategory")
            }
            if (editButtonRef.current) {
                if (inputRef.current.style.display == 'none') {
                    editButtonRef.current.style.display = ''
                } else {
                    console.error("button hiding error editCategory")
                }
            }
        }
        return
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesArray.map((category, index) => (
                            <tr key={index}>
                                <td>{category.split(' - ')[0]}</td>
                                <td>{category.split(' - ')[1]}</td>
                                <td>
                                    <button className='btn btn-circle' onClick={editCategory} ref={editButtonRef} style={{ display: "" }}>Edit</button>
                                    <input id='editId' onChange={(e) => setEditInputValue(e.target.value)} ref={inputRef} style={{ display: "none" }}></input>
                                    <button className='btn btn-circle' onClick={() => confirmEditCategory(index)}></button>
                                </td>
                                <td>
                                    <button className="btn btn-circle" onClick={() => removeCategory(index)}>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
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