//New package for the importing class names
// import { classnames } from "classnames";
function DashOverviewCompo(props) {
  //   const classStr = classnames(
  //     "flex flex-col p-6 w-full text-white rounded-lg",
  //     props.backgroundColor
  //   );

  return (
    <div className="flex flex-col p-6 w-full text-white rounded-lg bg-teal-500">
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
