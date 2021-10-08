import { Button } from "@clayui/core";
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';

const ProjectCard = ({ title, status, endDate, state, onClick, small }) => {

  return (
    <ClayCard className={`project-card m-0${small ? " sm" : ""}`} onClick={() => onClick}>
      <ClayCard.Body className={`d-flex flex-${small ? "row" : "column"} h-100 justify-content-between${small ? " sm" : ""}`}>
        <ClayCard.Description displayType="title" tag={`${small ? "h4" : "h3"}`} title={null}>
          {title}
        </ClayCard.Description>
        <div className="d-flex justify-content-between align-items-end">
          <ClayCard.Description className={`info-project${small ? " sm" : ""}`} truncate={false} displayType="text" tag="div" title={null}>
            <ClayLabel className="border-0 text-capitalize font-weight-normal m-0" displayType="success">{status}</ClayLabel>
            <div className={`info-date${small ? " sm" : ""}`}>
              Ends on <span className="font-weight-bold end-date">{endDate}</span>
            </div>
            {state}
          </ClayCard.Description>
          {!small && <Button className="p-0 text-decoration-none" displayType="link">
            See details
            <ClayIcon className="ml-1" symbol="angle-right" />
          </Button>}
        </div>
      </ClayCard.Body>
    </ClayCard>
  );
};

export default ProjectCard;