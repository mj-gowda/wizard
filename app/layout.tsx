import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { ReactNode } from "react";

export const metadata = {
  title: "WIZARD",
  description: "Discover & Share AI Prompts",
};

interface RootLayoutProps {
  children: ReactNode;
}


const RootLayout:React.FC<RootLayoutProps> = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
