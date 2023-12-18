import { baseUrl, limit } from "../../../constants/constants";
import { BlogologoProps } from "../../../models/BlogologoProps";

export const getAtricles = async (page: number): Promise<BlogologoProps> => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${baseUrl}/?limit=${limit}&offset=${offset}`);
  const { count, results }: BlogologoProps = await response.json();
  return { count, results };
};
