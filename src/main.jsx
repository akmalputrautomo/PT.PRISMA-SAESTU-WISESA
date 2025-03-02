import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Routerlist } from "./routes/Routerlist.jsx";

createRoot(document.getElementById("root")).render(<Routerlist />);
