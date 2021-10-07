import { useState } from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';

import arrow from "../assets/arrow.svg"

const ProjectCardFind = ({ title, status, endDate, state, subtitle }) => {

  return (
    <div>
      <ClayCard className="project-card find-option">
        <ClayCard.Body className="d-flex h-100 justify-content-between body">
          <ClayCard.Description displayType="title" className="mb-auto">
            <h2>{title}</h2>
            <h3 className="text-uppercase font-weight-normal">{subtitle}</h3>
          </ClayCard.Description>
          <div className="project-card-body d-flex flex-column card-column">

            <ClayLabel className="card-label">{status}</ClayLabel>
            <div >
              <p> Ends on <span className="end-date font-weight-bold">{endDate}</span> </p>
            </div>
            <div className="d-flex justify-content-between card-see-details">
              <div>
                {state}
              </div>
            </div>

          </div>
        </ClayCard.Body>
      </ClayCard>
    </div>
  );
};
export default ProjectCardFind;