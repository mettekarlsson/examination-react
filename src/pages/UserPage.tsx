import { PulseLoader } from "react-spinners";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";

const UserPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading)
        return <PulseLoader color="#209b4a" speedMultiplier={0.75} />;
    if (error) return <p>Something went wrong: {error.message}</p>;
    if (!users || users.length === 0) return <p>No users were found.</p>;
    return <UserList users={users} />;
};

export default UserPage;
