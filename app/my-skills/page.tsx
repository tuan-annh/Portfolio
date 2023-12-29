import MySkillComponent from "@/components/SkillComponent"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "My Skill",
  description: "This page contains information about my skills",
}

const SkillPage = () => {
  return <MySkillComponent />
}

export default SkillPage
