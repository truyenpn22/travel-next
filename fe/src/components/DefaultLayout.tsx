import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
