import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";
export default function Performance() {
  return (
    <>
      <Hero
        imgAlt="Welding"
        imgData={performanceImg}
        title="We Serve High Performance Application"
      />
    </>
  );
}
