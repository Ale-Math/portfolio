import { About } from "./Components/PageComponents/About";
import { Header } from "./Components/PageComponents/Header";
import { HomeSection } from "./Components/PageComponents/Home";
import { Skills } from "./Components/PageComponents/Skills";

export default function Home() {
  return (
    <div className=" flex-col flex items-center relative h-full w-full space-y-40">
      <Header />
      <HomeSection />
      <About />
      <Skills />
    </div>
  );
}
