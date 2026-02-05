import React, { useState } from "react";

const Home = () => {
  const [income, setIncome] = useState("")
  const [incomeType, setIncomeType] = useState("annual")
  const [pension, setPension] = useState("")
  const [nhf, setNhf] = useState("")
  const [nhis, setNhis] = useState("")
  const [insurance, setInsurance] = useState("")
  const [annualRent, setAnnualRent] = useState("")
  const [loanInterest, setLoanInterest] = useState("")
  const [result, setResult] = useState(null);

  const getAnnualIncome = () => {
    const value = Number(income) || 0;
    return incomeType === "monthly" ? value * 12 : value;
  };

  const getTotalDeduction = () => 
    Number(pension || 0) +
    Number(nhf || 0) +
    Number(nhis || 0) +
    Number(insurance || 0) +
    Number(annualRent || 0) +
    Number(loanInterest || 0);
  
  const calculatePAYE = (annualIncome, deductions) => {
    
    const CRA = 200000 + annualIncome * 0.2;

    let taxableIncome = annualIncome - CRA - deductions;
    if (taxableIncome < 0) taxableIncome = 0;

    const brackets = [
      { lower: 0, upper: 300000, rate: 0.07},
      { lower: 300000, upper: 600000, rate: 0.11},
      { lower: 600000, upper: 1100000, rate: 0.15},
      { lower: 1100000, upper: 1600000, rate: 0.19},
      { lower: 1600000, upper: 3200000, rate: 0.21},
      { lower: 3200000, upper:  Infinity, rate: 0.24},
    ];

    let totalTax = 0;

    for (const b of brackets) {
      if (taxableIncome <= b.lower) continue;
      const taxablePortion = Math.min(taxableIncome, b.upper) - b.lower;
      totalTax =+ taxablePortion * b.rate;
    }

    return {
      taxableIncome,
      annualTax: totalTax,
      monthlyTax: totalTax / 12,
      netAnnualIncome: annualIncome - totalTax,
      netMonthlyIncome: (annualIncome - totalTax) / 12,
    };
  };

  const handleCalculate = () => {
    const annualIncome = getAnnualIncome();
    if (annualIncome <= 0) {
      setResult(null);
      return;
    }

    const deductions = getTotalDeduction();
    setResult(calculatePAYE(annualIncome, deductions));
  };

  
  // const calculatePAYE2026 = (annualTaxable) => {
  //   let tax = 0;
  //   let lower = 0;

  //   for (let b of brackets) {
  //     const { cap, rate } = b;
  //     if ( annualTaxable > lower ) {
  //       const portion = Math.min(annualTaxable, b.cap) - lower;
  //       tax += portion * rate;
  //       lower = cap
  //     } else {break;}
  //   }
  //   return tax;
  // };

  // const handleCalculate = () => {
  //   const annualIncome = income;
  //   const totalDeductionAnnual = (pension + nhf + nhis + insurance) * 12 + annualRent + loanInterest;

  //   const taxable = Math.max(annualIncome - totalDeductionAnnual, 0);
  //   const taxAnnual = calculatePAYE2026(taxable)
  //   const netAnnual = annualIncome - taxAnnual;
    
  //   setAnnualTaxable(taxable);
  //   setAnnualTaxDue(taxAnnual);
  //   setMonthlyTaxDue(taxAnnual / 12);
  //   setAnnualNetIncome(netAnnual);
  //   setMonthlyNetIncome(netAnnual / 12);
  // };
  // const formatCurrency = (num) => Number(num).toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 items-center">
      <div className="my-4 px-6 py-4">
        <h2 className="text-center mb-3 font-bold text-2xl text-green-950">Personal Income Tax Calculator</h2>
        <p className="mb-2">This personal income tax calculator simulates the tax rates you would be subject to under our proposed Nigeria Tax bill, as well as the current tax rates as stipulated by law, allowing you to compare and understand the potential impact on your income.</p>
        <p className="mb-2 font-extrabold">Note: Your actual tax payable may be less subject to tax deductible contributions such as pension and National Housing Fund.</p>
      </div>
      <div>
        <h2 className="text-left text-2xl mb-2 text-gray-800">PAYE Tax Calculator </h2>
        <div className="mb-4 flex gap-2">
          {["annual", "monthly"].map((type) => (
            <button
              key={type}
              onClick={() => setIncomeType(type)} className={`flex-1 rounded p-2 font-medium ${incomeType === type ? "bg-green-800 text-white" : "bg-gray-200 text-green-800"}`}
            >
              {type === "annual" ? "Annual Income" : "Monthly Income"}
            </button>  
          ))}
        </div>  

        <div className="bg-white px-6 py-4 rounded-2xl shadow-lg">
          <h2 className="font-semibold text-lg text-gray-800">Basic Information</h2>
          <div className="mt-1 h-0.5 w-full bg-green-700 mb-3"></div>
          <label className="font-semibold block mb-1">
            {incomeType === "monthly" ? "Gross Monthly Income (₦)" : "Gross Annual Income (₦)" }
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))} className="w-full  p-2 rounded mb-4 bg-gray-50"
          />  

          <div>
            <h2 className="font-semibold text-lg text-gray-800">Additional Deductions (Optional)</h2>
            <div className="mt-1 h-0.5 w-full bg-green-700 mb-3"></div>
            <div className="grid md:grid-cols-2 gap-12 items-start ">
              <div  >
                {[
                  ["pension", pension, setPension],
                  ["NHF", nhf, setNhf],
                  ["NHIS", nhis, setNhis]
                ].map(([label, value, setter]) => (
                  <div>
                    <label className="font-semibold block mb-1">
                      {label}
                    </label>
                    <input
                    key={label}
                    type="number"
                    value={value}
                    onChange={(e) => setter(e.target.value)} className="w-full rounded bg-gray-50"
                  />  
                  </div>
                ))}
              </div>
              <div>
                {[
                  ["Insurance", insurance, setInsurance],
                  ["Annual Rent", annualRent, setAnnualRent],
                  ["Loan Interest", loanInterest, setLoanInterest]
                ].map(([label, value, setter]) => (
                  <div>
                    <label className="font-semibold block mb-1">
                      {label}
                    </label>
                    <input
                    key={label}
                    type="number"
                    value={value}
                    onChange={(e) => setter(e.target.value)} className="w-full rounded bg-gray-50"
                  />  
                  </div>
                ))}
                  
                
              </div>
            </div>
            
            <button onClick={handleCalculate} className="w-full bg-green-800 text-white py-2 my-9 rounded hover:bg-green-800 mb-4">
            Calculate Tax
            </button>
          </div>

          {result && (
              <div className="mt-6 bg-gray-50 p-4 rounded space-y-2 border-l-4 border-green-600 ">
                {result.taxableIncome <= 0 ? (<p className="text-red-600 font-semibold">No tax is due. Taxable income is below ₦800,000 effective threshold.</p>):(
                  <div>
                    <p><strong>Taxable Income:</strong><span className="font-semibold text-gray-900"> ₦ {result.taxableIncome.toLocaleString()}</span></p>
                    <p><strong>Annual Tax:</strong><span className="font-semibold text-red-600"> ₦ {result.annualTax.toLocaleString()}</span></p>
                    <p><strong>Monthly Tax:</strong><span className="font-semibold text-red-600"> ₦ {result.monthlyTax.toLocaleString()}</span></p>
                    <p><strong>Net Annual Income:</strong><span className="font-semibold text-green-800"> ₦ {result.netAnnualIncome.toLocaleString()}</span></p>
                    <p><strong>Net Monthly Income:</strong><span className="font-semibold text-green-800"> ₦ {result.netMonthlyIncome.toLocaleString()}</span></p>
                  </div>  
                )}
              </div>
            )}

          
        </div>

        
      </div>
    </div>
  )
}

export default Home;