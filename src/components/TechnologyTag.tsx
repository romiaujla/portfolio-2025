const TechnologyTag = ({ technology }: { technology: string }) => {
  return (
    <div className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-md">
      {technology}
    </div>
  );
};

export default TechnologyTag;
