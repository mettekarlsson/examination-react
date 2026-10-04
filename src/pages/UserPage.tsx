import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../fetchUsers";
import UserList from "../components/UserList";

const UserPage = () => {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["usersCache"],
        queryFn: fetchUsers,
        staleTime: 300000,
    });

    if (isLoading) return <p>Laddar användare...</p>;
    if (error) return <p>Ett fel uppstod: {error.message}</p>;
    if (!users || users.length === 0) return <p>Inga användare hittades.</p>;
    return <UserList users={users} />;
};

export default UserPage;
