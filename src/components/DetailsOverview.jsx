function DetailsOverview({ overview }) {
  return (
    <div className="space-y-3">
      <h2 className=" text-poppins text-orangeColor  font-bold">Overview</h2>
      <p className="text-poppins max-w-2xl">{overview}</p>
    </div>
  );
}

export default DetailsOverview;
