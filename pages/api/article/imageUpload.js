import axios from "axios";
import { url_service } from "../url";

const APIArticleImageUpload = async (data) => {
  const result = await axios({
    method: "post",
    // mode: "no-cors",
    url: `${url_service}/article/image-upload/`,
    data: data,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export default APIArticleImageUpload;
