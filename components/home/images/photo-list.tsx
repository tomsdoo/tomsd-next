import RotatingImage from "@/components/home/images/rotating-image";
import styles from "@/styles/components/home/images/photo-list.module.css";

export default function PhotoList({ className }: { className?: string }) {
  const combinedClassName = className
    ? `${styles.photoList} ${className}`
    : styles.photoList;
  return (
    <ul className={combinedClassName}>
      {[...Array(20).keys()].map((i) => (
        <li key={i}>
          <RotatingImage
            src={`https://picsum.photos/${50 + i}`}
            animationDelay={i * 50}
          ></RotatingImage>
        </li>
      ))}
    </ul>
  );
}
