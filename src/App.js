import "./App.css";
import React from "react";
import mintTrxAbi from "./mintTrxAbi.json";
import { ethers, BigNumber } from "hardhat";
import { useEffect, useState } from "react";

const mintTrxAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  //connect
  const [accounts, setAccounts] = useState([]);

  async function connectAccounts() {
    // check window for metamask
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  // with useEffect, setAccounts will be called on page load + reload
  useEffect(() => {
    connectAccounts();
  }, []);

  return <div className="App">Compiled + Deployed in hardhat </div>;
}

export default App;
