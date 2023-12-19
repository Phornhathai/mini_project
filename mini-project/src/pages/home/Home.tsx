import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* create left box for showing informaition */}
      <div className="leftInfo">
        leftInfo
        <div className="topInfo-left">
          <div className="viewDashboard">view dashboard</div>
          <div className="responseOption">respone option</div>
        </div>
        <div className="bottomInfo">
          <div className="box box1">box1</div>
          <div className="box box2">box2</div>
          <div className="box box3">box3</div>
          <div className="box box4">box4</div>
          <div className="box box5">box5</div>
          <div className="box box6">box6</div>
        </div>
      </div>
      {/* create right box for showing information */}
      <div className="rightInfo">
        rightInfo
        <div className="topInfo-right">
          <div className="graphicTitle1">graphic1-Title</div>
          <div className="graphicTitle2">graphic2-Title</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
