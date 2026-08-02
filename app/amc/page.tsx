import { generatePageMetadata } from "@/lib/metadata";
import AmcContent from "@/components/pages/amc";


export const metadata = generatePageMetadata({

  title:
    "AC AMC Qatar | Annual Maintenance Contract for Villas & Buildings",

  description:
    "Premium AC AMC in Qatar covering AC, FCU, AHU, chiller and plumbing systems. Annual maintenance contracts for villas, apartments and commercial properties in Doha, Pearl Qatar and Lusail.",

  path:
    "/amc",

  type:
    "website",

});


const schemas = [

{

"@context":"https://schema.org",

"@type":"Service",

"@id":
"https://homekeep.qa/amc#service",

"name":
"AC Annual Maintenance Contract Qatar",

"serviceType":
"HVAC Annual Maintenance Contract",

"description":
"Annual maintenance contracts for AC, FCU, AHU, chiller and plumbing systems including scheduled inspections, preventive maintenance and priority support in Qatar.",


"provider":{

"@type":[
"LocalBusiness",
"HVACBusiness"
],

"name":
"Homekeep Improvements",

"url":
"https://homekeep.qa",

"telephone":
"+97450002548",

"address":{

"@type":"PostalAddress",

"addressLocality":
"Doha",

"addressCountry":
"QA"

}

},


"areaServed":[

"Doha",
"Pearl Qatar",
"Lusail",
"West Bay",
"Simaisma",
"Al Wakrah",
"Al Rayyan"

],


"offers":{

"@type":"Offer",

"priceCurrency":
"QAR",

"price":
"2000",

"url":
"https://homekeep.qa/amc",

"availability":
"https://schema.org/InStock"

}

},



{

"@context":"https://schema.org",

"@type":"FAQPage",

"mainEntity":[


{

"@type":"Question",

"name":
"What is an AC AMC in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"An AC Annual Maintenance Contract is a yearly agreement covering scheduled AC inspections, cleaning, preventive maintenance and priority service support for residential and commercial properties."

}

},


{

"@type":"Question",

"name":
"How much does an AC AMC cost in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"AC AMC pricing in Qatar depends on the number of units, property size and system type. Homekeep provides customized AMC packages for apartments, villas and buildings."

}

},


{

"@type":"Question",

"name":
"What systems are covered under your AMC?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Our AMC packages cover split AC, FCU, AHU, chiller systems, plumbing and selected electrical maintenance requirements."

}

},


{

"@type":"Question",

"name":
"Do you provide villa AMC in Pearl Qatar and Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides premium villa AMC packages in Pearl Qatar, Lusail, West Bay and Doha for reliable year-round cooling performance."

}

},


{

"@type":"Question",

"name":
"How many maintenance visits are included in an AMC?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"AMC packages can include scheduled quarterly visits, preventive inspections, cleaning, performance checks and priority emergency response depending on the selected plan."

}

}


]

}

];


export default function Page(){

return (

<>

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schemas)

}}

/>

<AmcContent />

</>

);

}
