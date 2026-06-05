import axiosInstance from "../utils/axiosInstance.js";

 const testConnection = async () => {
  const response = await axiosInstance.get("/test");
  return response.data;
};
export default testConnection