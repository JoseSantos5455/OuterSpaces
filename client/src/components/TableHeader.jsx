import { SorttopIcon, SortdownIcon } from "./Icons";

const TableHeader = (props) => {
  return (
    <div className="flex gap-[5px] items-center">
      <p className="text-[#2CA1C2]">{props.name}</p>
      <div className="space-y-[-8px]">
        <SorttopIcon />
        <SortdownIcon />
      </div>
    </div>
  );
};

export default TableHeader;
