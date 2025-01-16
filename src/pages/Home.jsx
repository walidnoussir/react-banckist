import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";
import MoneyBord from "../components/MoneyBord";
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  return (
    <main className="h-full md:pt-8 md:px-12 py-6 px-4 flex flex-col items-center">
      <div className="text-blue-500 flex gap-2 items-center text-lg font-semibold hover:text-blue-600 duration-75 w-full justify-end px-4 md:text-xl md:w-[80%] dark:text-blue-400 dark:hover:text-blue-500">
        <Link to="/transactions">Transfer & Request money</Link>
        <FaLongArrowAltRight />
      </div>

      <Head />
      <MoneyBord />
      <Footer />
    </main>
  );
}

export default Home;
