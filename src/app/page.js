import { redirect } from "next/navigation";

export default function HomePage() {
  // The root URL is only an entry point. Send visitors to the default CV
  // version so the app always shows a real CV page first.
  redirect("/cv/it-support");
}
