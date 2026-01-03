import "./styles/globals.css";

export const metadata = {
  title: "Narayan Parab | Full Stack Developer",
  description: "Personal Portfolio Website of Narayan Parab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
