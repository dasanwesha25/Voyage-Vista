export const SelectTravelesList = [
    {
        id:1,
        title:'Just Me',
        desc: 'A sole travels in exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id:2,
        title:'A Couple',
        desc: 'Two travels in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id:3,
        title:'Family',
        desc: 'A group of fun loving adventure',
        icon: '🏡',
        people: '3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '⛵',
        people: '5 to 10 people'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title: 'Cheap',
        desc: 'A budget friendly, low cost options',
        icon: '💵'
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Finest options, no compromising on quality or experience' ,
        icon: '💸'
    }
]

export const AI_PROMPT = "Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me some Hotels option list with Hotel Name, Hotel Address, Price, Hotel Image Url, Geo Coordinates, Rating, Description and suggest itinerary with place Name, Place Details, Place Image Url, Geo Coordinated, Tickets Pricing, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."