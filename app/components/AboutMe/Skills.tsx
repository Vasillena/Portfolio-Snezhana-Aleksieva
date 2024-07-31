import CreativeFields from "./CreativeFields";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";
import SoftwareSkills from "./SoftwareSkills";

export default function Skills(): JSX.Element {
  return (
    <>
      <SoftwareSkills />
      <Languages />
      <CreativeFields />
      <SoftSkills />
    </>
  );
}
