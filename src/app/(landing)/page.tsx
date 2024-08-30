import { About } from "@/components/modules/home/about";
import { Banner } from "@/components/modules/home/banner";
import { Customers } from "@/components/modules/home/customers";
import { Parallax } from "@/components/modules/home/parallax";
import { Services } from "@/components/modules/home/services";


export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Parallax />
      <Customers />
    </>
  );
}
