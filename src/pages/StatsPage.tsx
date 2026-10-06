import { PulseLoader } from "react-spinners";
import { useUsers } from "../hooks/useUsers";
import StatCard from "../components/StatCard";

const StatsPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading)
        return (
            <div className="flex justify-center p-12">
                <PulseLoader color="#209b4a" speedMultiplier={0.75} />
            </div>
        );

    // API errors: error.message is the friendly message thrown in fetchUsers
    if (error)
        return (
            <div className="flex justify-center p-12">
                <p className="text-red-500">
                    Something went wrong: {error.message}
                </p>
            </div>
        );
    if (!users || users.length === 0)
        return (
            <div className="flex justify-center p-12">
                <p className="text-red-500">No users were found.</p>
            </div>
        );

    const userAmount = users.length;

    const adminAmount = users.filter(u => u.roles.includes("admin")).length;

    const emailAmount = users.filter(
        u => u.settings.notifications.email,
    ).length;

    const pushAmount = users.filter(u => u.settings.notifications.push).length;

    const darkAmount = users.filter(u => u.settings.theme === "dark").length;

    const lightAmount = users.filter(u => u.settings.theme === "light").length;

    const statsArray = [
        {
            title: "Total user amount",
            amount: userAmount,
        },
        {
            title: "Total admin amount",
            amount: adminAmount,
        },
        {
            title: "Users with email-notifications activated",
            amount: emailAmount,
        },
        {
            title: "Users with push-notifications activated",
            amount: pushAmount,
        },
        {
            title: "Users with dark theme",
            amount: darkAmount,
        },
        {
            title: "Users with light theme",
            amount: lightAmount,
        },
    ];

    return (
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-3xl font-bold text-slate-800">
                Statistics
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {statsArray.map(stat => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        amount={stat.amount}
                    ></StatCard>
                ))}
            </div>
        </div>
    );
};

export default StatsPage;
