import { Layout } from "@components";
import Header from "../../components/Layout/Header";
import { Banner } from "./components/Banner";
import Categories from "./components/Categories";
import News from "./components/News";
import RelativeBlog from "./components/RelativeBlog";

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <Categories />
      <News />
      <RelativeBlog />
    </Layout>
  );
};
