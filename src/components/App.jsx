import { useRef } from 'react';
import Header from './Header/Header';
import MaskCursor from './MaskCursor/MaskCursor';
import StickyCursore from './StickyCursore/StickyCursore';
import Test from './Test';
import Footer from './Footer/Footer';
import RainAnimation from './Rain/RainAnimation';

export const App = () => {
  const stickyElement = useRef(null);

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'white',
        margin: 0,
      }}
    >
      <Header ref={stickyElement} />
      <StickyCursore stickyElement={stickyElement} />
      <MaskCursor />
      <Test />

      {/* <RainAnimation /> */}
      <Footer />
    </div>
  );
};
