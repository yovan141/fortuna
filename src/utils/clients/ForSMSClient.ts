import axios from "axios"

export const ForSMSClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL_SMS}`,
  responseType: "json",
  headers: {
    "Content-type": "application/json",
  },
})