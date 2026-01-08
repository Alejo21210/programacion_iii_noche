import Clock from "./hooks/useEffect/Clock";
import DynamicTitle from "./hooks/useEffect/DynamicTitle";
import FetchUser from "./hooks/useEffect/FetchUser";
import LogEffect from "./hooks/useEffect/LogEffect";
import SafeFetch from "./hooks/useEffect/SafeFetch";
import ScrollLogger from "./hooks/useEffect/ScrollLogger";
import AccessWithLimit from "./hooks/useState/AccessWithLimit";
import CheckboxSummary from "./hooks/useState/CheckboxSummary";
import DocumentTitleChanger from "./hooks/useState/DocumentTitleChanger";
import HoverFont from "./hooks/useState/HoverFont";
import ParentLoginForm from "./hooks/useState/ParentLoginForm";
import PostLikes from "./hooks/useState/PostLikes";
import CalculadoraTrapecio from "./hooks/useState/áreadeuntrapecio";
import ButtonOne from "./props/ButtonOne";
import Greeting from "./props/Greeting";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import UserCard from "./props/UserCard";

function App() {
  const userData = { name: "Luis", age: 35 };
  return (
    <>
      <HoverFont/>
      <SafeFetch/>
      <ScrollLogger/>
      <DynamicTitle/>
      <Clock/>
      <FetchUser/>
      <LogEffect/>
      <CalculadoraTrapecio/>
      <DocumentTitleChanger/>
      <ParentLoginForm/>
      <PostLikes/>
      <CheckboxSummary/>
      <AccessWithLimit/>
      <Greeting name="Alejandro" lastname="Martínez" />
      <Greeting name="Ana" lastname="García" />
      <UserCard user={userData} />
      <ButtonOne onClick={() => alert("¡Hola desde el padre!")} />
      <ParentIncrementButton />
      <ParentInputNotifier />
    </>
  );
}
export default App;