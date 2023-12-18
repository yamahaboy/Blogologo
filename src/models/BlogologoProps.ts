export type BlogologoProps = {
  count: number;
  results: AtriclesProps[];
};

export type AtriclesProps = {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
};

export type AnyAction = {
  type: string;
  [key: string]: any;
};
