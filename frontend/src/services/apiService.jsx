import axios from "axios";

const apiUrl = "http://localhost:5000/api";

export const logoUrl = "/api/logo";

export function getButtonText() {
  return axios.get(`${apiUrl}/button`).then((res) => res.data[0].text);
}

export function addContent(newContent) {
  return axios.post(`${apiUrl}/content`, newContent).then((res) => res.data);
}
