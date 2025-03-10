import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "swiper/css";
import { Routerlist } from "./routes/Routerlist.jsx";

createRoot(document.getElementById("root")).render(<Routerlist />);
