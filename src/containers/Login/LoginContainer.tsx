"use client"
import PWALoginView from "@/views/Login/PWALoginView/PWALoginView"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { ROUTES } from "@/utils/enums/route.enum";

const LoginContainer = () => {
    const router = useRouter()

    const onSubmit = useCallback(() => {
        router.push(ROUTES.credits)
    }, [])
    return <PWALoginView onSubmit={onSubmit}/>
}

export default LoginContainer