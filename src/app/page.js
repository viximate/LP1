import Image from "next/image";
import Hero from "./comps/hero/Hero";
import Header from "./comps/header/Header";

export const metadata = {
  title: "Viximate",
  description: "you imagine we create",
};

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
    </div>
  );
}
