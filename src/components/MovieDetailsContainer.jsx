function MovieDetailsContainer({ children }) {
  return (
    <div className="text-whiteColor p-4 flex flex-col gap-10 md:flex-row max-w-full flex-1 font-poppins static md:fixed">
      {children}
    </div>
  );
}

export default MovieDetailsContainer;
