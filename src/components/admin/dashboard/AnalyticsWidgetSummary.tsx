import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import type { ReactNode } from "react";
type WidgetColor = keyof typeof gradientMap;
export interface AnalyticsWidgetSummaryProps {
  title: string;
  color?: WidgetColor;
  icon: ReactNode;
  total: number;
}
const gradientMap = {
  red: "from-red-400 to-red-500",
  orange: "from-orange-400 to-orange-500",
  blue: "from-blue-400 to-blue-500",
  fuchsia: "from-fuchsia-400 to-fuchsia-500",
  green: "from-green-600 to-green-500",
} as const;
export const AnalyticsWidgetSummary: React.FC<AnalyticsWidgetSummaryProps> = ({
  title,
  color,
  icon,
  total,
}) => {
  const gradient = gradientMap[color || "blue"];
  return (
    <div
      className={cn(
        "p-2 md:p-4 col-span-1 flex flex-col  bg-linear-to-r   text-white rounded-2xl shadow-2xl relative",
        gradient,
      )}
    >
      <h2 className="my-2 font-bold text-base  md:text-2xl">{title}</h2>
      {total > 0 ? (
        <p className={cn(" font-bold  text-right text-2xl md:text-5xl")}>
          {total}
        </p>
      ) : (
        <Loader className=" animate-spin" />
      )}
      <div className="absolute bottom-2 left-3 -rotate-35 text-gray-100/15">
        {icon}
      </div>
    </div>
  );
};
