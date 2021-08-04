

const ServicesData = [
    {
        "keys" : "1",
        "title" : "Basic Service",
        "required" : ["1000 Kms or 1 Month Warrantly", "Every 5000 Kms or 3 Months (Recommended)"],
        "features" : ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Cleaning", "Coolant Top Up", "Wiper Fluid Replacement", "Battery Water Top Up", "Heater/ Spark Plugs Checking", "Car Wash", "Interior Vacuuming"],
		"imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"

    },
    {
        "keys" : "2",
        "title" : "Standard Service",
        "required" : ["1000 kms or 1 Month Warranty","Every 10000 kms or 6 Months"],
        "features" : ["Engine Oil Replacement","oil Filter Replacement","Air Filter Replacement","Fuel Filter Checking","Cabin Filter","Coolant Top Up","Wiper Fluid Replacement","Brake Fluid Top Up","Battery Water Top Up","Car Wash","Sparks Plug Checking","Interior Vaccuming","Scanning","Rear Brake Shoe Serviced","Front Brake Pads Service"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Standard%20Service%20Package%20sq.jpg"
    },
    {
        "keys" : "3",
        "title" : "Comprehensive Service",
        "required" : ["1000 kms or 1 Month Warranty","Every 20000 kms or 12 Months"],
        "features" : ["Engine Oil Repalcement","Oil Filter Replacement","Air Filter Replacement","Fuel Filter Replacement","Cabine filter","Coolant Top Up","Wiper fluid Replacement","Brake Fluid Top Up","Battery Water Top Up","Heater/Spark Plugs Checking","Car Wash","Interior Vacuuming","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced","Wheel Balancing","Wheel Alignment","Tyre Rotation","Throttle Body Cleaning","Gear Oil Top Up"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Comprehensive%20Service%20Package%202%20sq.jpg"
    },
    {
        "keys" : "4",
        "title" : "Front Brake Discs",
        "required" : ["1 Month Warranty","Corrosion Resistance"],
        "features" : ["Front Brake Disc Replacement","Opening & Fitting Of Front Brake Disk","Reduces Vibrations and Brakes Noises","Increases Brakes Life & Safety","Free Pickup & Drop"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Front%20Disc%20Brake/Thumbnail.jpg"
    },
    {
        "keys" : "5",
        "title" : "Front Brake pads",
        "required" : ["1 Month Warranty","Every 20000 kms or 12 Months "],
        "features" : ["Opening and fitting of Brakes","Front Brakes Pads Replacement","Front Brake Disc Cleaning"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/BrakePads/Front%20Brake%20Pads%20Sq%20(1).jpg"
    },
    {
        "keys" : "6",
        "title" : "Rear Brake pads",
        "required" : ["1 Month Warranty","Every 20000 kms or 12 Months"],
        "features" : ["Opening and Fitting of Brakes","Rear Brake shoes Replacement","Front Brake Disc Cleaning"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/BrakePads/Brake%20Shoe%20Thumbnail.jpg"
    },
    {
        "keys" : "7",
        "title" : "Disc Turning",
        "required" : ["1 Month Warranty on Labour"],
        "features" : ["Opening and afitting + Inspection of Below Items","Resurfacing of Brake Disc/Rotors","Applicable For Set of 2 Discs"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Overhaul%20Services/Disc%20Turning/disc%20turning.jpg"
    },
    {
        "keys" : "8",
        "title" : "Front Bumper",
        "required" : ["2 Years Warranty on Paint"],
        "features" : ["Grade A Primer","Premium DuPont Paint","4 Layer Painting","Panel Rubbing Polishing"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Front%20bumper%20paint%20sq.jpg"
    },
    {
        "keys" : "9",
        "title" : "Bonnet",
        "required" : ["2 Years Warranty on Paint"],
        "features" : ["Grade A Primer","Premium DuPont Paint","4 Layers of Painting","Panel Rubbing Polishing"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Bonnet%20paint%20sq.jpg"
    },
    {
        "keys" : "10",
        "title" : "Rear Bumper",
        "required" : ["2 Years Warranty on Paint"],
        "features" : ["Grade A Primer","Premium DuPont Paint","4 Layers of Painting","Panel Rubbing Polishing"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Rear%20bumper%20sq.jpg"
    },
    {
        "keys" : "11",
        "title" : "Boot Paint",
        "required" : ["2 Years Warranty on Paint"],
        "features" : ["Grade A Primer","Premium DuPont Paint","4 Layers of Painting","Panel Rubbing Polishing"],
       "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Boot%20paint%20sq.jpg"
    },
    {
        "keys" : "12",
        "title" : "Full Body Dent Paint",
        "required" : ["2 Years Warranty on Paint"],
        "features" : ["Grade A Primer","Premium DuPont Paint","4 Layers of Painting","Panel Rubbing Polishing"],
         "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Full%20Body%20Dent%20Paint%20sq.jpg"
    },
    {
        "keys" : "13",
        "title" : "Alloy Paint",
        "required" : ["1 Years Warranty","Every One Year"],
        "features" : ["Grade A Primer","High Temperature Paint","4 Layers of Painting","Alloy Preservation"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/services_icon/wheel-Alloy-Painting-min.png"
    },
    {
        "keys" : "14",
        "title" : "Amaron(44 Months Warranty)",
        "required" : ["44 Month Warranty","35 Amp Hour"],
        "features" : ["Free Pickup & Drop","Free Installation","Existing Battery Replacement","Available at Doorstep"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png"
    },
    {
        "keys" : "15",
        "title" : "Amaron(55 Months Warranty)",
        "required" : ["55 Month Warranty","35 Amp Hour"],
        "features" : ["Free Pickup & Drop","Free Installation","Existing Battery Replacement","Available at Doorstep"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Battery/Amaron/amaron%20go%20new-min.png"
    },
    {
        "keys" : "16",
        "title" : "Exide(44 Months Warranty)",
        "required" : ["44 Month Warranty","35 Amp Hour"],
        "features" : ["Free Pickup & Drop","Free Installation","Existing Battery Replacement","Available at Doorstep"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Battery/Exide/exide%20red%20new-min.png"
    },
    {
        "keys" : "17",
        "title" : "Exide(55 Months Warranty)",
        "required" : ["55 Month Warranty","35 Amp Hour"],
        "features" : ["Free Pickup & Drop","Free Installation","Existing Battery Replacement","Available at Doorstep"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Battery/Exide/exide%20red%20new-min.png"
    },
    {
        "keys" : "18",
        "title" : "Covid-19 Revival Package",
        "required" : ["1 Month Warranty","Recommended Post lockdown"],
        "features" : ["engine Oil Top-Up","Coolant Top-Up","Battery jumpstart","Battery water top-Up","AC Vent Cleaning"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/CAR%20CARE%20SERVICES/AC%20Vent%20Cleaning%20sq.jpg"
    },
    {
        "keys" : "19",
        "title" : "Car Interior Spa",
        "required" : ["Every 3 months"],
        "features" : ["Car Wash","Anti Viral & Bacterial Treatment","Interior Vacuum Cleaning","Dashboard Polishing","Interior Wet Shampooing and Detailing"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/Dry%20Cleaning%20sq.jpg"
    },
    {
        "keys" : "20",
        "title" : "Deep All Round Spa",
        "required" : ["Every 6 Months"],
        "features" : ["Interior Vacuum Cleaning","Dashboard Polishing","Interior Wet Shampooing and Detailing","Pressure Washing","Rubbing With Compound","Wax Polishing","Machine Rubbing","Tyre Dressing and Alloy Polishing"],
        "imgsrc" : "https://s3.ap-south-1.amazonaws.com/gm-retail-app/service-new-images/comprehensive%20cleaning%20sq.jpg"
    },
    {
        "keys" : "21",
        "title" : "Regular AC Service",
        "required" : ["500 kms or 1 Minth Warranty","Every 5000 kms or 3 Months Warranty"],
        "features" : ["AC Gas Topup","Condenser Cleaning","AC Filter Cleaning","AC Vent Cleaning","AC Inspection"],
        "imgsrc" : "https://gm-retail-app.s3.ap-south-1.amazonaws.com/service-new-images/newB.jpg"
    },
    {
        "keys" : "22",
        "title" : "Cooling Coil Replacement",
        "required" : ["3 Months Warranty","Recommended:In Case of No/Less Cooling"],
        "features" : ["Cooling Coil Replacement","Spare Part Cost Only","AC Pipe, Expantion Valve, Sensor Additional","AC Gas, Compressor Oil Additional","Free Pickup and Drop"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/cooling%20coil/Thumbnail.jpg"

    },
    {
        "keys" : "23",
        "title" : "Condenser Replacement",
        "required" : ["3 Month warranty","Recommended:In Case of Condenser Leakage or Less Cooling"],
        "features" : ["Condenser Replacement","Spare Part Cost Only","AC Pipe, Expantion Valve, Sensor Additional","AC Gas, Compressor Oil Additional","Free Pickup and Drop"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Ac%20Condensor%20Replacement/Thumbnail.jpg"
    },
    {
        "keys" : "24",
        "title" : "JK Ultima sport",
        "required" : ["Tubeless","5 Years Warranty","165/80 R14"],
        "features" : ["Free pickup & Drop","Tyre Replacement at Service Center","Tyre Inspection for Tread","Alignment & Balancing Charges Extra"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/tyres/JK/JK_Ranger-min.png"
    },
    {
        "keys" : "25",
        "title" : "MRF ZTX",
        "required" : ["Tubeless","5 Years Warranty","165/80 R14"],
        "features" : ["Free pickup & Drop","Tyre Replacement at Service Center","Tyre Inspection for Tread","Alignment & Balancing Charges Extra"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/tyres/MRF/MRF_ZVTV-min.png"
    },
    {
        "keys" : "26",
        "title" : "Doorstep Accidental Inspection",
        "required" : ["25 Points Checklist","Every 1 Month"],
        "features" : ["Body Damage Inspection","25 Pints Checklist","Insurance Claim Advice","Policy Inspection"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/DoorstepAccidentalInspection/Doorstep%20Accidental%20Inspection%20Sq.jpg"
    },
    {
        "keys" : "27",
        "title" : "Windshield Replacement",
        "required" : ["On Cracks in Windshield"],
        "features" : ["Claim Intimation","Surveyor Estimate Approval","Co-ordination With Insurance Company","Windshield Replacement","Available at Doorstep"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/WindshieldReplacement/Windshield%20Replacement%20Sq.jpg"
    },
    {
        "keys" : "28",
        "title" : "3M Ceramic Coating",
        "required" : ["1 year warranty","Evary 3 Years"],
        "features" : ["Complete Paint Correction","3M 9H Nano Coating","3 Layers of Coating","Ultra Shine Polishing"],
        "imgsrc" : "https://gm-retail-app.s3.ap-south-1.amazonaws.com/Banner/3M_ceramic_Thumbnail.jpg"
    },
    {
        "keys" : "29",
        "title" : "3M Car Rubbing & Polishing",
        "required" : ["Every 6 Months"],
        "features" : ["Pressure Washing","Rubbing With 3M Compound","3M Wax Polishing","Machine Rubbing","Tyre Dressing and Alloy polishing"],
        "imgsrc" : "https://gm-retail-app.s3.ap-south-1.amazonaws.com/Banner/3M_CEPR_Thumbnail.jpg"
    },
    {
        "keys" : "30",
        "title" : "Engine Scanning",
        "required" : ["Scanner Report Provided","OEM Scanner Used"],
        "features" : ["Electrical Scanning","Error Code Deletion","Sensor Reset","Inspection of Exaust Smoke"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/New%20Car%20service%20Photos/Engine%20Scanning/Thumbnail.jpg"
    },
   
    {
        "keys" : "31",
        "title" : "Complete Suspension Inspection",
        "required" : ["25 Points Checklist","On Suspension Noise"],
        "features" : ["Front Shocker Check", "Rear Shocker Check","Shocker Mount Check","Link Rod Inspection","Jumping Rod Bush Check"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/New%20Car%20service%20Photos/Complete%20Suspension%20Inspection/Thumbnail.jpg"
    },
    {
        "keys" : "32",
        "title" : "Front Windshield Replacement",
        "required" : ["1 Month Warranty on Fitting","On Crack on Windshield"],
        "features" : ["Windshield","Opening and Fitting of New Windshield","Consumables-Sealant/Bond/Adhesive","Free Pickup and Drop","Sensor Charges Additional"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Front%20Windshield%20replacement/Front%20Windshield%20Replacement%20Sq.jpg"
    },
    {
        "keys" : "33",
        "title" : "Rear Windshield Replacement",
        "required" : ["1 Month Warranty on Fitting","On Crack on Windshield"],
        "features" : ["Windshield","Opening and Fitting of New Windshield","Consumables-Sealant/Bond/Adhesive","Free Pickup and Drop","Sensor Charges Additional"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Rear%20Windshield%20replacement/Rear%20Windshield%20Replacement%20Sq.jpg"
    },
    {
        "keys" : "34",
        "title" : "Front Head Light",
        "required" : ["1 Month Warranty on Fitting","For Broken/Cracked lights"],
        "features" : ["Headlight OES","Opening and Fitting of Bumper/Headlight","Free Pickup & Drop","Projector/LEDs/DRLs Additional"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Lights/130-HLA-ML.jpg"
    },
    {
        "keys" : "35",
        "title" : "Rear Tail Light",
        "required" : ["1 Month Warranty on Fitting","For Broken/Cracked Lights"],
        "features" : ["Tail Light OES","Opening & Fitting of Tail Light","Free Pickup & Drop","Bulb/LEDs Additional","Tail Light Price Will Differ From Car Model to Model"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Lights/35750M83K01.jpg"
    },
    {
        "keys" : "36",
        "title" : "Fog Light",
        "required" : ["1 Month Warranty on Fitting "],
        "features" : ["Opening and Fitting of Bumper+Fog Lamp","Fog Light Assembly Replacement","Switch/Harness Wiring Check","Free Pickup and Drop","Projector/LEDs/DRLs Additional"],
        "imgsrc" : "https://storage.googleapis.com/gomechanic_assets/Fog%20Light/maruti_fog_lamp.jpg"
    },
]



export default ServicesData;