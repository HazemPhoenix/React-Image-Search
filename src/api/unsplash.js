import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y3Ip55AZcwGxo0-9RQx5zXUbBeXIMnjKkCd38o1xBFs",
  },
});
