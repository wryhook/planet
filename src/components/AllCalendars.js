import React, { useState, useEffect } from "react";
import { MainContent, OuterContainer } from "./SharedComponents";
import { getAllCalendars, deleteCalendarByID } from "../utils/api";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: #f6f6f6;
  position: relative;
  padding: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms;
  min-height: 150px;
  :hover {
    background: #5845cb10;
    color: #5845cb;
    transform: scale(1.02);
  }
`;

const ContentPreview = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #7a7f89;
  color: ${(props) => props.color};
  transition: all 250ms;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px 0;
`;

const AllCalendars = () => {
  const [calendars, setCalendars] = useState();
  const handleDeleteCard = (id) => {
    deleteCalendarByID(id).then(() =>
      getAllCalendars().then((res) => setCalendars(res.data))
    );
  };

  const handleEdit = (id) => {
    console.log("yes");
  };

  useEffect(() => {
    getAllCalendars().then((res) => setCalendars(res.data));
  }, []);

  return (
    <OuterContainer>
      <MainContent>
        <h1>My Calendars</h1>
        <p>Currently this displays ALL calendars regardless of user.</p>
        <CardGrid>
          {calendars &&
            calendars.map((calendar) => {
              return (
                <StyledLink to={`/calendar/${calendar._id}`}>
                  <Card>
                    <h5>{calendar.title}</h5>
                    <ContentPreview>{calendar.description}</ContentPreview>
                    {/* <p style={{ fontSize: "10px" }}>
                      {JSON.stringify(calendar)}
                    </p> */}
                    <IconsContainer>
                      <FontAwesomeIcon
                        onClick={() => handleDeleteCard(calendar._id)}
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => handleEdit(calendar._id)}
                        icon={faPencilAlt}
                      />
                    </IconsContainer>
                  </Card>
                </StyledLink>
              );
            })}
          {!calendars ||
            (calendars.length === 0 && <p>You do not have any calendars.</p>)}
        </CardGrid>
      </MainContent>
    </OuterContainer>
  );
};

export default AllCalendars;