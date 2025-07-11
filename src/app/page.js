import SplineScrollAnimation from "../components/SplineScrollAnimation";
import LoadingAnimation from "../components/LoadingAnimation";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <LoadingAnimation />
      <SplineScrollAnimation />
    </main>
  );
}