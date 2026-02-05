import { useState } from "react";

const faqItems = [
    {
      question: "What exactly is the Presidential Fiscal Policy & Tax Reforms Committee set up to do?",
      answer: "The committee was set up by President Bola Tinubu to review and redesign Nigeria’s fiscal system with respect to (1) revenue mobilisation, both tax and non-tax (2) quality of government spending and (3) sustainable debt management. In addition, the committee will identify relevant measures to make Nigeria an attractive destination for investment and facilitate inclusive economic growth.",
    },
    {
      question: "What is the timeframe for the committee’s assignment?",
      answer: "The work of the committee is expected to be completed within one year divided into 3 milestones (1) Quick Wins within 30 days focusing on urgent interventions to cushion the effect of current socio-economic challenges (2) Critical Reforms within 6 months including measures to address multiplicity of taxes, simplify the tax laws, ensure policy coordination, drive accountability and transparent reporting (3) Implementation of structural revenue reform measures and critical fiscal policy changes.",
    },
    {
      question: "Is the committee’s mandate limited to only the federal government?",
      answer: "No. The committee will work with all levels of government as critical stakeholders to ensure effective collaboration in the design and implementation of necessary fiscal policy changes and localisation of reforms at the subnational level as may be applicable.",
    },
    {
      question: "Who are the members of the committee and what was the basis for their selection?",
      answer: "embers of the committee are drawn from a diverse pool of eminently qualified Nigerians across all geopolitical zones, age brackets, religion, and gender. They represent the private sector including trade associations, small businesses, civil society, and professional bodies as well as public sector institutions at federal, states and local government levels.",
    },
    {
      question: "How can the public contribute to the work of the committee?",
      answer: "The committee will open channels of communication and platforms for submission of inputs by the end of September 2023. In addition, we have outlined various stakeholder engagement sessions with Nigerians from all walks of life including people living with disabilities, artisans, Nigerians in the diaspora, multinational companies, international investment community and so on. Everyone who has something to say will be heard.",
    },
    {
      question: "Should we expect more taxes and frequent changes to the tax laws?",
      answer: "We do not intend to introduce new taxes or impose higher tax rates. Rather, our mandate is to reduce the number of taxes and levies while harmonising revenue collection to reduce the burden on the people and businesses. The objective is to avoid taxing investment, capital, production or poverty. We plan to review and re-enact the major tax laws in a holistic manner thereby limiting the necessity for frequent changes through annual finance acts.",
    },
    {
      question: "How does the committee intend to achieve a tax to GDP ratio of 18% within the next 3 years?",
      answer: "The average tax to GDP ratio for Africa excluding Nigeria is about 18%. This is the basis for the target of 18% and the estimated tax gap of N20 trillion. There is a huge opportunity to generate revenue by leveraging technology and tax intelligence to close the tax gap. In addition, we will rationalize incentives, reduce the cost of collection, and optimise revenue from government assets and natural resources. This way we can generate more revenue without introducing new taxes.",
    },
    {
      question: "Is it true that agencies with revenue collection functions will be stopped from collecting revenues and merged with the FIRS?",
      answer: "No agency has been stopped from collecting revenue as many of them are empowered to do so by law. However, many of the agencies would rather focus on their primary functions hence we intend to harmonise the fragmented revenue collection functions into one agency for each government. This is the case in many countries including the leading tax regimes in Africa. This reform will help to improve efficiency and enable the agencies to focus on their primary mandates for the overall benefit of the economy.",
    },
    {
      question: "Can we trust the government to implement the committee’s recommendations or is this just another committee?",
      answer: "The committee was set up not just to advise the government but also to support the implementation of recommended reform measures. The committee’s assignment is being carried out to the highest degree of independence driven by national interest within the context of modern-day economic realities and emerging issues within the international community.",
    },
    {
      question: "How can we stay informed with the activities of the committee?",
      answer: "Members of the public and other stakeholders can follow our activities on social media, fiscalreformsng on X, LinkedIn, Instagram, Facebook and via our YouTube channel. We will provide regular updates via our dedicated website and press releases. You can also reach us via email at enquiries@fiscalreforms.ng or via WhatsApp chat on +234 810 975 3151.",
    },
    
  ];

const  FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className="w-full flex justify-between items-center px-4 py-3 font-medium text-green-900">
            {item.question}<span>{openIndex === index ? "-" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="px-4 pb-3 text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
