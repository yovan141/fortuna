import type { Metadata } from "next";
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  manifest: "./manifest.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClientLayout>{children}</ClientLayout>
  );
}
