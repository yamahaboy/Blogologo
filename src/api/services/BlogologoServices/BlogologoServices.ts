import { baseUrl, limit } from "../../../constants/constants";
import { BlogologoProps } from "../../../models/BlogologoProps";

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
