const Commitee = () => {

  const sections = [
    {
      letter: "A",
      title: "STEERING SUBCOMMITTEE",
      items: [
        {
          number: "1.",
          name: "steering Subcommitte",
          points: [
            "Provide overall direction for the committee and report to the President",
            "Set the guiding principles and governance for the committee and subcommittees",
            "Review and approve the work of other subcommittees and any variations as may be necessary",
            "Ensure effective handshake between and among subcommittees",
            "Press briefings and stakeholder communication",
            "Oversee and manage key stakeholders engagement e.g. with NASS, NEC, NGF etc",
            "Facilitate implementation of approved reform measures and other recommendations"
          ],
        },
      ],
    },
    {
      letter: "B",
      title: "FISCAL GOVERNANCE SUBCOMMITTEES",
      items: [
        {
          number: "2.",
          name: "Fiscal Management",
          points: [
            "Review and propose changes to the Fiscal Responsibility Act",
            "Develop a Fiscal Risk Framework for Nigeria including appropriate fiscal targets and limits e.g. debt service to revenue ratio, recurrent to capital expenditure ratios etc",
            "Measures for sustainable policy design, implementation, and regular reviews including framework for a Fiscal Policy Committee (FPC)",
            "Recommend optimal fiscal approach to achieve SDGs, Energy transition and greener economy, Multidimensional poverty reduction, etc",
            "Strategy to enhance subnational collaboration and handshake with monetary and other policies",
            "Identify fiscal improvements to the budgeting process at federal and subnational level",
            "Revenue reporting including annual reports by revenue agencies aligned with international best practice",
            "Measures to drive full tax compliance by MDAs and various tiers of government",
          ],
        },
        {
          number: "3.",
          name: "Fiscal Competitiveness and Economic Growth",
          points: [
            "Reforms in ports and customs procedures",
            "Fiscal and tax measures to make Nigeria an attractive and competitive destination, hub for tech & other startups, R&D & innovation centre, HQ/shared services and remote work location etc",
            "Measures for effective domestication and implementation of ECOWAS and AfCFTA treaties",
            "Promoting entrepreneurship and NMSMEs, incentives rationalisation, enabling the capital market etc",
            "Identify and remove unfair tax provisions, fiscal hurdles and disincentives to inclusive growth/development",
            "Develop a framework for the establishment of the Office of Tax Ombudsman & Tax Simplification",
            "Measures to counter multiplicity of taxes, earmarked taxes, levies and charges",
            "Explore alternative funding models for critical MDAs and regulators that do not involve imposition of taxes & levies on businesses",
          ],
        },
      ],
    },
    {
      letter: "C",
      title: "REVENUE TRANSFORMATION SUBCOMMITTEES",
      items: [
        {
          number: "4.",
          name: "Tax Policy Review",
          points: [
            "Review and update the 2017 National Tax Policy",
            "Recommend action plans for Nigeria in response to international tax developments including the 2-Pillars Solution, illicit financial flows, etc",
            "Develop a sustainable policy framework to protect the poor and vulnerable population",
            "Prescribe suitable policy for the taxation of informal sector and NMSME including measures to tackle informal taxation by non-state actors",
            "Review and redraft the major tax laws including CITA, PITA, CGTA, VATA, SDA, etc",
          ]
        },
        {
          number: "5.",
          name: "Tax Law Reform",
          points: [
            "Prepare draft Executive Orders and Regulations for proposed reforms and measures that do not require legislative changes",
            "Recommend Constitutional amendments and changes to strengthen Nigeria’s fiscal federalism",
            "Advise and facilitate possible translation of the major tax laws into Nigeria’s major local languages",
            "Harmonisation of revenue agencies and collection functions to enable MDAs and regulators focus on their core mandates",
            "Use of Data for Tax intelligence and economic planning including data points for a robust social register",
          ]
        },
        {
          number: "6.",
          name: "Revenue Administration",
          points: [
            "Capacity building for revenue agencies and institutionalising professionalism",
            "Modernisation and automation, and response to challenges of the digital economy",
            "Improve efficiency of collection and target a 1% cost of collection within the next 4 years",
            "Curbing corruption in revenue administration and measures to enhance taxpayers trust e.g. whistleblowing framework",
            "Structures to enhance and sustain voluntary compliance including tax agents accreditation, enhanced compliance framework (cooperative compliance), etc",
          ]
        }
      ]
    }
  ];
  return (
    <div className="space-y-10 m-10">
      <h2 className="text-green-900 text-3xl font-bold">Subcommittees</h2>
      {sections.map((section) => (
        <div key={section.letter} className="">
          <div className="flex gap-4 font-bold"><span>{section.letter}</span><span>{section.title}</span></div>
          <div className="mt-4 space-y-8">
            {section.items.map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="w-10 text-right font-medium">{item.number}</div>
                <div className="flex-1">
                  <p className="font-medium mb-2">{item.name}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Commitee;