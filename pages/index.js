import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import s from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={s.HomePageContent}></div>
      <Footer />
    </div>
  );
}
