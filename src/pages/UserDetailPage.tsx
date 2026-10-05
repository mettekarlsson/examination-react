import { useParams } from "react-router-dom";
import UserDetailCard from "../components/UserDetailCard";
import { useUsers } from "../hooks/useUsers";

const UserDetailPage = () => {
    const { id } = useParams();
    const userId = Number(id);

    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <p>Laddar användare...</p>;
    if (error) return <p>Ett fel uppstod: {error.message}</p>;
    if (!users || users.length === 0) return <p>Inga användare hittades.</p>;

    const user = users.find(u => u.id === userId);
    if (!user) return <p>Ingen användare hittades.</p>;

    return <UserDetailCard user={user} />;
};

export default UserDetailPage;
