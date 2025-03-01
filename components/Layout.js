import MainNav from './MainNav';

export default function Layout({ children }) {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
}