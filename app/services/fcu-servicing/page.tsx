import { generatePageMetadata } from "@/lib/metadata";
import FcuServicingContent from "@/components/pages/services/fcu-servicing";


export const metadata = generatePageMetadata({

  title:
    "FCU Servicing Qatar | Fan Coil Unit Cleaning & Maintenance Doha",

  description:
    "Professional FCU servicing in Qatar including chemical coil cleaning, drain flushing, filter replacement and chilled water system maintenance for villas and apartments in Doha, Pearl Qatar and Lusail.",

  path:
    "/services/fcu-servicing",

  type:
    "website",

});


const schema = [

{
"@context":"https://schema.org",

"@type":"Service",

"@id":
"https://homekeep.qa/services/fcu-servicing#service",

"name":
"FCU Servicing Qatar",

"serviceType":
"Fan Coil Unit Cleaning and Maintenance",

"description":
"Professional Fan Coil Unit servicing, chemical cleaning, coil washing, drain cleaning and FCU maintenance for residential and commercial properties in Qatar.",


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
"addressLocality":"Doha",
"addressCountry":"QA"
}

},


"areaServed":[

{
"@type":"City",
"name":"Doha"
},

{
"@type":"Place",
"name":"Pearl Qatar"
},

{
"@type":"Place",
"name":"Lusail"
},

{
"@type":"Place",
"name":"West Bay"
}

],


"offers":{

"@type":"Offer",

"priceCurrency":
"QAR",

"price":
"225",

"availability":
"https://schema.org/InStock",

"url":
"https://homekeep.qa/services/fcu-servicing"

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
"What is FCU servicing in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"FCU servicing includes filter cleaning, coil washing, drain cleaning, inspection and performance testing of Fan Coil Units connected to chilled water systems commonly installed in Qatar villas and apartments."

}

},



{
"@type":"Question",

"name":
"How often should FCU units be cleaned in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"FCU units in Qatar should generally be serviced every 3 to 4 months because dust, humidity and continuous cooling usage reduce efficiency and air quality."

}

},



{
"@type":"Question",

"name":
"Do you provide FCU chemical cleaning in Pearl Qatar and Lusail?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides FCU chemical cleaning and maintenance services across Pearl Qatar, Lusail, West Bay and Doha."

}

},



{
"@type":"Question",

"name":
"Why is my FCU leaking water?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"FCU water leakage is usually caused by blocked drain lines, dirty drain trays, clogged filters or coil problems. Professional cleaning prevents ceiling damage and improves cooling performance."

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

<FcuServicingContent />

</>

);

}
