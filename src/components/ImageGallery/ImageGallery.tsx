import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { APIResult } from "../../images-api";

type Props = {
  data: APIResult[];
  onClick: (imgUrl: string, imgAlt: string) => void;
};

export default function ImageGallery({ data, onClick }: Props) {
  return (
    <ul className={css.list}>
      {data &&
        data.map((card) => (
          <li key={card.id}>
            <ImageCard
              data={card}
              onClick={(imgUrl, imgAlt) => onClick(imgUrl, imgAlt)}
            />
          </li>
        ))}
    </ul>
  );
}
