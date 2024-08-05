import CreativeFields from "./CreativeFields";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";
import SoftwareSkills from "./SoftwareSkills";

export default function Skills(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-44 xl:gap-x-0">
      <SoftwareSkills />
      <Languages />
      <CreativeFields />
      <SoftSkills />
    </div>
  );
}
