import axiosInstance from '../api/axiosInstance';

export const fetchAllAdmins = async () => {
  try {
    const response = await axiosInstance.get('/alladmin');
    return response.data;
  } catch (error) {
    console.error('Error fetching admins:', error);
    throw error; // You can choose to handle this more gracefully
  }
};
