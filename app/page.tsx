import HomeNavBar from "@/app/shared/navigation/HomeNavBar";
import ServerOrClientComponent1 from "@/shared/components/example-client-or-server-components/ServerOrClientComponent1";
import Typography from "@mui/material/Typography";

export default function Home() {
  const pageTitle = "Welcome (from app/page)";
  return (
    <main className="flex min-h-screen flex-col justify-start align-top p-2">
      <div>
        { pageTitle }
      </div>
      <Typography variant="h4" component="h1" sx={ { mb: 2 } }>
        { pageTitle }
      </Typography>
      <ServerOrClientComponent1 />
      <HomeNavBar />
    </main>
  );
}
