import Footer from "./Footer";

const SecondSideBar = () => {
  return (
    <>
      <section className="secsidebar bg-white dark:bg-[#020817]">
        <h2>Second Side Bar</h2>

        <Footer
          className="w-full flex justify-between items-center"
          blockImg={true}
        />
      </section>
    </>
  );
};

export default SecondSideBar;
