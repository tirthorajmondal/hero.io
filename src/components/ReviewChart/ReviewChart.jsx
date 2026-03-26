import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ReviewChart = ({ ratings=[] }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8" >
            {/* <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2> */}
            <ResponsiveContainer width="100%" height={280}>
                <BarChart data={[...ratings].reverse()} layout="vertical"  >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={60} />
                    <Tooltip
                        formatter={(value) => value.toLocaleString()}
                        contentStyle={{ borderRadius: '8px', border: '1px solid #6B7280' }}
                    />
                    <Bar dataKey="count" fill="#FB923C" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default ReviewChart;