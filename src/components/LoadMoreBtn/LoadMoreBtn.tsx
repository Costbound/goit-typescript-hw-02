import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  children: string;
};

export default function LoadMoreBtn({ onClick, children }: Props) {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
}
