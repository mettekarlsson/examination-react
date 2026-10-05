import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../fetchUsers";

const useUsers = () => {
    return useQuery({
        queryKey: ["usersCache"],
        queryFn: fetchUsers,
        staleTime: 300000,
        retry: 1,
    });
};

export { useUsers };
