import "./App.css";
import mintTrxAbi from "./mintTrxAbi.json";
import { ethers, BigNumber } from "hardhat";
import { useEffect, useState } from "react";

const mintTrxAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  //connect
  const [accounts, setAccounts] = useState([]);

  return <div className="App">Compiled + Deployed in hardhat </div>;
}

export default App;
