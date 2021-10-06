import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Super1",
    status: "Not",
    endDate: "Jul 19, 2050",
    state: "Brazil"
  },
  {
    title: "Super2",
    status: "Yes",
    endDate: "Jul 30, 2050",
    state: "Curado 1"
  },
  {
    title: "Super3",
    status: "Yes",
    endDate: "Jul 30, 2050",
    state: "Curado 2"
  },
  {
    title: "Super4",
    status: "Yes",
    endDate: "Jul 30, 2050",
    state: "Curado 4"
  }
];

const Home = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="d-flex flex-row flex-wrap">
        {projects.map((project, index) => <ProjectCard key={index} title={project.title} status={project.status} endDate={project.endDate} state={project.state} />)}
      </div>
    </>
  );
};

export default Home;
