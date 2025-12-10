export interface ImageInfo {
  id: string,
  url: string,
  alt: string
}

export interface ImageProps extends ImageInfo {
  index: number;
  onButtonClick: (id: string) => void;
}