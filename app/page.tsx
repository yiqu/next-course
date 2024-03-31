import HomeNavBar from "@/app/shared/navigation/HomeNavBar";

export default function Home() {
  const pageTitle = "Welcome (from app/page)";
  return (
    <main className="flex min-h-screen flex-col justify-start align-top p-2">
      <div>
        { pageTitle }
      </div>
      <HomeNavBar />
    </main>
  );
}
