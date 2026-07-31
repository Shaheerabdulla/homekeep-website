import { generatePageMetadata } from "@/lib/metadata";
import PearlQatarContent from "@/components/pages/areas/pearl-qatar";


export const metadata = generatePageMetadata({

  title:
    "AC Service Pearl Qatar | FCU Cleaning & Villa Maintenance",

  description:
    "Premium AC service in Pearl Qatar for villas and apartments. Homekeep provides FCU cleaning, AHU servicing, chiller maintenance, plumbing and HVAC AMC in Porto Arabia, Viva Bahriya and Qanat Quartier.",

  path:
    "/areas/pearl-qatar",

  type:
    "website",

});


const schemas = [

{

"@context":"https://schema.org",

"@type":[
"LocalBusiness",
"HVACBusiness"
],

"@id":
"https://www.homekeep.qa/areas/pearl-qatar#business",

"name":
"Homekeep Improvements Pearl Qatar",

"url":
"https://www.homekeep.qa/areas/pearl-qatar",

"telephone":
"+97450002548",

"image":
"https://www.homekeep.qa/opengraph.jpg",

"description":
"AC repair, FCU servicing, chiller maintenance and villa maintenance services in Pearl Qatar.",


"address":{

"@type":"PostalAddress",

"addressLocality":
"Pearl Qatar",

"addressRegion":
"Doha",

"addressCountry":
"QA"

},


"geo":{

"@type":"GeoCoordinates",

"latitude":
"25.3712",

"longitude":
"51.5514"

},


"areaServed":[

"Pearl Qatar",
"Porto Arabia",
"Viva Bahriya",
"Qanat Quartier",
"Isola Dana",
"Abraj Bay"

],


"offers":{

"@type":"Offer",

"priceCurrency":
"QAR",

"price":
"150",

"url":
"https://www.homekeep.qa/services/ac-service"

}

},



{

"@context":"https://schema.org",

"@type":"FAQPage",

"mainEntity":[


{

"@type":"Question",

"name":
"Who provides AC service in Pearl Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Homekeep provides AC repair, FCU cleaning, AHU servicing, chiller maintenance and villa maintenance services across Pearl Qatar including Porto Arabia, Viva Bahriya and Qanat Quartier."

}

},


{

"@type":"Question",

"name":
"Do you service FCU units in Pearl Qatar apartments?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, FCU servicing and chemical cleaning are among our main services for Pearl Qatar apartments and villas connected to chilled water systems."

}

},


{

"@type":"Question",

"name":
"Do you provide chiller maintenance in Pearl Qatar villas?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides residential chiller maintenance including inspection, cleaning and preventive maintenance for Pearl Qatar villas."

}

},


{

"@type":"Question",

"name":
"Do you offer AC maintenance contracts in Pearl Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep offers annual maintenance contracts covering AC, FCU, chiller, plumbing and villa maintenance requirements."

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

<PearlQatarContent />

</>

);

}
