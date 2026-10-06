import { useParams } from "react-router-dom";
import UserDetailCard from "../components/UserDetailCard";
import { useUsers } from "../hooks/useUsers";
import { PulseLoader } from "react-spinners";

const UserDetailPage = () => {
    // useParams returns the :id from the URL, always as a string (or undefined)
    const { id } = useParams();

    // Converted to a number so it can be compared with user.id (a number).
    // Something like /users/abc becomes NaN, which matches no user and is handled below
    const userId = Number(id);

    const { data: users, isLoading, error } = useUsers();

    if (isLoading)
        return (
            <div className="flex justify-center p-12">
                <PulseLoader color="#209b4a" speedMultiplier={0.75} />
            </div>
        );

    // API errors: error.message is the friendly message thrown in fetchUsers.
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

    // find returns undefined if no user has that id (e.g. /users/999)
    const user = users.find(u => u.id === userId);
    if (!user)
        return (
            <div className="flex justify-center p-12">
                <p className="text-red-500">No user was found.</p>
            </div>
        );

    return <UserDetailCard user={user} />;
};

export default UserDetailPage;
