import css from "./ErrorMessage.module.css";

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <div className={css.container}>
      <h2 className={css.errTitle}>{message}</h2>
    </div>
  );
}
