// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import faqData from "./faqData";


// const FAQ = () => {


//     const [active, setActive] = useState(null);



//     return (

//         <section className="
// py-20
// bg-white
// ">


//             <div className="
// max-w-5xl
// mx-auto
// px-6
// ">


//                 <div className="
// text-center
// mb-12
// ">

//                     <h2 className="
// text-4xl
// font-bold
// text-gray-900
// ">
//                         Frequently Asked Questions
//                     </h2>


//                     <p className="
// mt-3
// text-gray-600
// ">
//                         Everything you need to know about Siksha At Home
//                     </p>


//                 </div>



//                 <div className="
// space-y-4
// ">

//                     {
//                         faqData.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="
// border
// rounded-xl
// overflow-hidden
// "
//                             >


//                                 <button

//                                     onClick={() =>
//                                         setActive(
//                                             active === item.id ? null : item.id
//                                         )
//                                     }

//                                     className="
// w-full
// flex
// justify-between
// items-center
// p-5
// text-left
// font-semibold
// text-lg
// "
//                                 >


//                                     {item.question}


//                                     <ChevronDown

//                                         className={`
// transition-transform
// ${active === item.id ? "rotate-180" : ""}
// `}

//                                     />


//                                 </button>



//                                 {
//                                     active === item.id && (

//                                         <div className="
// px-5
// pb-5
// text-gray-600
// leading-relaxed
// ">

//                                             {item.answer}

//                                         </div>

//                                     )
//                                 }



//                             </div>
//                         ))
//                     }


//                 </div>



//             </div>


//         </section>

//     )

// }


// export default FAQ;

import { useState } from "react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

const FAQ = () => {
    const [openId, setOpenId] = useState(1);

    return (
        <section className="py-24 bg-slate-50">
            <Container>

                <SectionHeading
                    subtitle="FAQs"
                    title="Frequently Asked Questions"
                />

                <div className="max-w-4xl mx-auto mt-16 space-y-5">
                    {faqData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            openId={openId}
                            setOpenId={setOpenId}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default FAQ;