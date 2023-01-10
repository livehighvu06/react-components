import useNavigation from "../Hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();
  if (currentPath === path) {
    return children;
  }

  return null;
}

export default Route;
