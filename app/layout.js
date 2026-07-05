import { Inter, Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ResumeProvider } from "./context/ResumeContext";

// Body font (primary)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

// Heading fonts (secondary)
// Option 1: Poppins (modern, popular)
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// Option 2: Urbanist (premium feel)
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata = {
  title: "Narayan Parab | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Django and scalable web applications.",
  keywords: [
    "Narayan Parab",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [{ name: "Narayan Parab" }],
  creator: "Narayan Parab",
  metadataBase: new URL("https://parabneil.github.io"),
  openGraph: {
    title: "Narayan Parab Portfolio",
    description: "Explore projects and skills",
    url: "https://parabneil.github.io",
    siteName: "Narayan Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${urbanist.variable} min-h-screen flex flex-col antialiased leading-8 dark:bg-darkTheme dark:text-white`}>
        <ThemeProvider>
          <ResumeProvider>
            {children}
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}