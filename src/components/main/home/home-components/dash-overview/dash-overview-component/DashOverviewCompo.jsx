function DashOverviewCompo(props) {
  //   console.log(props.icon);
  return (
    <div className="flex flex-col bg-teal-500 p-6 w-full text-white rounded-lg">
      <div>
        <div className="dash-icon">
          <props.icon />
        </div>
        <div>
          <p className="mb-3 text-base font-medium text-gray-50">
            {props.title}
          </p>
          <p className="text-3xl font-bold leading-none text-gray-50">
            ${props.amount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashOverviewCompo;
