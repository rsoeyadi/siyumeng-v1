import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

function AnimatedDiv({ children }: any) {
  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? 20 : 0 }}
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6 }}
          style={{
            visibility: hasScrolled || inView ? "visible" : "hidden",
          }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
}

export default AnimatedDiv;
