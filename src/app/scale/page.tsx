import scaleImg from "public/scale.jpg";
import Hero from "@/components/hero";
export default function Scale() {
  return (
    <>
      <Hero
        imgAlt="Steel Factory"
        imgData={scaleImg}
        title="Scale your app to infinity."
      />
    </>
  );
}
