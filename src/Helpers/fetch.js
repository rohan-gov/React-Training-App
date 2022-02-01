import axios from "axios";

export const fetchPicturesByKeyword = async (keyword) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID m_qRZEBJYjbVfo3eHvu-zYYpcNtmcp86_yMCB6t3Ayg"
    },
    params: {
      query: keyword
    }
  });

  return response;
};
