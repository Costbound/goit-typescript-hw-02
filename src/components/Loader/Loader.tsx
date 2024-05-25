import css from "./Loader.module.css";
import { Triangle } from "react-loader-spinner";

type Props = {
  isVisible: boolean;
};
export default function Loader({ isVisible }: Props) {
  return (
    <>{isVisible && <Triangle color="#4242aa" wrapperClass={css.loader} />}</>
  );
}
