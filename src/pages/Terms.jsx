 const Terms = () => {

  const lists = [
    { id: 1, name:"Fiscal Governance", Dimensions:"Fiscal management", deliverables:"Repeal of suboptimal taxes and enactment of harmonised tax laws"},
    { id: 2, name:"Revenue Transformation", Dimensions:"Revenue administration", deliverables:"Harmonised single digit list of taxes and levies"},
    { id: 3, name:"Growth Facilitation", Dimensions:"Tax policy review", deliverables:"Revised National Tax Policy"},
    { id: 4, name:"", Dimensions:"Tax law reform", deliverables:"National fiscal risk framework"},
    { id: 5, name:"", Dimensions:"Fiscal Competitiveness and Economic Growth", deliverables:"Bills for constitutional amendments on fiscal matters"},
    { id: 6, name:"", Dimensions:"", deliverables:"Revenue administration; accounting and reporting framework"},
    { id: 7, name:"", Dimensions:"", deliverables:"Tax Ombudsman and Office of Tax Simplification"},
    { id: 8, name:"", Dimensions:"", deliverables:"Tax and Fiscal Reform Executive Orders and Regulations"},
    { id: 9, name:"", Dimensions:"", deliverables:"Model templates for subnational"},
    { id: 10, name:"", Dimensions:"", deliverables:"National Tax Amnesty Scheme"},
  ];
  return (
    <div className="min-h-screen m-7 px-8 justify-center">
      <div className="">
        <h2 className="text-green-900 font-bold text-3xl mb-4 items-start">Terms of Reference</h2>
        <p className="font-semibold">Extensive consultations and stakeholder engagements will be carried out involving all key segments of society such as traders, women, youths, diaspora Nigerians, people living with disability and students. The list includes the following:</p>
      </div>
      <div className="flex justify-center mt-10">
        <table className=" border-gray-200">
          <thead className="bg-green-900 text-white">
            <tr>
              <th className="border  py-1">S/N</th>
              <th className="border  py-1">Pillars</th>
              <th className="border  py-1">Dimensions</th>
              <th className="border  py-1">Deliverables and outcomes</th>
            </tr>
          </thead>
          <tbody>
            {lists.map(list => (
              <tr key={list.id} className="hover:bg-gray-50">
                <td className="px-1 py-1 font-medium">{list.id}</td>
                <td className="px-1 py-1 font-medium">{list.name}</td>
                <td className="px-1 py-1 font-medium">{list.Dimensions}</td>
                <td className="px-1 py-1 font-medium">{list.deliverables}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
 }

 export default Terms;