/**
 * The following constants are pretty much only going to be change by administrative action, not user action,
 * so they can just be static variables.
 */


export const CUISINES = [
                        "American", 
                        "Barbeque", 
                        "British",
                        "Cajun", 
                        "Carribean",
                        "Chinese", 
                        "Creole",
                        "Ethiopian",
                        "French",
                        "German",
                        "Italian", 
                        "Japanese", 
                        "Mexican", 
                        "Peruvian",
                        "Scandinavian",
                        "Spanish",
                        "Vietnamese"
                    ]

// Highways run through various states, this is useful for finding Locations by highway and by states.
// The SQL will be something to the effect of WHERE state IN or where highway IN
// I might be overthinking this

export const HIGHWAYS = [
    {
        number: 5,
        states: ["CA", "OR"]
    },

    {
        number: 80,
        states:["CA", "UT", "NV", "WY"]
    },

    {number: 10,
        states:["CA", "AZ", "TX", "NM"]
    },

    {number: 90, 
        states: ["MA"]
    }
]

export const LODGING_TYPES = [
    "Hotel",
    "Motel",
    "RV Park",
    "Tent Camping"
]

export const BREAKFAST = [
    "None",
    "Free - Hot",
    "Free - Continental",
    "Extra Charge",
    "In-House Restaurant"
]

export const WIFI = [
    "None",
    "Free For All",
    "Free For Guests",
    "Extra Charge"
]