export interface Image {
  id: string;
  name: string;
  size: number;
  url: string;
  uploadedAt: string;
}
export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  created_at: string;
  bytes: number;
  original_filename: string;
}
