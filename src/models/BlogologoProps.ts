export type BlogologoProps = {
  count: number;
  results: BlogProps[];
};

export type BlogProps = {
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
