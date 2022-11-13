import { useEffect } from 'react';

function Title(title) {
  useEffect(() => {
    document.title = title;
    document.title = "Ali Reza";
  });
}

export default Title;
