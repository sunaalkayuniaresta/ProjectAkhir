import InfoProfil from "./container/infoProfil/Index";
import Home from "./container/home/Index";
import SellerDaftarJual from "./container/sellerDaftarJual";
import Login from "./components/Login";
import Register from "./components/Register";
import SellerHalamanProduk from "./container/SellerHalamanProduk";
import FormInfo from "./components/FormInfo";
import InfoProduk from "./container/infoProduk";

function App() {
  return (
    <div className="App">
      {/* <InfoProfil /> */}
      {/* <Home/> */}
      {/* <SellerDaftarJual /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <SellerHalamanProduk />
      {/* <InfoProduk /> */}
    </div>
  );
}

export default App;
