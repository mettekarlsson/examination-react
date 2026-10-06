import { PulseLoader } from "react-spinners";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";

const UserPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading)
        return (
            <div className="flex justify-center p-12">
                <PulseLoader color="#209b4a" speedMultiplier={0.75} />
            </div>
        );

    // API errors: error.message is the friendly message thrown in fetchUsers
    if (error)
        return (
            <div className="flex justify-center p-12">
                <p className="text-red-500">
                    Something went wrong: {error.message}
                </p>
            </div>
        );
    if (!users || users.length === 0)
        return (
            <div className="flex justify-center p-12">
                <p className="text-red-500">No users were found.</p>
            </div>
        );
    return <UserList users={users} />;
};

export default UserPage;
