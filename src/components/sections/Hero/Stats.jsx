const Stats = () => {
    const stats = [
        {
            number: "10K+",
            label: "Students",
        },
        {
            number: "500+",
            label: "Teachers",
        },
        {
            number: "20+",
            label: "Countries",
        },
    ];

    return (
        <div className="flex flex-wrap gap-8 mt-10">
            {stats.map((item) => (
                <div key={item.label}>
                    <h2 className="text-3xl font-bold text-blue-600">
                        {item.number}
                    </h2>

                    <p className="text-slate-500">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Stats;