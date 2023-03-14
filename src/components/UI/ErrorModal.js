import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p> {props.message}</p>
          <footer className={styles.action}>
            <Button>Close</Button>
          </footer>
        </div>
      </Card>
    </>
  );
}
