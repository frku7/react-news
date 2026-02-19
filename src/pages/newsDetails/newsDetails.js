import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/Themecontext";


export function NewsDetails() {
  const { slug } = useParams();
  const { theme } = useContext(ThemeContext);

  const replaceDahes = (slug) => {
    return slug.replace(/-/g, " ");
  };

  return (
    <div className={theme}>
      <h1>NEWS DETAILS</h1>

      <p className="news">{replaceDahes(slug)}</p>
    </div>
  );
}