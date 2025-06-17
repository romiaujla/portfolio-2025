const TechnologyTag = ({
  technology,
  className,
}: {
  technology: string;
  className?: string;
}) => {
  return (
    <div className={`text-xs font-semibold px-2 py-1 rounded-md ${className}`}>
      {technology}
    </div>
  );
};

export default TechnologyTag;
