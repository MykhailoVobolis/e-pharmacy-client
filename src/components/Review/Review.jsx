import css from "./Review.module.css";

export default function Review({ name, testimonial, imageSrc, imageSrcSet }) {
  return (
    <>
      <img
        className={css.reviewPhoto}
        width={64}
        height={64}
        src={imageSrc}
        srcSet={`${imageSrc} 1x, ${imageSrcSet} 2x`}
        alt={`${name} photo`}
      />
      <h3 className={css.authorName}>{name}</h3>
      <p className={css.testimonial}>{testimonial}</p>
    </>
  );
}
