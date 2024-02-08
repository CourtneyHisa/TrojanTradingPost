export default function Users() {
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
                            <th>Reserves</th>
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
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                            </td>
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