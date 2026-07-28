import { useRef } from "react";
import gsap from "gsap";

export default function useBookshelfAnimation() {
  const booksRef = useRef([]);

  const handleEnter = (index) => {
    const books = booksRef.current;

    gsap.to(books[index], {
      y: -20,
      duration: 0.3,
      ease: "power2.out",
    });

    if (books[index - 1]) {
      gsap.to(books[index - 1], {
        x: -8,
        duration: 0.3,
      });
    }

    if (books[index + 1]) {
      gsap.to(books[index + 1], {
        x: 8,
        duration: 0.3,
      });
    }
  };

  const handleLeave = () => {
    gsap.to(booksRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return {
    booksRef,
    handleEnter,
    handleLeave,
  };
}