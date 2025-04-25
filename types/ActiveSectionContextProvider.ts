import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]['name'];
export type ActiveSectionContextProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};