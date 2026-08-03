import { useRef } from "react";
import gsap from "gsap";

export default function useBookAnimation() {
  const booksRef = useRef([]);

  const animateOpen = (index) => {
    const books = booksRef.current;

    books.forEach((book, i) => {
      if (!book) return;

      if (i === index) {
        gsap.to(book, {
          y: -25,
          scale: 1.08,
          duration: 0.45,
          ease: "power3.out",
          zIndex: 100,
        });
      } else {
        gsap.to(book, {
          opacity: 0.25,
          scale: 0.96,
          duration: 0.4,
        });
      }
    });
  };

  const animateClose = () => {
    const books = booksRef.current.filter(Boolean);

    gsap.to(books, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.30,
      ease: "power3.out",
    });
  };

  return {
    booksRef,
    animateOpen,
    animateClose,
  };
}