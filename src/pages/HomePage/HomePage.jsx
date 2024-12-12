import BlockEmail from "../../modules/Email/BlockEmail";
import Footer from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <BlockEmail/>
      <Footer/>
    </div>
  );
};
