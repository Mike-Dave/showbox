function MovieLayout({ children }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-y-4 md:gap-y-7 justify-between  p-4 max-w-full gap-3 ">
      {children}
    </section>
  );
}

export default MovieLayout;
