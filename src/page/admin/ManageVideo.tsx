import { workVideos } from "../data/videos";

export const ManageVideo = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold">Quản lý video</h2>
      <div className="my-4 grid md:grid-cols-3 gap-4">
        {workVideos.map((video) => (
          <div
            key={video.id}
            className="relative max-h-[400px] group rounded-xl shadow-lg border"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
