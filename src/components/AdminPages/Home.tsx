export default function Home() {
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