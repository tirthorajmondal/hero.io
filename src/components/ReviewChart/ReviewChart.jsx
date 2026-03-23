import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ReviewChart = ({ ratings }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8" >
            <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2>
            <ResponsiveContainer width="100%" height={280} >
                <BarChart data={[...ratings].reverse()} layout="vertical" >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis type="category" dataKey="name" tick={{ fill: '#6B7280', fontSize: 12 }} width={60} />
                    <Tooltip
                        formatter={(value) => value.toLocaleString()}
                        contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
                    />
                    <Bar dataKey="count" fill="#FB923C" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default ReviewChart;