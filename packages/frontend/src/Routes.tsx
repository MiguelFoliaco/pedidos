import { BrowserRouter, Routes as R, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { OrderList } from "./pages/orders/OrderList";


export const Routes = () => {
  return (
    <BrowserRouter>
      <R>
        <Route path="/" element={<Home />} />
        <Route path="/store/:storeId" element={<OrderList />} />
      </R>
    </BrowserRouter>
  );
};
