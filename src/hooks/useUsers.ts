import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";

// Custom hook that wraps useQuery for the users data.
// All query settings live here, so UserPage and UserDetailPage share them
// (and the same cache) instead of repeating them.
// It returns the whole useQuery result, so the pages can pick what they need
// (data, isLoading, error) with destructuring.
const useUsers = () => {
    return useQuery({
        // Identifies the data in the cache. Same key = same cache,
        // which is why going from the list to a detail page does not trigger a new API call
        queryKey: ["usersCache"],
        queryFn: fetchUsers,

        // The data counts as fresh for 5 minutes (300000 ms), so no refetch in that time.
        staleTime: 300000,
        // Only one retry on failure
        retry: 1,
    });
};

export { useUsers };
