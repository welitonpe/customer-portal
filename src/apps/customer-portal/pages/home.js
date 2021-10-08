import ProjectCard from "../components/ProjectCard";

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
      <div className="home d-flex flex-row flex-wrap">
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
        {projects.map((project, index) => <ProjectCard key={index} {...project} small />)}
      </div>
    </>
  );
};

export default Home;
