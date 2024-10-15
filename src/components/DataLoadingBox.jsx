import { Skeleton } from "@nextui-org/react";

const DataLoadingBox = () => {
  return (
    <>
      <h2>Data Loading</h2>

      {/* Loop to render skeleton 10 times */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <Skeleton className="h-8 w-8 rounded-lg items-center" />
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-3 w-24 ml-2 rounded-lg" />
          </div>
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
          <Skeleton className="h-3 w-24 rounded-lg" />
        </div>
      ))}
    </>
  );
};

export default DataLoadingBox;
