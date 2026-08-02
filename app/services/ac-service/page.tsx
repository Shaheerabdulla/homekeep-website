import { generatePageMetadata } from "@/lib/metadata";
import AcServiceContent from "@/components/pages/services/ac-service";


export const metadata = generatePageMetadata({

  title:
    "AC Service Qatar | AC Repair Doha & HVAC Maintenance",

  description:
    "24/7 AC service and repair in Qatar for villas, apartments and offices. Expert AC cleaning, gas charging, troubleshooting and maintenance in Doha, Pearl Qatar, Lusail and West Bay.",

  path:
    "/services/ac-service",

  type:
    "website",

});


const schemas = [

{

"@context":"https://schema.org",

"@type":"Service",

"@id":
"https://homekeep.qa/services/ac-service#service",

"name":
"AC Service Qatar",

"serviceType":
"Air Conditioning Repair and Maintenance",

"description":
"Professional AC repair, AC cleaning, refrigerant checking, troubleshooting and preventive maintenance services across Qatar.",


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
"Al Waab",
"Al Rayyan"

],


"offers":{

"@type":"Offer",

"priceCurrency":
"QAR",

"price":
"150",

"availability":
"https://schema.org/InStock",

"url":
"https://homekeep.qa/services/ac-service"

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
"How often should AC units be serviced in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Due to Qatar's dust, humidity and extreme summer temperatures, AC units should generally be serviced every 3 to 4 months to maintain cooling performance and efficiency."

}

},



{

"@type":"Question",

"name":
"Do you provide emergency AC repair in Doha?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides fast AC repair services for no-cooling problems, water leakage, unusual noise and AC breakdowns across Doha, Pearl Qatar and Lusail."

}

},



{

"@type":"Question",

"name":
"What AC brands do you repair in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"We service major AC brands including Daikin, Carrier, York, LG, Samsung, Mitsubishi, Gree, Midea and other residential and commercial air conditioning systems."

}

},



{

"@type":"Question",

"name":
"Do you provide villa AC maintenance contracts in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, Homekeep provides AC annual maintenance contracts for villas and apartments including scheduled servicing, inspection and priority support."

}

},



{

"@type":"Question",

"name":
"Do you provide AC gas charging in Qatar?",

"acceptedAnswer":{

"@type":"Answer",

"text":
"Yes, our technicians inspect refrigerant levels, check possible leaks and perform refrigerant charging when required."

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

<AcServiceContent />

</>

);

}
