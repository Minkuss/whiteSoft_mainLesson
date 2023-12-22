import axios from "axios";

export async function usePostData(data: SendRequestData, api: string) {
    await axios.post(api + "/send-request", data).then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err);
    })
}