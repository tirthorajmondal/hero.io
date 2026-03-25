
const SectionHeading = ({ title, subtitle, className }) => {
    return (
        <div className={`mx-auto w-fit text-center ${className || ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
            <p className="text-base lg:text-lg text-slate-400 mt-1">{subtitle}</p>
        </div>
    );
};

export default SectionHeading;