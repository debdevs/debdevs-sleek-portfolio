import React from "react";
import "./ProjectDisplay.css";
import myConfiguredSanityClient from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { motion, AnimatePresence } from "framer-motion";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ProjectDisplay = ({ project_source }) => {
  return (
    <div className="project_display_card_parent">
      <h1>{project_source.color}</h1>
      <motion.div
   
        initial={{ translateY: 25, scaleX: 1, opacity: 0 }}
        animate={{ translateY: 0, scaleX: 1, opacity: 0.25 }}
        exit={{
          scaleX: 0.97,
          translateY: 50,
          opacity: 0,
          transition: { type: "linear", stiffness: 50 },
        }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="project_display_card_background"
        // style={{ border: "1px solid" + project_source.color, opacity: ".25" }}
      />

      <motion.div
        style={{ border: "1px solid" + project_source.color }}
        initial={{ translateY: -55, scaleX: 1, opacity: 0 }}
        animate={{ translateY: 0, scaleX: 1, opacity: 1 }}
        exit={{
          scaleX: 0.97,
          translateY: 50,
          opacity: 0,
          transition: { type: "linear", stiffness: 50 },
        }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="project_display_card_image_container"
      >
        <img
          className="project_display_card_image"
          src={urlFor(project_source.poster).url()}
        />
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.35 }}
        exit={{
          scaleX: 0.97,
          translateY: 50,
          opacity: 0,
          transition: { type: "linear", stiffness: 50 },
        }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="project_display_card_shadow"
        style={{ background: project_source.color }}
      />
    </div>
  );
};

export default ProjectDisplay;
