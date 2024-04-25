import { useState } from "react";

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
    const [emailSelected, setEmailSelected] = useState<string | null>(null)

    const handleViewReservations = (user: User) => {
        setSelectedUser(user);
    };

    const handleGoBack = () => {
        setSelectedUser(null);
    };

    const showEmailBlast = () => {
        const selected = document.getElementsByClassName("checkbox")
        for (let i=0;i<selected.length;i++) {
            const checking = selected.item(i) as HTMLInputElement
        }
    }

    const handleEmailBlast = () => {
        null
    };

    return (
        <>
            <div>
                <button className="btn" onClick={showEmailBlast}>Email Blast</button>
            </div>
            <div className="overflow-x-auto" style={{ height: "100vh" }}>
                {selectedUser ? (
                    <div>
                        <button onClick={handleGoBack}>Go Back</button>
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
                                            <button onClick={() => handleViewReservations(user)}>View Reservations</button>
                                        </td>
                                    ) : (
                                        <td>No Reserves</td>
                                    )}
                                    <td>
                                        <input type="checkbox" className="checkbox" onChange={handleEmailBlast} />
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
