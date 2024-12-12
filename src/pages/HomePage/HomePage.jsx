import { FlowerMarket } from "../../modules/FlowerMarket/FlowerMarket";
import { FreshAndBeautifulFlowers } from "../../modules/FreshAndBeautifulFlowers/FreshAndBeautifulFlowers";
import { Header } from "../../modules/Header/Header";
import { Help } from "../../modules/Help/Help";
import { PresentFlowers } from "../../modules/PresentFlowers/PresentFlowers";
import { SlideFlowers } from "../../modules/SlideFlowers/SlideFlowers";
import { StartBlock } from "../../modules/StartBlock/StartBlock";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <StartBlock />
      <FreshAndBeautifulFlowers />
      <FlowerMarket />
      <Help />
      <SlideFlowers />
      <PresentFlowers />
    </div>
  );
};
