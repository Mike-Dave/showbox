function takeFirstElement(firstElement) {
  return firstElement.split("-")[0];
}
function hourAndMin(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}min`;
}

function TitleAndRuntime({ title, year, airDate, runtime }) {
  return (
    <div className="space-y-3">
      <h1 className="text-orangeColor font-bold text-poppins md:text-3xl">
        {title}
      </h1>
      <p className=" text-xs text-poppins">
        {year ? takeFirstElement(`${year}`) : takeFirstElement(`${airDate}`)}.
        {hourAndMin(runtime)}
      </p>
    </div>
  );
}

export default TitleAndRuntime;
