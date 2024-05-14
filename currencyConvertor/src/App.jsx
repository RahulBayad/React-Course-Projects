import { useState } from "react";
import { InputBox } from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount , setAmount] = useState(0);
  const [convertedAmount , setConvertedAmount] = useState(0);
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")

  const currencies = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencies)

  const convertAmount = ()=>{
    setConvertedAmount(amount * currencies[to])
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
  }

  return(
    <div className=" h-screen" style={{
      background : "URL('https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat"
    }}>
    
      <h3 className="text-2xl font-bold italic py-2 bg-blue-600 text-gray-100 text-center">Currency Convertor</h3>
      <br />
      <div className=" bg-white backdrop-blur-md border bg-opacity-10 border-gray-400 m-auto max-w-xl rounded-md py-10 px-10">
        <div>
          <InputBox
            label="From"
            amount={amount}
            currency={from}
            currencyOptions={currencyOptions}
            onAmountChange={(val)=>setAmount(val)}
            onCurrencyChange={(val)=>setFrom(val)}
          />
        </div>
        <div className="text-center relative -mt-2 -mb-2 ">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
            onClick={()=>swap()}
          > Swap</button>
        </div>
        <div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currency={to}
            currencyOptions={currencyOptions}
            onAmountChange={(val)=>setAmount(val)}
            onCurrencyChange={(val)=>setTo(val)}
            amountDisable={true}
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 w-full rounded-md mt-6"
            onClick={()=>convertAmount()}
          >Convert</button>
        </div>
      </div>
    </div>
  )

  
}

export default App;
