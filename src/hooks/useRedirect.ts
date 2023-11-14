import { navigate } from "gatsby";
import { useEffect } from "react";

export const useRedirect = (location: string) => {
  useEffect(() => {
    navigate(`https://archifiltre.fr${location}`);
  }, [location]);
};
