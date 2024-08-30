import { titleFonts } from "@/config/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">Login</div>
      <div className={titleFonts.className}>Hola mundo login</div>
    </main>
  );
}
