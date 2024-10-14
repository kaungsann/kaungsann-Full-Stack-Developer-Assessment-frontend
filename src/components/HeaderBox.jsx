import ThemeButton from "./ThemeButton";

function HeaderBox() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-2xl font-sans font-bold">Hello,</span>
          <span className="text-[#6366F1] ml-2 font-bold font-sans text-2xl">
            Kaung Sann
          </span>
        </div>

        <ThemeButton />
      </div>
    </>
  );
}

export default HeaderBox;
