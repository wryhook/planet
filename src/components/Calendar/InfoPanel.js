import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const InfoPanelContainer = styled.div`
  border-right: 1px solid #c6c6c6;
  padding: 20px;
  width: 250px;
  height: 100vh;
  position: fixed;
`;

const IconInfo = styled.div`
  display: flex;
  align-items: center;
`;

const InfoPanel = ({ calendar }) => {
  return (
    <InfoPanelContainer>
      <span style={{ color: "#888", fontSize: "0.8rem" }}>TEAM NAME HERE</span>
      <h4>{calendar.title}</h4>
      <p>{calendar.description}</p>
      <IconInfo>
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
        <span>
          {new Date(calendar.dateStart).toLocaleString("default", {
            month: "short",
          })}
          {new Date(calendar.dateStart).getDate()} -
          {new Date(calendar.dateEnd).toLocaleString("default", {
            month: "short",
          })}
          {new Date(calendar.dateEnd).getDate()}{" "}
        </span>
      </IconInfo>
      <IconInfo>
        <FontAwesomeIcon icon={faClock} className="mr-2" />
        <span>
          {new Date(calendar.timeStart).toLocaleString("en-US", {
            hour: "numeric",
            hour12: true,
          })}
          -
          {new Date(calendar.timeEnd).toLocaleString("en-US", {
            hour: "numeric",
            hour12: true,
          })}
        </span>
      </IconInfo>

      <IconInfo>
        <FontAwesomeIcon icon={faStopwatch} className="mr-2" />
        <span>{calendar.slotDuration} min</span>
      </IconInfo>
    </InfoPanelContainer>
  );
};

export default InfoPanel;
