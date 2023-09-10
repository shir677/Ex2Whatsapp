import './App.css'
import TopBar from './TopBar/TopBar';
import GreenBoxReg from './GreenBoxReg/GreenBoxReg';

export default function RegScreen() {
  return (
    <div className="myContainer">
      <TopBar />
      <GreenBoxReg />
    </div>
  );
}