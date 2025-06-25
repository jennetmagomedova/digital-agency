import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `SquareUp | ${title}`;
  });
};

export default useTitle;
