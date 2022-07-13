import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./Components/DemoComponent/ClassComponent";
import FunctionComponent from "./Components/DemoComponent/FunctionComponent";
import Home from "./Components/BaiTapLayout/Home";
import DataBinding from "./Components/DataBinding/DataBinding";
import HandlingEvents from "./Components/HandlingEvents/HandlingEvents";
import RenderingWithConditions from "./Components/RenderingWithConditions/RenderingWithConditions";
import State from "./Components/State/State";
import Styling from "./Components/Styling/Styling";
import BaiTapXe from "./Components/BaiTapXe/BaiTapXe";
import RenderingWithMap from "./Components/RenderingWithMap/RenderingWithMap";
import ParentProps from "./Components/Props/ParentProps";
import BaiTapProps from "./Components/BaiTapProps/BaiTapProps";
import DemoRedux from "./Components/Redux/DemoRedux/Parent"
import BaiTapDienThoaiRedux from "./Components/Redux/BaiTapDienThoai/BaiTapDienThoai";
import BaiTapThuDo from "./Components/Redux/baiTapThiDo/BaiTapThuDo";
import LifeCycle from "./Components/LifeCycle/LifeCycle";
import BaiTapPhongVe from "./Components/Redux/BaiTapPhongVe/BaiTapPhongVe";

function App() {
  return (
    <div>
      {/* <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent />
      <FunctionComponent /> */}
      {/* <Home /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvents />
      <hr />
      <RenderingWithConditions />
      <hr />
      <State />
      <hr />
      <Styling />
      <hr />
      <BaiTapXe />
      <hr />
      <RenderingWithMap />
      <hr />
      <ParentProps />
      <hr />
      { <BaiTapProps />
      {/* <DemoRedux /> */}
      {/* <BaiTapProps /> */}
      {/* <BaiTapThuDo /> */}
      {/* <LifeCycle /> */}
      <BaiTapPhongVe />
    </div>
  );
}

export default App;
