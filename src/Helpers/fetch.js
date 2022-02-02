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

export const fetchYoutubeVideos = async (query) => {
  const URL = "https://www.googleapis.com/youtube/v3/search";
  const response = await axios.get(URL, {
    params: {
      maxResults: 25,
      part: "snippet",
      type: "video",
      q: query,
      key: "AIzaSyADNmHixHQkyaH9wf-IxDEVomYaXV2RODM"
    }
  });
};
