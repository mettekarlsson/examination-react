import type { User } from "../types/User";
import { Link } from "react-router-dom";

interface UserDetailCardProps {
    user: User;
}

const UserDetailCard = ({ user }: UserDetailCardProps) => {
    return (
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-black/10 bg-white p-8 shadow-md">
            <h1 className="text-3xl font-bold text-slate-800">
                {user.profile.name}
            </h1>
            <p className="text-slate-500">{user.username}</p>
            <p className="mb-6 text-slate-600">{user.profile.email}</p>

            <section className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-700">
                    Address
                </h2>
                <p className="text-slate-600">{user.profile.address.street}</p>
                <p className="text-slate-600">
                    {user.profile.address.zipCode} {user.profile.address.city}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-700">
                    Settings
                </h2>
                <p className="text-slate-600">
                    <span className="font-semibold text-slate-800">Theme:</span>{" "}
                    {user.settings.theme}
                </p>
                {/* React does not render booleans, so a ternary turns true/false into text.
                    The same ternary also picks the colour classes (green = on, red = off).
                    The text stays so colour is not the only thing telling them apart. */}
                <p className="mt-2 text-slate-600">
                    <span className="font-semibold text-slate-800">
                        Email-notifications:
                    </span>{" "}
                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                            user.settings.notifications.email
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {user.settings.notifications.email ? "Yes" : "No"}
                    </span>
                </p>
                <p className="mt-2 text-slate-600">
                    <span className="font-semibold text-slate-800">
                        Pushnotifications:
                    </span>{" "}
                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                            user.settings.notifications.push
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {user.settings.notifications.push ? "Yes" : "No"}
                    </span>
                </p>
            </section>
            <section>
                <h2 className="mb-2 text-lg font-semibold text-slate-700">
                    Roles:
                </h2>
                <div className="flex flex-wrap gap-2">
                    {user.roles.map(role => (
                        <span
                            key={role}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                        >
                            {role}
                        </span>
                    ))}
                </div>
            </section>
            <Link
                className="mt-8 inline-block font-semibold text-blue-600 transition-colors hover:text-blue-800"
                to="/users"
            >
                Back to User-List
            </Link>
        </div>
    );
};

export default UserDetailCard;
