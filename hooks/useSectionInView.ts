import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "./useActiveSectionContext";
import { useEffect } from "react";
import { SectionName } from "@/types/ActiveSectionContextProvider";

export default function useSectionInView( sectionName: SectionName, threshold: number) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return { ref };
}
