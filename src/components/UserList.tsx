import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        // 1 column on mobile, 2 on small screens (sm) and 3 on large screens (lg)
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map(user => (
                <UserCard key={user.id} user={user}></UserCard>
            ))}
        </ul>
    );
};

export default UserList;
