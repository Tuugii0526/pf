import { getDateString } from "@/lib/get-date-string";
import { Clock } from "lucide-react";
const clockIcon = (
  <Clock className="text-[#717171] font-bold" width={15} height={15} />
);

export const DateShowing = ({
  updatedAt,
  createdAt,
  insideBlog,
}: {
  updatedAt: string;
  createdAt: string;
  insideBlog: boolean;
}) => {
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);
  const createdDateString = getDateString({ date: createdDate });
  const updatedDateString = getDateString({ date: updatedDate });
  if (!insideBlog) {
    return (
      <div className="flex gap-1 items-center mb-1">
        {clockIcon}
        <p className="text-[12.8px] text-[#717171] font-bold">
          {createdDateString}
        </p>
      </div>
    );
  }
  return (
    <div className="flex gap-1 items-center mb-1">
      {clockIcon}
      <p className="text-[12.8px] text-[#717171] font-bold">
        {updatedDateString}
      </p>
    </div>
  );
};
