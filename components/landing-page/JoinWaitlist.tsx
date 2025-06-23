"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { db } from "@/loaders/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";

const schema = z.object({
	email: z.string().email("Invalid email address"),
});

function JoinWaitlist() {
	const [isFormSubmitting, setIsFormSubmitting] = React.useState(false);
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof schema>) {
		try {
			setIsFormSubmitting(true);
			const newEmailRef = doc(collection(db, "emails"));
			await setDoc(newEmailRef, { email: values.email });
			toast("Thanks for joining our waitlist!", {
				description: "We'll be in touch soon.",
				position: "bottom-right",
			});
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log(error.message);
			}
			toast("Something went wrong. Please try again later.", {
				description: "We'll be in touch soon.",
				position: "bottom-right",
			});
		} finally {
			setIsFormSubmitting(false);
		}
	}

	return (
		<div className="flex flex-col gap-2 items-center mt-5 lg:mt-10 w-full">
			<p className="text-2xl font-bold">Interested in our product?</p>
			<p className="text-sm">Join our waitlist to get early access</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-2 w-full md:w-1/2 border border-gray-300 rounded-md shadow-md mt-3 lg:mt-6 p-3">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="john@doe.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={isFormSubmitting} type="submit">
						{isFormSubmitting ? "Joining..." : "Join Waitlist"}
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default JoinWaitlist;
