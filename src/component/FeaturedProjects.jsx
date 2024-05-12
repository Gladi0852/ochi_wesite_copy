import Styles from "../css/FeaturedProjects.module.css";
import ProjectTemplate from "./ProjectTemplate";
import projects from "../Json Data/ProjectsData.json";
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedProjects = () => {
  const makeRows = () => {
    let length;
    if (projects.length > 4) {
      length = 4;
    } else {
      length = projects.length;
    }

    const rows = [];

    for (let i = 0; i < length; i += 2) {
      const item1 = projects[i];
      const item2 = i + 1 < length ? projects[i + 1] : null;

      const row = (
        <div className={Styles["projectSection"]} key={i}>
          {/* <div className={Styles["showName"]}>
            <h1>hello</h1>
          </div> */}
          <ProjectTemplate project={item1} />
          {item2 && <ProjectTemplate project={item2} />}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };
  return (
    <div className={Styles["featuredProjects"]}>
      <h2>Featured projects</h2>
      <hr />
      <div className={Styles["templateContainer"]}>
        {/* {projects.map((project) => (
          <ProjectTemplate project={project} key={project.id} />
        ))} */}
        {makeRows()}
        {/* {window.innerWidth <= 768
          ? projects.map((project) => (
              <ProjectTemplate project={project} key={project.id} />
            ))
          : makeRows()} */}
      </div>
      <div className={Styles["allProjects"]}>
        <a href="#">
          <span>VIEW ALL PROJECTS</span>
          <div className={Styles["circle"]}>
            <FiArrowUpRight className={Styles["icon"]} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
