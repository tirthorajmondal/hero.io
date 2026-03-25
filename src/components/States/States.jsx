
import SectionHeading from './../SectionHeading/SectionHeading';
const States = () => {
    const statesData = [
        {
            title: "Total Downloads",
            value: "29.6M",
            description: "That Most Trusted Apps",
        },
        {
            title: "Daily Active Users",
            value: "906K",
            description: "Get Daily Engaged Users",
        },
        {
            title: "All New App Launched",
            value: "132+",
            description: "On Every 100 Launches",
        }
    ];

    return (
        <div className="bg-linear-to-br from-indigo-500 to-purple-500 py-20">
            <div className="mx-auto px-6 text-center">
                {/* <SectionHeading title="Trusted By Millions, Built For You" subtitle="
                " className="text-white!" /> */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Trusted By Millions, Built For You
                </h2>
                <div className="w-full md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        // state cardF
                        statesData.map((state, index) => <div key={index} className=" backdrop-blur-sm rounded-2xl p-8 shadow bg-linear-to-br from-white/10 to-[white/5]">
                            <p className="text-white/90 text-sm mb-2 font-medium">{state.title}</p>
                            <p className="text-5xl font-bold text-white mb-1">{state.value}</p>
                            <p className="text-white/70 text-sm">{state.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default States;