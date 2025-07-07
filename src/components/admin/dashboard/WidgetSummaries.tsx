import {
  AnalyticsWidgetSummary,
  type AnalyticsWidgetSummaryProps,
} from "@/components/admin/dashboard/AnalyticsWidgetSummary";
import type { DashboardResponse } from "@/type/dashboard";
import { ContactIcon, ImageIcon, VideoIcon, Warehouse } from "lucide-react";
import type { FC } from "react";
export const WidgetSummaries: FC<DashboardResponse> = ({
  productCount,
  videoCount,
  imageCount,
}) => {
  const analyticsSummaries: AnalyticsWidgetSummaryProps[] = [
    {
      icon: <Warehouse size={60} />,
      title: "Sản phẩm",
      color: "blue",
      total: productCount,
    },
    {
      icon: <VideoIcon size={60} />,
      title: "Video",
      color: "green",
      total: videoCount,
    },
    {
      icon: <ImageIcon size={60} />,
      title: "Hình ảnh",
      color: "orange",
      total: imageCount,
    },
    {
      icon: <ContactIcon size={60} />,
      title: "Liên hệ",
      color: "fuchsia",
      total: 4},
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
      {analyticsSummaries.map((summary, index) => (
        <AnalyticsWidgetSummary key={index} {...summary} />
      ))}
    </div>
  );
};
