import { redirect } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    // some logic to check user is authenticated
    const user  = true;

    if(!user){
        redirect("/login");
    }
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
