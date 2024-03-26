import { ToastContainer } from "react-toastify";
import Banner from "./Banner";
import BookDetails from "./BookDetails";
import Books from "./Books";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Books></Books>
            <ToastContainer />
        </div>
    );
};

export default Home;