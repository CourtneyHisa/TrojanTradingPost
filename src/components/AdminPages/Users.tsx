import { useRef, useState } from "react";

interface User {
    id: number;
    email: string;
    phone: number;
    name: string;
    reserved: { itemName: string; itemReservedQuantity: number; itemInStock: number; itemPrice: number }[] | null;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            email: "poop@poop.poop",
            phone: 8081234567,
            name: "bob",
            reserved: [{ itemName: "Red", itemReservedQuantity: 2, itemPrice: 999.99, itemInStock: 99 }],
        },
        { id: 2, email: "shishi@shi.shi", phone: 8087654321, name: "tim", reserved: null },
    ]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const emailModal = useRef<HTMLDialogElement>(null)
    const emailModalText = useRef<HTMLTextAreaElement>(null)
    const [emailText, setEmailText] = useState<string>("")
    const [emailSelected, setEmailSelected] = useState<string[]>([])
    const showEmailBlast = () => {
        null
    }

    return (
        <>
            <div>
                {emailSelected.length != 0 ? (
                    <>
                        <button className="btn" onClick={() => emailModal.current?.showModal()}>Email Blast</button>
                        <dialog id="my_modal_4" className="modal" ref={emailModal}>
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Email Blasting</h3>
                                <p className="py-4">Sending to {emailSelected.join(", ")}</p>
                                <textarea
                                    placeholder="Type Here"
                                    ref={emailModalText}
                                    onChange={cat => setEmailText(cat.target.value)}
                                    className="textarea textarea-bordered"
                                ></textarea>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Send</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </>
                ) : (<button className="btn" disabled>Email Blast</button>)}
            </div>
            <div className="overflow-x-auto" style={{ height: "100vh" }}>
                {selectedUser ? (
                    <div>
                        <button onClick={() => setSelectedUser(null)}>Go Back</button>
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Reserved Quantity</th>
                                    <th>In Stock</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedUser.reserved?.map((reservation, index) => (
                                    <tr key={index}>
                                        <td>{reservation.itemName}</td>
                                        <td>{reservation.itemReservedQuantity}</td>
                                        <td>{reservation.itemInStock}</td>
                                        <td>{reservation.itemPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Phone</th>
                                <th>Reserved</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    {user.reserved ? (
                                        <td>
                                            <button onClick={() => setSelectedUser(user)}>View Reservations</button>
                                        </td>
                                    ) : (
                                        <td>No Reserves</td>
                                    )}
                                    <td>
                                        <input type="checkbox" className="checkbox" onChange={() => setEmailSelected(prevState => [...prevState, user.email])} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

            </div>
        </>
    );
}
