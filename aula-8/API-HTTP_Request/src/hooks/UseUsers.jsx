import { useEffect, useState } from "react";
import { getUsers } from "../api/userService";

const UseUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { users, loading };
};

export default UseUsers;
