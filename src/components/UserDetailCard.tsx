import type { User } from "../types/User";
import { Link } from "react-router-dom";

interface UserDetailCardProps {
    user: User;
}

const UserDetailCard = ({ user }: UserDetailCardProps) => {
    return (
        <>
            <h1>Profil</h1>
            <h2>
                Name: {user.profile.name}, Username: {user.username}, Email:{" "}
                {user.profile.email}
            </h2>
            <h4>Address</h4>
            <p>
                Street: {user.profile.address.street}, City:{" "}
                {user.profile.address.city}, Zip Code:{" "}
                {user.profile.address.zipCode}
            </p>
            <h4>Settings</h4>
            <p>
                Theme: {user.settings.theme}, Notifications:
                <p>Email: {user.settings.notifications.email ? "Ja" : "Nej"}</p>
                <p>Push: {user.settings.notifications.push ? "Ja" : "Nej"}</p>
            </p>
            <h4>Roles:</h4>
            <p>{user.roles.join(" - ")}</p>
            <Link to="/users">Back to User-List</Link>
        </>
    );
};

export default UserDetailCard;
