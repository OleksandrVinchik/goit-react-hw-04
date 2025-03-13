import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images
        .filter((image) => image.width > image.height)
        .map((image) => (
          <ImageCard key={image.id} image={image} onClick={onImageClick} />
        ))}
    </ul>
  );
}
