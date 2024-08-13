import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden"
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
    >
      <motion.ul
        className="flex flex-col py-4 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NavLink href={link.path} title={link.title} onClick={closeMenu} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;
