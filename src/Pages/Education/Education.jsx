import HeadingPage from "../../Components/HeadingPage/HeadingPage";
import EduCard from "../../Components/EduCard/EduCard";

import { eduData } from "../../DataStore/Education";

export default function Education() {
  return (
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="Education" />
        <div className="flex flex-col gap-4">
          {eduData.map((item, index) => (
            <EduCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
