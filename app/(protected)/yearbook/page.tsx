import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingCreateButton from "@/components/yearbook-page/FloatingCreateButton";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function YearbookPage() {
	const yearbooks = [
		{
			id: 1,
			name: "Yearbook 1",
			institution: "School 1",
			year: "2021",
			memory: "Memory 1",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 1",
			createdAt: "2021-01-01",
		},
		{
			id: 2,
			name: "Yearbook 2",
			institution: "School 2",
			year: "2021",
			memory: "Memory 2",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 2",
			createdAt: "2021-01-02",
		},
		{
			id: 3,
			name: "Yearbook 3",
			institution: "School 3",
			year: "2021",
			memory: "Memory 3",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 3",
			createdAt: "2021-01-03",
		},
		{
			id: 4,
			name: "Yearbook 4",
			institution: "School 4",
			year: "2021",
			memory: "Memory 4",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 4",
			createdAt: "2021-01-04",
		},
		{
			id: 5,
			name: "Yearbook 5",
			institution: "School 5",
			year: "2021",
			memory: "Memory 5",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 5",
			createdAt: "2021-01-05",
		},
		{
			id: 6,
			name: "Yearbook 6",
			institution: "School 6",
			year: "2021",
			memory: "Memory 6",
			image: "https://via.placeholder.com/150",
			footnote: "Footnote 6",
			createdAt: "2021-01-06",
		},
	];
	return (
		<div className="flex flex-col gap-4 px-3">
			<div>
				<p className="text-2xl font-bold">Hi, Sneha 👋</p>
				<p>You have following yearbooks:</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{yearbooks.map((yearbook) => (
					<Card key={yearbook.id} className="hover:shadow-md">
						<CardHeader>
							<CardTitle>{yearbook.name}</CardTitle>
							<CardDescription>{yearbook.institution}</CardDescription>
						</CardHeader>
						<CardContent>
							<Image src={"/assets/demo.webp"} alt={yearbook.name} width={100} height={100} className="rounded-md w-full h-full object-cover" />
							<p>{yearbook.memory}</p>
						</CardContent>
						<CardFooter className="flex flex-col gap-2">
							<p className="text-sm text-gray-500 italic">"{yearbook.footnote}"</p>
							<Link href={`/yearbook/${yearbook.id}`} className="flex items-center gap-2 w-full  ">
								<Button className="gap-2 w-full cursor-pointer">
									View <LinkIcon />
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
			<FloatingCreateButton />
		</div>
	);
}

export default YearbookPage;
