import { type UUID } from "crypto"
import { useState, useRef } from "react"

interface User {
    id: number
    email: string
    phone: number
    name: string
    reserved: [
        {
            itemName: string, 
            itemReservedQuantity: number, 
            itemInStock: number, 
            itemPrice: number
        }
    ] | null
    reservedRef: React.MutableRefObject<HTMLDialogElement | null>;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([
        { id: 1, email: 'poop@poop.poop', phone: 8081234567, name: 'bob', reserved: [
            {itemName: "Red", itemReservedQuantity: 2, itemPrice: 999.99, itemInStock: 99}
        ], reservedRef: useRef<HTMLDialogElement>(null) },
        { id: 2, email: 'shishi@shi.shi', phone: 8087654321, name: 'tim', reserved: null, reservedRef: useRef<HTMLDialogElement>(null) }
    ])
    return (
        <>
            <div className="overflow-x-auto" h-screen>
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
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                {user.reserved ? (
                                    <td>
                                        <button className="px-2" onClick={() => user.reservedRef.current?.showModal()}>Reserved</button>
                                        <dialog className="modal" ref={user.reservedRef}>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Reservation</h3>
                                                <div className="form-control">
                                                    {user.reserved.map((cat) => (
                                                        <label className="label cursor-pointer" key={cat.itemName}>
                                                            <span className="label-text">{cat.itemName}</span>
                                                        </label>
                                                        
                                                    ))}
                                                </div>
                                                <div className="modal-action">
                                                    <button className="btn" >Close</button>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                ) : <td>No Reserves</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}