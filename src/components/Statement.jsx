import { useState } from "react";
import FAQ from "../components/FAQ"

const Statement = () => {

  const tabs = [
    {id:"Statement of Purpose", label: "Statement of Purpose" },
    {id:"Key Challenges", label: "Key Challenges" },
    {id:"Deliverables & Outcomes", label: "Deliverables & Outcomes" },
    {id:"Composition", label: "Composition" },
    {id:"faq", label: "FAQ" },
  ];

  const [activeTab, setActiveTab] = useState("Statement of Purpose");

  

  return (
    <div className=" px-6 md:px-16 items-center overflow-x-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-2 px-2 py-2 justify-center">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
          className={`
              relative px-3 py-1 text-center rounded-full md:rounded-none text-sm font-medium transition cursor-pointer
              ${activeTab === tab.id
                ? "bg-green-900 text-white md:bg-transparent md:text-black md:border-b-2 md:border-green-900"
                : "bg-gray-100 text-gray-600 hover:text-green-900 md:bg-transparent"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>  
      
      <section className="mt-8 space-y-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
        {activeTab === "Statement of Purpose" && (
          <div className="">
            <h2 className="font-bold text-lg text-gray-800 mb-10">The key objectives of the Committee’s work include:</h2>
            <ul className="font-semibold space-y-3 list-disc list-inside leading-relaxed marker:text-green-900">
              <li> Harmonisation of multiple taxes and levies at all levels of government to a few that are broad based and easy to administer</li>
              <li> Unification of revenue collection functions into single agency per level of government as much as possible</li>
              <li> Modernisation and simplification of the tax system including the use of technology for revenue administration</li>
              <li> Leveraging on data for intelligence to curb evasion and aggressive tax avoidance</li>
              <li> Remove tax provisions which serve as impediments to business and economic growth</li>
              <li> Devise structures and framework to institutionalise reforms for effective policy coordination and collaboration among government agencies and tiers of government</li>
              <li> Improve efficiency of revenue collection and transparent reporting</li>
              <li> Ensure effective utilisation of tax and other revenues for social good to boost citizens’ tax morale, promote tax culture and drive voluntary compliance</li>
              <li> Transform revenue generation for sustainable development to achieve at least 18% Tax to GDP ratio within the next 3 years.</li>
            </ul>
          </div>        )}

        {activeTab === "Key Challenges" &&(
          <div>
            <h2 className="font-bold text-lg text-gray-800 mb-10">The major challenges of the Nigerian tax system, which are well documented, include:</h2>
            <ul className="font-semibold space-y-3 list-disc list-inside leading-relaxed marker:text-green-900">
              <li> Multiplicity of taxes and multiple revenue collection agencies</li>
              <li> Largely fragmented, rudimentary, and complex tax system adding to business risk and uncertainties</li>
              <li> High cost of revenue administration on the part of government and excessive burden of compliance on the part of taxpayers</li>
              <li> Poor accountability and inability to demonstrate efficient utilisation of tax revenue for commensurate fiscal exchange</li>
              <li> Growing tax expenditure, erosion of the country’s tax base and arbitrary tax waivers</li>
            </ul>
          </div>
        ) }

        {activeTab === "Deliverables & Outcomes" && (
          <div>
            <h2 className="font-bold text-lg text-gray-800 mb-10">The expected outcomes from the work of the committee will include, but not limited to the following:</h2>
            <ul className="font-semibold space-y-3 list-disc list-inside leading-relaxed marker:text-green-900">
              <li> Repeal of existing taxes and levies especially those that are suboptimal, obsolete or unduly burdensome and enactment of new harmonised tax laws</li>
              <li> Preparation of a harmonised list of taxes and levies, not exceeding single digit in number and covering all levels of government</li>
              <li> Review of the 2017 National Tax Policy to produce a new National Policy on Tax and Fiscal Policy for ratification by the federal and state governments</li>
              <li> A national fiscal risk framework for efficient fiscal governance and fiscal stability</li>
              <li> Enhancements to the revenue administration system to improve revenue mobilisation and a robust framework for tax revenue accounting and reporting to improve taxpayer trust</li>
              <li> Establishment of Federal Office of Tax Ombudsman and Tax Simplification</li>
              <li> Executive Orders and Regulations to implement tax and fiscal reforms which do not require legislative changes</li>
              <li> Model tax codes and revenue administration templates for adoption or adaptation by subnational level of government</li>
              <li> A National Tax Amnesty Scheme to expand the tax net and give taxpayers the opportunity for self-remediation</li>
            </ul>
          </div>
        )}

        {activeTab === "Composition" && (
          <div>
            <h2 className="font-bold text-lg text-gray-800 mb-10">The membership of the committee has been carefully constituted to ensure diversity of in-depth knowledge, robust expertise, and broad representation by key stakeholder groups across the geopolitical zones.</h2>
            <ol className="list-decimal list-inside space-y-2 font-semibold">
              <li>Taiwo Oyedele, Chairman </li>
              <li>Representatives of Tax Practice, Law and Accounting Firms</li>
              <li>Members of the Tax Advisory Committee</li>
              <li>National Tax Policy Implementation Committee</li>
              <li>Renowned Fiscal Policy and Tax Experts</li>
              <li>Representative of the Chartered Institute of Taxation of Nigeria (CITN)</li>
              <li>Representative of the Institute of Chartered Accountants of Nigeria (ICAN)</li>
              <li>Representative of the Association of National Accountants of Nigeria (ANAN)</li>
              <li>Representative of the Nigerian Bar Association (NBA)</li>
              <li>Nigerian Economic Summit Group (NESG)</li>
              <li>Organised Private Sector of Nigeria (OPSN)</li>
              <li>Nigerian Association of Small and Medium Enterprises (NASME)</li>
              <li>Women in Business (WIMBIZ)</li>
              <li>Representative of the Federal Ministry of Justice</li>
              <li>Representative of the Federal Ministry of Finance</li>
              <li>Representative of Federal Ministry of Trade, Industry & Investment</li>
              <li>Representative of Ministry of Telecommunications & Digital Economy</li>
              <li>Nigerian Investment Promotion Commission (NIPC)</li>
              <li>Tariff Technical Committee</li>
              <li>Nigerian Ports Authority (NPA)</li>
              <li>Nigerian Maritime Administration and Safety Agency (NIMASA)</li>
              <li>Nigerian Upstream Petroleum Regulatory Commission (NUPRC)</li>
              <li>The Federal Inland Revenue Service (FIRS)</li>
              <li>The Joint Tax Board (JTB)</li>
              <li>Nigeria Customs Service</li>
              <li>Representative of Association of Local Government of Nigeria (ALGON)</li>
              <li>National Institute for Legislative and Democratic Studies (NILDS)</li>
              <li>National Institute for Policy and Strategic Studies (NIPSS)</li>
              <li>Revenue Mobilisation Allocation and Fiscal Committee (RMAFC) </li>
              <li>The Budget Office of the Federation</li>
              <li>Accountant General of the Federation</li>
              <li>National Bureau of Statistics</li>
              <li>DG, Nigeria Governors’ Forum</li>
              <li>Debt Management Office</li>
              <li>Chairman, Finance Commissioners’ Forum</li>
              <li>Central Bank of Nigeria</li>
            </ol>
          </div>
        )}

        {activeTab === "faq" && (
          <div><FAQ /></div>
        )}
      </section>
    </div>
  )
}
export default Statement;