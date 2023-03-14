import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p> {props.message}</p>
          <footer className={styles.action}>
            <Button onClick={props.onConfirm}>Close</Button>
          </footer>
        </div>
      </Card>
    </>
  );
}
