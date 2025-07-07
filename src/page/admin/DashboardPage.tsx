import { WidgetSummaries } from "@/components/admin/dashboard/WidgetSummaries";
import { useGoogleSheetData } from "@/hooks/useGoogleSheet";
import { type DashboardResponse } from "@/type/dashboard";

export const DashboardPage = () => {
  const { data } = useGoogleSheetData<DashboardResponse>("stats");
  return (
    <div className="px-4">
      <h2 className="text-lg md:text-2xl font-bold">Bảng điều khiển</h2>
      {data && <WidgetSummaries {...data[0]} />}
    </div>
  );
};
