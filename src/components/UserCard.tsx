import { Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <li>
            <h1>Name: {user.profile.name}</h1>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.profile.email}</h4>
            <Link to={`/users/${user.id}`}>Läs mer</Link>
        </li>
    );
};
export default UserCard;
