import axios from "axios"

export const ForClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  responseType: "json",
  headers: {
    "Content-type": "application/json",
  },
})