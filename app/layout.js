import "./globals.css";

export const metadata = {
  title: "Intro Component with Signup Form",
  description: "Generated by Burak Durmuşoğlu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>    
        {children}
      </body>
    </html>
  );
}
