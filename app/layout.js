import Sidebar from "./components/Sidebar"
import { personalData } from "../data/page-data"
import "./global.css"


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className=" flex flex-col sm:flex-row">
        <Sidebar personalData={personalData} />
        <main className=" w-full grow-full p-8 sm:p-16 basis-2/3 ml-auto">{children}</main> 
      </body>
    </html>
  )
}
