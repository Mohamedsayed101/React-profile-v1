import HeadingPage from "../../Components/HeadingPage/HeadingPage";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";

import { skills } from "../../DataStore/skills";

export default function Skills() {
  const langs = skills["Programming Languages"];
  const tools = skills.Tools;
  const CsConcept = skills["Programming Concept"];
  const forentEnd = skills["Frontend Development"];


  return (
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="Skills" />
        <div className="flex gap-6 flex-wrap justify-center" data-aos="fade-up-left">
          <SkillsCard
            title="Programming Languages"
            data={langs}
            titleIcon={langs.icon}
          />
          <SkillsCard
            title="Frontend Development"
            data={forentEnd}
            titleIcon={forentEnd.icon}
          />
          <SkillsCard title="Tools" data={tools} titleIcon={tools.icon} />
          <SkillsCard
            title="Concept Core"
            data={CsConcept}
            titleIcon={CsConcept.icon}
          />
        </div>
      </div>
    </>
  );
}
