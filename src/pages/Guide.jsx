const Guide = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 items-center">
      <div className="px-10">
        <h2 className="text-4xl text-green-900 font-bold mb-8 py-7">Guiding Principles</h2>
        <p className="text-green-800 font-medium py-4">The work of the committee will be guided by the following principles:</p>
        <ol className="list-decimal list-inside space-y-2 font-semibold">
          <li><span className="font-bold">National Interest</span> – every member and participants regardless of their affiliation or political interests shall put Nigeria’s interest first and above all other considerations. International best practice ideas should be considered within our local context.</li>
          <li><span className="font-bold">Data driven</span>– Proposals must be evidence based and all submissions and recommendation must be data driven to the extent possible. In God we trust, all others must bring data (<span>Edwards Deming</span>).</li>
          <li><span className="font-bold">Impact assessment</span> – Every proposal shall be accompanied with detailed impact assessment both quantitative and qualitative as it may affect stakeholders directly and indirectly in terms of the ultimate burden or benefit where applicable.</li>
          <li><span className="font-bold">Tax philosophy</span>– Let everyone breathe especially the poor. Government does not intend to tax poverty but rather promote prosperity and share out of it by way of tax. Taxes on investment or production will be eliminated to the extent practicable in favour of taxes on returns, income and consumption. We will only tax fruits, not seeds.</li>
          <li><span className="font-bold">No new taxes</span> – We do not intend to introduce new taxes or increase the rates of existing taxes except if it becomes necessary to compensate for harmonised taxes and levies or prevent revenue loss.</li>
          <li><span className="font-bold">Facilitate inclusive growth</span> – We will remove tax and fiscal bottlenecks and disincentives. Our goal is to promote investment and facilitate economic growth as a sustainable way to grow and diversify government revenue.</li>
          <li><span className="font-bold">Ensure equity</span>We will promote fiscal equity for all stakeholders including investors and businesses, both local and foreign, and all tiers of government – federal and subnational</li>
          <li><span className="font-bold">Diversity of views</span>– We will seek and respect members and other stakeholders’ views. We will consult widely with all key stakeholders and the general public. Differences and disagreements should be expressed professionally with civility.<span> It is not who is right, but what is right, that is of importance – Thomas Huxley.</span>span</li>
          <li><span className="font-bold">Partnership and co-creation</span> – We will partner with key stakeholders including organised private sector, public institutions, the media, civil society, international organisations and the Nigerian people.</li>
          <li><span className="font-bold">Prioritise</span> – We will prioritise our interventions and recommendations focusing on the most impactful and relatively easy to implement measures in terms of time, cost and complexity starting with issues on which there is broad consensus.</li>
        </ol>
      </div>
    </div>
  )
};
export default Guide;