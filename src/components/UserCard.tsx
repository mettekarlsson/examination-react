import { Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <li className="flex flex-col gap-1 rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-xl font-bold text-slate-800">
                {user.profile.name}
            </h2>
            <p className="text-sm text-slate-500">@{user.username}</p>
            <p className="text-sm text-slate-600">{user.profile.email}</p>
            <Link
                to={`/users/${user.id}`}
                className="mt-3 w-fit rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
                More info
            </Link>
        </li>
    );
};
export default UserCard;
