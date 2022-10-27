function DashOrderCompo(props) {
  return (
    <div className="flex h-full min-w-0 rounded-lg ring-1 ring-black ring-opacity-20 overflow-hidden bg-white">
      <div className="p-4 flex items-center flex-col w-full rounded-lg">
        <div className="flex items-center justify-center p-3 rounded-full bg-red-200 h-12 w-12 text-center mr-4 text-lg">
          <props.icon />
        </div>

        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">
            {props.title}
          </p>
          <p className="text-2xl font-bold leading-none text-gray-600">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashOrderCompo;
