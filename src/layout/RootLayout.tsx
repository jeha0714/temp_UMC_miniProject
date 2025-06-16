import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  const isClubMatchingStep =
    location.pathname.startsWith("/clubmatching") &&
    parseInt(location.pathname.split("/").pop() || "0") > 0;

  return (
    <>
      {!isClubMatchingStep && (
        <div className="h-[15vh]">
          <NavBar />
        </div>
      )}
      <div className={isClubMatchingStep ? "h-screen" : "h-[75vh]"}>
        <Outlet />
      </div>
      {!isClubMatchingStep && (
        <div className="h-[10vh]">
          <Footer />
        </div>
      )}
    </>
  );
}
