import { RiH1, RiH2, RiH3, RiH4, RiH5, RiH6 } from "react-icons/ri";
import { IoTextSharp } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";

export default function getIcon(type, props) {
  switch (type) {
    case "h1": {
      return <RiH1 {...props} />;
    }
    case "h2": {
      return <RiH2 {...props} />;
    }
    case "h3": {
      return <RiH3 {...props} />;
    }
    case "h4": {
      return <RiH4 {...props} />;
    }
    case "h5": {
      return <RiH5 {...props} />;
    }
    case "h6": {
      return <RiH6 {...props} />;
    }
    case "p": {
      return <IoTextSharp {...props} />;
    }
    case "a": {
      return <BsLink45Deg {...props} />;
    }

    default:
      <>None</>;
  }
}
