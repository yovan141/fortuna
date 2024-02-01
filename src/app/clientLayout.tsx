"use client"
import LayoutProvider from "@/hocs/LayoutProvider"
import useIsIOS from "@/hooks/useIsIOS"
import "../theme/_global.scss"
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const isIOS = useIsIOS()
    return (
    <QueryClientProvider client={queryClient}>
        <html>
            {isIOS && 
                <head>
                    <meta 
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                    />
                </head>
            }
            <body>
                <Toaster />
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    </QueryClientProvider>
    )
}