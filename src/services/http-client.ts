import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9fd2d48f71bd45c2afa1aa8152ea6f9a",
  },
});