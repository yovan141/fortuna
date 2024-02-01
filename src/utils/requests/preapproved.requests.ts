import { IMessageRequest, IPreApprovedResponse } from "@/models/preapproved";
import { ForClient } from "../clients/ForClient";

export const getPreApproved = () =>
  ForClient.get<IPreApprovedResponse>("/pre-aprobado")

export const sendInvitation = (request: IMessageRequest) =>
  ForClient.post<any>("/message", request)