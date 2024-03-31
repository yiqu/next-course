import Link from "next/link";

function Projects() {

  return (
    <div className="text-blue-600 flex justify-start align-middle space-x-3">
      {
        projectList.map((project) => {
          return (
            <Link key={ project } href={ `/projects/${project}` }>
              { project }
            </Link>
          );
        })
      }
    </div>
  );
}

export default Projects;

const projectList = ['angular', 'react', 'vue'];