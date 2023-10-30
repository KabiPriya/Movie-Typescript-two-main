import { useEffect } from "react";
interface IProps {
  title?: string;
  children: React.ReactNode;
}
const Layout = (props: IProps) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return (
    <>
      <main className="container">{props.children}</main>
    </>
  );
};
export default Layout;
