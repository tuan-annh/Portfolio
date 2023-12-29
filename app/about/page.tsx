import AboutComponent from "@/components/AboutPageComponent"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "About Page",
  description: "This is a personal information page",
}

const AboutPage = () => {
  return <AboutComponent />
}

export default AboutPage
