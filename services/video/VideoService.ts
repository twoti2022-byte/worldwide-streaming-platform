export type VideoAssetStatus = 'queued' | 'processing' | 'ready' | 'failed' | 'deleted';
export interface VideoService {
  upload(): Promise<never>;
  process(assetId: string): Promise<VideoAssetStatus>;
  status(assetId: string): Promise<VideoAssetStatus>;
  playback(assetId: string): Promise<never>;
  delete(assetId: string): Promise<void>;
}

export class CloudflareStreamBoundaryNotImplemented implements VideoService {
  async upload(): Promise<never> { throw new Error('Video upload is reserved for a future module.'); }
  async process(): Promise<VideoAssetStatus> { return 'queued'; }
  async status(): Promise<VideoAssetStatus> { return 'queued'; }
  async playback(): Promise<never> { throw new Error('Video playback is reserved for a future module.'); }
  async delete(): Promise<void> { throw new Error('Video deletion is reserved for a future module.'); }
}
