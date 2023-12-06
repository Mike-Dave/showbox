function AddedMoviesLayout({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-10 gap-3 mt-4 w-[19.375rem] md:w-full justify-center items-center bg-gunMetalGray rounded-lg p-3">
      {children}
    </div>
  );
}

export default AddedMoviesLayout;
