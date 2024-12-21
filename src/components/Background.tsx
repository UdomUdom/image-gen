export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient min-h-screen flex flex-col items-center justify-center h-full">
      <div className="wrapper max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center text-white mb-4"></h2>
        <div className="box grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg p-4 flex items-center justify-center bg-white bg-opacity-20"
            ></div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
