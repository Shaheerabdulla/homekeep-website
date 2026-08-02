import { generatePageMetadata } from "@/lib/metadata";
import ChillerMaintenanceContent from "@/components/pages/services/chiller-maintenance";


export const metadata = generatePageMetadata({

  title:
    "Chiller Maintenance Qatar | Central AC Chiller Service Doha",

  description:
    "Professional chiller maintenance in Qatar for villas, buildings and commercial properties. Complete chiller servicing, condenser cleaning, chilled water system checks and AMC contracts in Doha, Pearl Qatar and Lusail.",

  path:
    "/services/chiller-maintenance",

  type:
    "website",

});


const schema = [

{
"@context":"https://schema.org",

"@type":"Service",

"@id":
"https://homekeep.qa/services/chiller-maintenance#service",

"name":
"Chiller Maintenance Qatar",

"serviceType":
"Central Chiller System Maintenance",

"description":
"Professional residential and commercial chiller maintenance including condenser cleaning, chilled water system inspection, pump checks, fault diagnosis and preventive maintenance in Qatar.",


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
"Al Waab"

],


"offers":{

"@type":"Offer",

"priceCurrency":
"QAR",

"availability":
"https://schema.org/InStock",

"url":
"https://homekeep.qa/services/chiller-maintenance"

},


"image":
"https://homekeep.qa/opengraph.jpg"

},



{

"@context":"https://schema.org",

"@type":"FAQPage",

"mainEntity":[


{

"@type":"Question",

"name":
"What chiller systems do you maintain in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Homekeep maintains residential and commercial chiller systems including air-cooled chillers, water-cooled chillers, chilled water pumps and FCU connected systems across Qatar."

}

},


{

"@type":"Question",

"name":
"How often should a chiller be serviced in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Chillers in Qatar should receive preventive maintenance quarterly, with major inspection before summer due to high cooling demand and extreme temperatures."

}

},


{

"@type":"Question",

"name":
"Do you provide chiller AMC contracts in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides customized annual maintenance contracts for villa and commercial chiller systems including scheduled inspections and emergency support."

}

},


{

"@type":"Question",

"name":
"Do you service chiller systems in Pearl Qatar and Lusail villas?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, we specialize in residential chiller maintenance for villas and apartments in Pearl Qatar, Lusail, West Bay and Doha."

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
JSON.stringify(schema)

}}

/>

<ChillerMaintenanceContent />

</>

);

}
