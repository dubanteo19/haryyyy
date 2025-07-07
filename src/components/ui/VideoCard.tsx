import type { WorkVideo } from "@/type/work-video";
import { useInView } from "motion/react";
import { useEffect, useRef, type FC } from "react";

export const VideoCard: FC<WorkVideo> = ({ src }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px", once: false });

  useEffect(() => {
    const videoEl = ref.current;
    if (videoEl) {
      if (inView) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    }
  }, [inView]);

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg border">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};
