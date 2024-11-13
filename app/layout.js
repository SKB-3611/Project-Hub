import localFont from "next/font/local";
import "./globals.css";
import next from "next";

const poppinsRegular = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "400",
});

// Poppins Bold font
const poppinsBold = localFont({
  src: "./fonts/Poppins/Poppins-Medium.ttf",
  variable: "--font-poppins-bold",
  weight: "500",
});

export const metadata = {
  title: "Project Hub",
  description: "Students Life made easy.",
openGraph: {
    title: 'Project Hub',
    description: 'High-quality, affordable college projects delivered on time.',
    images: [
      {
        url: '/card.jpg',
        alt: 'Logo',
        width: 1200,
        height: 1200,
      },
    ],
  },
twitter: {
    card: 'summary_large_image',
    title: 'Project Hub',
    description: 'High-quality, affordable college projects delivered on time.',
    images: ['/card.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${poppinsBold.variable} ${poppinsRegular.variable} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}
