// Props: the card receives a title and amount from StatsPage
interface StatCardProps {
    title: string;
    amount: number;
}

const StatCard = ({ title, amount }: StatCardProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-medium text-slate-500">{title}</h2>
            <p className="text-4xl font-bold text-slate-800">{amount}</p>
        </div>
    );
};

export default StatCard;
