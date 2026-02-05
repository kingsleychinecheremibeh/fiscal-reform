import welcome from "../assets/welcome.png"
import nice from "../assets/nice.png"
import Statement from "../components/Statement";
const About = () => {
  return (
    <section className="min-h-screen mt-2  items-center">
      <div className="grid md:grid-cols-2 gap-12 items-start py-3 px-6 bg-green-800">
        <div className="px-8 py-4 ">
          <h2 className="text-4xl text-white font-bold mb-10">Background</h2>
          <p className="text-white mb-4">Nigeria has a revenue crisis, and it cuts across all tiers of government. The country’s Tax to GDP ratio is one of the lowest in the world and much below the African average. This has led to an overreliance on borrowing to finance public spending which in turn limits the fiscal space as debt service costs consumes a greater portion of government revenue annually resulting in a vicious cycle of inadequate funding for socio-economic development.</p>
          <p className="text-white">While incremental progress has been recorded over the years, the outcomes have not been transformative enough to change the narrative.</p>
        </div>
        <div><img src={welcome} alt="nigeria" className='w-full h-full object-cover  shadow-lg p-3 rounded-2xl' loading='lazy' decoding='async' /></div>
      </div>
      <div>
        <Statement />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center py-3 px-6 mt-4 bg-gray-100">
        <div><img src={nice} alt="FCT" className='w-full h-full object-cover  shadow-lg p-3 rounded-2xl mt-3' loading='lazy' decoding='async' /></div>
        <div className="px-4 py-4 flex-col justify-center text-left">
          <h2 className="border-l-4 border-green-900 font-semibold flex items-start gap-4  pl-4 text-3xl mb-4">Observers & partners</h2>
          <p className="text-gray-700 leading-relaxed">Selected local and international observers and partners are expected to support the work of the committee including the World Bank, International Monetary Fund, United Nations, BudgIT, Tax Justice & Governance Platform.</p>
        </div>
      </div>
    </section>
  )
  
}

export default About;