import css from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

type Props = {
  onSubmit: (searchValue: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const value: string = form.search.value;

    if (value.trim().length < 1) {
      toast.error("This field cannot be empty");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.submitButton} type="submit">
          <AiOutlineSearch className={css.searchIcon} size="20" />
        </button>
        <Toaster containerStyle={{ top: 60 }} />
      </form>
    </header>
  );
}
