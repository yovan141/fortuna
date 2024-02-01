import { ROUTES } from "@/utils/enums/route.enum"

export type FortIconName =
    | "price"
    | "pre-approved"
    | "renewal"
    | "help"
    | "trophy"
    | "luca"
    | "fortuna"
    | "close"
    | "plus"


export interface MenuItem {
    title: string
    icon: FortIconName
    enabled: boolean
    route: ROUTES
}