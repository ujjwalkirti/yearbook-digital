import { db } from "@/loaders/firebase";
import { FirebaseError } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";

export async function POST(request: Request) {
    try {
        const res = await request.json()
        const newEmailRef = doc(collection(db, "emails"));
        await setDoc(newEmailRef, { email: res.email });
        return new Response(JSON.stringify({ message: "Thanks for joining our waitlist.", status: "success" }), { status: 200 });
    } catch (error) {
        if (error instanceof FirebaseError) {
            console.log(error.message);
            return new Response(JSON.stringify({ message: "Something went wrong. Please try again later.", details: error.message, status: "error" }), { status: 500 });
        }
        return new Response(JSON.stringify({ message: "Something went wrong. Please try again later.", status: "error" }), { status: 500 });
    }
}
