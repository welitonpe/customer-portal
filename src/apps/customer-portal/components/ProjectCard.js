import { useState } from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';

import arrow from "../assets/arrow.svg"

const ProjectCard = ({ title, status, endDate, state }) => {

  return (
    <div>
      <ClayCard className="project-card">
        <ClayCard.Body className="d-flex h-100 flex-column body">
          <ClayCard.Description displayType="title" className="mb-auto">
            <h2>{title}</h2>
          </ClayCard.Description>
          <div className="project-card-body d-flex flex-column">
            <div className="row card-row">
              <div className="col-12 card-column">
                <ClayLabel className="card-label">{status}</ClayLabel>
                <div >
                  <p> Ends on <span className="end-date font-weight-bold">{endDate}</span> </p>
                </div>
                <div className="d-flex justify-content-between card-see-details">
                  <div>
                    {state}
                  </div>
                  <div className="see-details">
                    <a id="link" href="#"> See details <img src={arrow}></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClayCard.Body>
      </ClayCard>
    </div>
  );
};

export default ProjectCard;