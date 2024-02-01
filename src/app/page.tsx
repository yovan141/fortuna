
"use client"
import { redirect } from "next/navigation";
import { ROUTES } from "@/utils/enums/route.enum";

export default function Home() {
  redirect( ROUTES.login )
}
