import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";

const UserPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <p>Laddar användare...</p>;
    if (error) return <p>Ett fel uppstod: {error.message}</p>;
    if (!users || users.length === 0) return <p>Inga användare hittades.</p>;
    return <UserList users={users} />;
};

export default UserPage;
