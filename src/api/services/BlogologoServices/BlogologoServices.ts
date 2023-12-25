import { baseUrl, limit } from "../../../constants/constants";
import { BlogProps, BlogologoProps } from "../../../models/BlogologoProps";

export const getValues = async (
  view: string,
  page: number
): Promise<BlogologoProps> => {
  const offset = (page - 1) * limit;
  const response = await fetch(
    `${baseUrl}/${view}/?limit=${limit}&offset=${offset}`
  );
  const { count, results }: BlogologoProps = await response.json();
  return { count, results };
};

export const getSearch = async (
  view: string,
  search: string
): Promise<BlogologoProps> => {
  const response = await fetch(
    `${baseUrl}/${view}/?limit=${limit}&title_contains=${search}`
  );
  const { count, results }: BlogologoProps = await response.json();
  return { count, results };
};

export const getPostById = async (
  view: string,
  id: number
): Promise<BlogProps> => {
  const response = await fetch(`${baseUrl}/${view}/${id}`);
  const results: BlogProps = await response.json();
  return results;
};
