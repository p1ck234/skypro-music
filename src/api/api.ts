const host = "https://skypro-music-api.skyeng.tech/catalog";

export const getTracks = async () => {
  const response = await fetch(`${host}/track/all/`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};
