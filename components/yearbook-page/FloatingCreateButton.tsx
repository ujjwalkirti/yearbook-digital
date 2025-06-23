"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import CreateYearBookForm from "./CreateYearBookForm";

function FloatingCreateButton() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDialog = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Button className="fixed bottom-4 right-4  rounded-full p-4 shadow-lg hover:bg-secondary hover:text-primary cursor-pointer" onClick={toggleDialog}>
				Create <PlusIcon />
			</Button>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create New Yearbook</DialogTitle>
					</DialogHeader>
					<DialogDescription>Create a new yearbook to capture your memories.</DialogDescription>
					<CreateYearBookForm />
					{/* Add form or content for creating a new yearbook here */}
					<DialogFooter>
						<Button onClick={toggleDialog}>Close</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default FloatingCreateButton;
