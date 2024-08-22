"use client"
import FeelingLost from "@/components/FeelingLost";
import Hero from "@/components/Hero";


export default function Home() {
  return (
  <div className="mx-auto max-w-[1320px]">
    <Hero></Hero>
    <FeelingLost></FeelingLost>
  </div>
  );
}
