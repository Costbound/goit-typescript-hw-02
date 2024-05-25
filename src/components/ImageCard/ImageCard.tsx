import { APIResult } from "../../images-api";
import css from "./ImageCard.module.css";

type Props = {
  data: APIResult;
  onClick: (imgUrl: string, imgAlt: string) => void;
};

export default function ImageCard({
  data: {
    alt_description: alt,
    urls: { small, full },
  },
  onClick,
}: Props) {
  return (
    <div className={css.cardWrapper}>
      <img
        className={css.image}
        src={small}
        alt={alt}
        onClick={() => onClick(full, alt)}
      />
    </div>
  );
}
