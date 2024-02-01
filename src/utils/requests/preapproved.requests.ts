import { IMessageRequest, IPreApprovedResponse } from "@/models/preapproved";
import { ForClient } from "../clients/ForClient";
import { ForSMSClient } from "../clients/ForSMSClient";

export const getPreApproved = () =>
  ForClient.get<IPreApprovedResponse>("/pre-aprobado")

export const sendInvitation = (request: IMessageRequest) =>
  ForSMSClient.post<any>("/message", request)