import { generatePageMetadata } from "@/lib/metadata";
import LusailContent from "@/components/pages/areas/lusail";


export const metadata = generatePageMetadata({

  title:
    "AC Service Lusail | FCU Cleaning, Chiller & Villa Maintenance",

  description:
    "Professional AC service in Lusail City for villas, apartments and towers. Homekeep provides AC repair, FCU servicing, AHU maintenance, chiller systems and plumbing across Fox Hills, Marina District and Lusail.",

  path:
    "/areas/lusail",

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
"https://www.homekeep.qa/areas/lusail#business",

"name":
"Homekeep Improvements Lusail",

"url":
"https://www.homekeep.qa/areas/lusail",

"telephone":
"+97450002548",

"image":
"https://www.homekeep.qa/opengraph.jpg",

"description":
"AC repair, FCU servicing, AHU maintenance, chiller service and villa maintenance in Lusail City Qatar.",


"address":{

"@type":"PostalAddress",

"addressLocality":
"Lusail",

"addressRegion":
"Al Daayen",

"addressCountry":
"QA"

},


"geo":{

"@type":"GeoCoordinates",

"latitude":
"25.4182",

"longitude":
"51.5034"

},


"areaServed":[

"Lusail",

"Fox Hills",

"Marina District",

"Lusail Waterfront",

"Lusail Hills",

"Yasmeen City",

"Golf District"

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
"Who provides AC service in Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Homekeep provides AC repair, FCU cleaning, AHU servicing, chiller maintenance and plumbing services throughout Lusail City including Fox Hills, Marina District and residential towers."

}

},


{

"@type":"Question",

"name":
"How much does AC service cost in Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"AC servicing in Lusail starts from QAR 150 for split units. FCU servicing, AHU maintenance and chiller services are priced according to system type and requirement."

}

},


{

"@type":"Question",

"name":
"Do you provide FCU servicing in Lusail apartments?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep specializes in FCU cleaning and maintenance for Lusail apartments and buildings connected to central chilled water systems."

}

},


{

"@type":"Question",

"name":
"Do you offer emergency AC repair in Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, we provide fast AC repair response in Lusail for cooling problems, water leakage, electrical faults and AC breakdowns."

}

},


{

"@type":"Question",

"name":
"Do you provide villa maintenance in Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides complete villa maintenance including AC, HVAC, plumbing and electrical services in Lusail."

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

<LusailContent />

</>

);

}
