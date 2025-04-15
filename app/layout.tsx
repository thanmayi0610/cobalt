import "./globals.css";
import { PropsWithChildren } from "react" 
import { Metadata } from "next";
import Container from "../components/container/container"; // Adjust the path as needed
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
 
});
export const metadata: Metadata = {
  title: "Cobalt — Everything About The Essential Metal",
  description:
    "Discover the power, history, and future of cobalt. Learn why cobalt is critical for batteries, renewable energy, and modern technology.",
  openGraph: {
    title: "Cobalt — The Essential Metal Powering The Future",
    description:
      "Explore the fascinating world of cobalt. From its role in clean energy to cutting-edge technology, Cobalt is your guide to this powerful metal.",
    images: {
      url: "cobalt-ruby-nu.vercel.app/og-card.png",
      width: 1200,
      height: 628,
    },
  },
};



const RootLayout = (props: PropsWithChildren) => {
  return( <html>
      <body className = {inter.className }>
        <div className = "flex flex-col items-stretch ">
       <NavigationBar />
       
       <div className="border-b-[1px] border-b-[#EAEAEA]" />
       <Container className="py-4">{props.children}</Container>

        </div>
      </body>
    </html>
  );
};
export default RootLayout;