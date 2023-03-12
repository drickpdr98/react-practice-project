import styles from "./Button.module.css";

export default function Button() {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      Add user
    </button>
  );
}
