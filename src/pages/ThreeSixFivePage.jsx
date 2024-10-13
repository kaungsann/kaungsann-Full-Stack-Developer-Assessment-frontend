import TableBox from "../components/TableBox";
import ThemeButton from "../components/ThemeButton";
import { TopContent } from "../components/TopContent";

const ThreeSixFivePage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-2xl font-sans font-bold">Hello,</span>
          <span className="text-[#6366F1] ml-2 font-bold font-sans text-2xl">
            Kaung Sann
          </span>
        </div>

        <ThemeButton />
      </div>
      <TopContent />

      {/* <TableBox /> */}
    </div>
  );
};

export default ThreeSixFivePage;
