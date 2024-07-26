import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LoadingImage(props) {
  return (
    <LazyLoadImage
      alt={props.alt}
      src={props.src}
      height={"100%"}
      width={"100%"}
      effect="blur"
    />
  );
}
