import Background from "@/components/Background";
import TabBar from "@/components/Tab";
import ContestSpace from "@/components/content/ContestSpace";

export default function Home() {
  return (
    <Background>
      <TabBar />
      <ContestSpace />
    </Background>
  );
}
