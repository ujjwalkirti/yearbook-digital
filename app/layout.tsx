import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Yearbook Digitally | Preserve and Share Your Memories",
	description: "Yearbook Digitally lets you create, explore, and relive school and college memories like never before. Design your digital yearbook with photos, messages, autographs, and more. Forever accessible. Beautifully preserved.",
	keywords: ["Digital Yearbook", "Online Yearbook", "Yearbook App", "School Memories", "College Memories", "Yearbook Creator", "Class Memories", "Photo Yearbook", "Digital Scrapbook", "Student Yearbook"],
	openGraph: {
		title: "Yearbook Digitally | Preserve and Share Your Memories",
		description: "Design and share your digital yearbook — filled with photos, memories, and messages. Celebrate every chapter of your academic journey, preserved forever.",
		url: "https://yearbook-digitally.com",
		siteName: "Yearbook Digitally",
		images: [
			{
				url: "https://yearbook-digitally.com/og-image.jpg", // Replace with actual OG image
				width: 1200,
				height: 630,
				alt: "Yearbook Digitally - A Modern Way to Preserve School Memories",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Yearbook Digitally",
		description: "Create, explore, and share beautiful digital yearbooks. A modern way to preserve school and college memories.",
		images: ["https://yearbook-digitally.com/twitter-card.jpg"], // Replace with actual Twitter card image
	},
	authors: [{ name: "Yearbook Digitally Team", url: "https://yearbook-digitally.com" }],
	creator: "Yearbook Digitally",
	publisher: "Yearbook Digitally",
	metadataBase: new URL("https://yearbook-digitally.com"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
