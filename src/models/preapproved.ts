export interface IPreApproved {
    name: string
    term: number
    brand: string
    amount: number
    paymentAmmount: number
    status: string
    statusCode: number
    reason: string
}

export interface IPreApprovedResponse {
    requests: IPreApproved[]
}

export interface IMessageRequest {
    destinationNumber: string
    firstName: string
    lastName: string
    source: string
}