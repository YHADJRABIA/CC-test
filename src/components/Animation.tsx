import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

interface IAnimation {
  content?: string;
}

const Animation: FC<IAnimation> = ({ content }) => {
  return (
    <FontAwesomeIcon icon={faCog} size="2x" title="Ratio" className="fa-spin" />

    /*     <div className="loading-animation">
      {content}
    </div> */
  );
};

export default Animation;
