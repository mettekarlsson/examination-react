import { useParams } from "react-router-dom";
import UserDetailCard from "../components/UserDetailCard";
import { useUsers } from "../hooks/useUsers";
import { PulseLoader } from "react-spinners";

const UserDetailPage = () => {
    const { id } = useParams();
    const userId = Number(id);

    const { data: users, isLoading, error } = useUsers();

    if (isLoading)
        return <PulseLoader color="#209b4a" speedMultiplier={0.75} />;
    if (error) return <p>Something went wrong: {error.message}</p>;
    if (!users || users.length === 0) return <p>No users were found.</p>;

    const user = users.find(u => u.id === userId);
    if (!user) return <p>No user was found.</p>;

    return <UserDetailCard user={user} />;
};

export default UserDetailPage;
