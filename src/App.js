import InfoProfil from "./container/infoProfil/Index";
import Home from "./container/landingpage/Index";
import SellerDaftarJual from "./container/sellerDaftarJual";
import Login from "./components/Login";
import Register from "./components/Register";
import SellerHalamanProduk from "./container/SellerHalamanProduk";
import FormInfo from "./components/FormInfo";
import InfoProduk from "./container/infoProduk";
import InfoPenawaran from "./container/infoPenawaran";

function App() {
  return (
    <div className="App">
      {/* <InfoProfil /> */}
      {/* <Home/> */}
      {/* <SellerDaftarJual /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <SellerHalamanProduk /> */}
      {/* <InfoProduk /> */}
      <InfoPenawaran />
      {/* <Slider /> */}
    </div>
  );
}

export default App;
