import MyProjectComponent from "@/components/MyProjectComponent"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "My Project",
  description: "This page contains personal projects",
}

const ProjectPage = () => {
  return <MyProjectComponent />
}

export default ProjectPage
