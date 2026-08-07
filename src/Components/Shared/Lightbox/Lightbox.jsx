import React, { useCallback, useEffect, useState } from "react";
import "./lightbox.css";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Lightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  const showPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const showNext = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, showPrev, showNext]);

  const current = images[index];

  return (
    <div className="lightbox_overlay" onClick={onClose}>
      <button className="lightbox_close" onClick={onClose} aria-label="Close">
        <FiX size={26} />
      </button>

      {images.length > 1 && (
        <button
          className="lightbox_nav lightbox_nav-prev"
          onClick={(e) => {
            e.stopPropagation();
            showPrev();
          }}
          aria-label="Previous image"
        >
          <FiChevronLeft size={28} />
        </button>
      )}

      <figure className="lightbox_content" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.caption} />
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      {images.length > 1 && (
        <button
          className="lightbox_nav lightbox_nav-next"
          onClick={(e) => {
            e.stopPropagation();
            showNext();
          }}
          aria-label="Next image"
        >
          <FiChevronRight size={28} />
        </button>
      )}
    </div>
  );
};

export default Lightbox;
