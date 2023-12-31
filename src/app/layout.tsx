import "./globals.css";
import { Space_Grotesk } from "next/font/google";

// components
import { Navbar } from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "User Search App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=""
    >
      <body className={spaceGrotesk.className}>
        <div className="grid px-4 min-h-screen dark:bg-blue-950 bg-blue-50 place-content-center">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
