import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  console.log(priceId);

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
