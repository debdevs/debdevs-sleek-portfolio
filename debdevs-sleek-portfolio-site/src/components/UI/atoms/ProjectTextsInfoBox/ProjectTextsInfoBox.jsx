import React from "react";
import "./ProjectTextsInfoBox.css";
import MainHeader from "../MainHeader/MainHeader";
import BylineText from "../BylineText/BylineText";
import ParagraphText from "../ParagraphText/ParagraphText";
const ProjectTextsInfoBox = ({ title, description = "Test" }) => {
  return (
    <div className="project_texts_info_box_parent">
      <MainHeader text={title} />
      <ParagraphText text={description} />
    </div>
  );
};

export default ProjectTextsInfoBox;
