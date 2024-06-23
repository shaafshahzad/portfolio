import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CSPostHogProvider } from "./_analytics/provider";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaaf Shahzad",
  description: "Personal Portfolio of Shaaf Shahzad",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <CSPostHogProvider>
        <body
          className={`${jetBrains.className} h-full w-full overflow-y-auto box-border p-8 sm:p-14 md:p-20 flex flex-col bg-gradient`}
        >
          <Sidebar />
          <div className=" h-full w-full md:overflow-y-auto flex flex-col md:flex-row justify-between md:items-center">
            <Navbar />
            <div className="h-full md:h-[90%] md:w-3/5">{children}</div>
          </div>
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
