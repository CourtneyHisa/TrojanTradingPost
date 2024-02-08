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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>${'user.id'}</th>
                            <td>${'user.name'}</td>
                            <td>${'user.email'}</td>
                            <td>${'user.password'}</td>
                            <td>
                                <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                                    <li>
                                        <details>
                                            <summary>View Reserves</summary>
                                            <ul>
                                                <li><a>Reserve 1</a></li>
                                                <li><a>Reserve 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}