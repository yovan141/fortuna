interface IPayment {
    amount: number
    status: string
    statusCode?: number
    date: string
}

export interface ICredit {
    name: string
    creditId: string
    term: number
    currentTerm: number
    brand: string
    amount: number
    paymentAmmount: number
    cv: number
    payments?: IPayment[]
}

export interface ICredits {
    clients: ICredit[]
}