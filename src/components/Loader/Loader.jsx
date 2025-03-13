import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return <Circles height="80" width="80" color="blue" ariaLabel="loading" />;
}
