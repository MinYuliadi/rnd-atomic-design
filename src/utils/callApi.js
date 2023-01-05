export const getOptions = ({ method, headers, token, body }) => {
  return {
    method,
    headers: {
      Authorization: !!token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: !!body ? JSON.stringify(body) : undefined,
  };
};

export default async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
