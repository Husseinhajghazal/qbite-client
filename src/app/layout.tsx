import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ReduxProvider from "@/util/ReduxProvider";
import { AOSInit } from "./aos";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/util/QueryProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://q-bite.net"),
  title: "QBite",
  description:
    "We are a website offering the service of creating your own menu online, allowing you to add and modify food items at any time, as well as generate your personalized QR Code instantly - نحن موقع يقدم خدمة إنشاء قائمة الطعام الخاصة بك عبر الإنترنت، مما يتيح لك إضافة وتعديل العناصر الغذائية في أي وقت، بالإضافة إلى إنشاء رمز الاستجابة السريعة (QR Code) الخاص بك على الفور",
  icons: {
    icon: ["/icons/favicon.ico?v=4"],
    apple: ["/icons/apple-touch-icon.png?v=4"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/icons/site.webmanifest",
  openGraph: {
    images: "/opengraph-image.png",
    title: "QBite",
    description:
      "We are a website offering the service of creating your own menu online, allowing you to add and modify food items at any time, as well as generate your personalized QR Code instantly - نحن موقع يقدم خدمة إنشاء قائمة الطعام الخاصة بك عبر الإنترنت، مما يتيح لك إضافة وتعديل العناصر الغذائية في أي وقت، بالإضافة إلى إنشاء رمز الاستجابة السريعة (QR Code) الخاص بك على الفور",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="bg-[#f4f4f4] overflow-x-hidden">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReduxProvider>
        <div id="background" />
        <div id="filter" />
        <div id="language" />
        <div id="sidebar" />
        <div id="terms" />
      </body>
    </html>
  );
}
