import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom,
  initial,
  animate,
  exit,
  staggerDuration,
  splitLevelClassName,
  transition,
  rotationInterval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const letters = currentText.split("");

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {letters.map((letter, index) => {
            const staggerIndex =
              staggerFrom === "first" ? index : letters.length - 1 - index;
            return (
              <motion.div
                key={`${currentIndex}-${index}`}
                className={splitLevelClassName}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: staggerIndex * staggerDuration,
                }}
              >
                {letter}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;