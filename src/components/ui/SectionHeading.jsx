const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
                {subtitle}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeading;