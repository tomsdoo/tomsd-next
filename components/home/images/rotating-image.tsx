import styles from "@/styles/components/home/images/rotating-image.module.css";

export default function RotatingImage({
  src,
  animationDelay,
}: {
  src: string;
  animationDelay: number;
}) {
  return (
    <img
      style={{ animationDelay: `${animationDelay}ms` }}
      className={styles.photo}
      src={src}
      alt=""
    />
  );
}
