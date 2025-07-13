import { Button } from "@/components/ui/button";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import { compressFile, formatSize } from "@/lib/utils";
import type { CloudinaryUploadResponse, Image } from "@/type/image";
import { UploadIcon } from "lucide-react";
import { useState, type ChangeEvent } from "react";

const CLOUD_NAME = "dgg9llvxu";
const UPLOAD_PRESET = "haryle_present";
const FOLDER = "assets";

function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const { mutate: insertImageRow } = useGoogleSheetMutation();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = e.target.files[0];
      const fileType = selected.type;
      const shouldCompress = !["image/webp", "image/jpeg"].includes(fileType);

      const compressed = shouldCompress
        ? await compressFile(selected)
        : selected;
      setFile(compressed);
      setPreview(URL.createObjectURL(compressed));
    }
  };
  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", FOLDER);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const data: CloudinaryUploadResponse = await res.json();
    setUploadedUrl(data.secure_url);
    const payload: Image = {
      id: data.public_id,
      name: data.original_filename,
      size: data.bytes,
      url: data.secure_url,
      uploadedAt: data.created_at,
    };
    await insertImageRow({ method: "POST", type: "images", payload });
    setIsUploading(false);
  };

  const reset = () => {
    setFile(null);
    setPreview("");
    setUploadedUrl("");
  };
  return (
    <div className="max-w-md mx-auto gap-4 p-4 rounded-xl border border-gray-200 shadow-md bg-white">
      <h2 className="text-lg font-semibold text-gray-700">Tải lên hình ảnh</h2>
      {!file && (
        <label className="flex flex-col items-center justify-center w-full h-35  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <UploadIcon />
            <span className="text-sm">Click to select or drag & drop</span>
          </div>
        </label>
      )}

      {preview && (
        <div className="relative group">
          <img
            src={preview}
            alt="Preview"
            className="rounded-lg w-full h-auto shadow"
          />
          <Button
            variant={"outline"}
            onClick={reset}
            className="absolute top-1 right-1  transition-opacity opacity-0 group-hover:opacity-100"
          >
            ✕
          </Button>
        </div>
      )}
      {file && (
        <div>
          <p className="text-gray-500 mt-1">Size: {formatSize(file.size)}</p>
          <Button
            onClick={handleUpload}
            disabled={isUploading}
            className="w-full my-2 text-black  py-2  transition "
          >
            {isUploading ? "Uploading" : "Upload"}
          </Button>
        </div>
      )}
      {uploadedUrl && (
        <p className="text-sm text-green-600 break-all">
          ✅ Uploaded! URL:{" "}
          <a href={uploadedUrl} className="underline">
            {uploadedUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default ImageUploader;
