import Styles from "../css/FeaturedProjects.module.css";
import { BsCircleFill } from "react-icons/bs";

const ProjectTemplate = ({ project }) => {
  const tags = project.tags;
  return (
    <div className={Styles["template"]}>
      <p>
        <span>
          <BsCircleFill />
        </span>
        {project.name}
      </p>
      <div className={Styles["projectPhoto"]}>
        <div className={Styles["overlay"]}>
          <img src={project.img} alt={project.name} />
        </div>
        <div className={Styles["showName"]}>
          <h1>{project.name}</h1>
        </div>
      </div>
      <div className={Styles["tags"]}>
        {tags.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectTemplate;
