import ProjectCard from "../components/ProjectCard";
import ProjectCardFind from "../components/ProjectCardFind";

const projects = [
  {
    title: "Super1",
    status: "Active",
    endDate: "Jul 19, 2050",
    state: "United States",
    subtitle: "Digitals"
  }
];

const Home = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="d-flex flex-row flex-wrap">
        {projects.map((project, index) => <ProjectCard key={index} title={project.title} status={project.status} endDate={project.endDate} state={project.state} />)}

        {projects.map((project, index) => <ProjectCardFind key={index} title={project.title} status={project.status} endDate={project.endDate} state={project.state} subtitle={project.subtitle} />)}
      </div>
    </>
  );
};

export default Home;
