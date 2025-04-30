import { FC } from "react";
import { SortIcon } from "@/components/icons";

interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  sortKey?: string;
  currentSort?: string;
  onSort?: (key: string) => void;
}

export const TableHeader: FC<TableHeaderProps> = ({
  label,
  sortable = true,
  sortKey,
  currentSort,
  onSort,
}) => {
  const handleClick = () => {
    if (sortable && onSort && sortKey) {
      onSort(sortKey);
    }
  };

  const isSorted = currentSort === sortKey;

  return (
    <th
      onClick={handleClick}
      className={`px-4 py-2 text-sm font-semibold text-left ${
        sortable ? "cursor-pointer hover:bg-gray-50" : ""
      }`}
    >
      <div className="flex items-center gap-1">
        <span>{label}</span>
        {sortable && (
          <SortIcon
            className={`w-4 h-4 ${
              isSorted ? "text-gray-900" : "text-gray-400"
            }`}
          />
        )}
      </div>
    </th>
  );
};
