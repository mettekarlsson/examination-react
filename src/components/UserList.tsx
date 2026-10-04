import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <ul>
            {users.map(user => (
                <UserCard key={user.id} user={user}></UserCard>
            ))}
        </ul>
    );
};

export default UserList;
