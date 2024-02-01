import { ICredits } from "@/models/credit.models";
import { ForClient } from "../clients/ForClient";

export const getCredits = () =>
  ForClient.get<ICredits>("/credito")