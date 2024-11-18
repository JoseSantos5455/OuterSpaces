import { useEffect, useState } from "react";
import { SorttopIcon, SortdownIcon } from "./Icons";

const TableHeader = ({ name, sortList, sort }) => {
  const [sortKey, setSortKey] = useState({ id: 1, flag: false });
  useEffect(() => {
    if (sort.id === 1) {
      setSortKey({ id: 1, flag: false });
    }
    if (sort.id === 2) {
      setSortKey({ id: 2, flag: false });
    }
    if (sort.id === 3) {
      setSortKey({ id: 3, flag: false });
    }
  }, [sort]);

  useEffect(() => {
    sortList(sortKey);
  }, [sortKey]);

  const getSortList = () => {
    setSortKey({ ...sortKey, flag: !sortKey.flag });
  };

  return (
    <div className="flex gap-[5px] items-center">
      <p className="text-[#2CA1C2]">{name}</p>
      <div className="space-y-[-8px]" onClick={getSortList}>
        <SorttopIcon />
        <SortdownIcon />
      </div>
    </div>
  );
};

export default TableHeader;
