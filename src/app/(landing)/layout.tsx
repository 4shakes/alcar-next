import { Footer } from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/navbar/nav-bar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
