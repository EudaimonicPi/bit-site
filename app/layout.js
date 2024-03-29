import { Inter } from "next/font/google";
import Header from '@/components/wholeApp/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bit by Bit",
  description: "The FG CS comic's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{flex: '1'}}>
             <Header title={"Bit by Bit "} msg={'Project website :)'}/>
          </div>
          <div style={{flex: '9', padding: '2%'}}>
            {children}
          </div>
        </body>
    </html>
  );
}
