import ApiClient from "./apiClient"

export const getUsers = () => ApiClient.get('/users');
export const addUsers = (user) => ApiClient.get('/users', user);
export const deleteUsers = (id) => ApiClient.get(`/users/${id}`);