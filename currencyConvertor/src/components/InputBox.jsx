import React, {useId} from 'react'

function InputBox({
    label, 
    amount,
    currency,
    currencyOptions,
    onCurrencyChange,
    onAmountChange,
    amountDisable=false
}) {
   

    return(
        <div className=' bg-white border border-gray-400 rounded-lg overflow-hidden px-6 py-6 grid grid-cols-2 gap-5'>
            <div className="flex flex-col gap-4">
                <label>{label}</label>
                <input 
                    type="number"
                    value={amount}
                    onChange={(e)=> onAmountChange(e.target.value)}
                    className="rounded-md border px-2 outline-none h-8 text-sm"
                    placeholder='Amount'
                    disabled={amountDisable}
                    />
            </div>
            <div className='flex flex-col gap-4'>

                <label>Currency Type</label>
                <select className='rounded-sm outline-none h-8 text-sm bg-gray-100'
                value={currency}
                    onChange={(e)=> onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                        <option value={currency}>{currency}</option>  
                    ))}
                </select>
            </div>
        </div>
    )
}

export {InputBox};