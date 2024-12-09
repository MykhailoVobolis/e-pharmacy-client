import css from "./MainContent.module.css";

export default function MainContent() {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>
        Your medication, delivered Say goodbye to all<span className={css.accent}> your healthcare </span>worries with
        us
      </h1>
    </div>
  );
}
