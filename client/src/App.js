import './App.css';
import TopBar from './TopBar/TopBar';
import GreenBoxLogin from './GreenBoxLogin/GreenBoxLogin';

export default function App({setcurrentUser}) {
  return (
    <div className="myContainer">
      <TopBar />
      <GreenBoxLogin setcurrentUser={setcurrentUser} />
    </div>
  );
}