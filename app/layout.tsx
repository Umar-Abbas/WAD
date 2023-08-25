import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
 import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import QueryWrapper from "./QueryWrapper";
import "@/styles/globals.css";

// export const metadata = {
//   title: "Enter to Win Our Amazing Prizes! Buy Your $WAD Tokens and Win All Day",
//   description:
//     "Purchase your $WAD Token today and get a chance to win amazing prizes! Our grand raffle is coming up soon, and you don't want to miss out.",
//   twitter: {
//     card: "summary_large_image",
//     title: "Precedent - Building blocks for your Next.js project",
//     description:
//       "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
//     creator: "@steventey",
//   },
//   metadataBase: new URL("https://precedent.dev"),
//   themeColor: "#FFF",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-full  dark:bg-black text-white cx(sfPro.variable, inter.variable)`} >
        <QueryWrapper>
          <div className="" />
          <Suspense fallback="...">
            {/* @
            ts-expect-error Server Component */}
            <Navbar />
           </Suspense>
          <main className="px-4 pb-4 xl:px-0 dark:bg-black dark:text-white lg:pb-10 md:pb-8 ">
            {children}
          </main>
          <Footer />
          <Analytics />
        </QueryWrapper>
      </body>
    </html>
  );
}
