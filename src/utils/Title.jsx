import { useEffect } from 'react';

function Title(titl) {
  useEffect(() => {
    document.title = titl;
    document.title = "Ali Reza";
  }, []);
}

export default Title;
