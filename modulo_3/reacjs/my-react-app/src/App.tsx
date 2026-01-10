import Contador from "./hooks/useCallback/Contador";
import ExpensiveCalc from "./hooks/useMemo/ExpensiveCalc";
import FiltroLista from "./hooks/useMemo/FiltroLista";
import CirculoColorido from "./hooks/useRef/CirculoColorido";
import FocoAutomatico from "./hooks/useRef/FocoAutomatico";
import MoverCaja from "./hooks/useRef/MoverCaja";
import ReproductorSonido from "./hooks/useRef/ReproductorSonido";
import ScrollDemo from "./hooks/useRef/ScrollDemo";

function App() {
  return (
    <>
      <FocoAutomatico />
      <CirculoColorido />
      <ScrollDemo />
      <ReproductorSonido />
      <MoverCaja />
      <ExpensiveCalc />
      <FiltroLista />
      <Contador />
    </>
  );
}

export default App;