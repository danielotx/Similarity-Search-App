import Content from "../components/content";
import SideBar from "../components/sidebar";

function Home() {

  return (
    <>
      <div className="d-flex">
      <SideBar />
      <Content />
      </div>
    </>
  )
  
}

export default Home;