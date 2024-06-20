import dynamicIconImports from "lucide-react/dynamicIconImports";

const isValidIconName = (name: string): name is keyof typeof dynamicIconImports => {
  return name in dynamicIconImports;
};

export default isValidIconName;