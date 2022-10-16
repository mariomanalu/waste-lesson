PAGE=[
    
    {
        place:"Zero Waste Land",
        npc:"",
        isGame: false,
        background_change:3,
        background:"front.png",
        background2:"front.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hi there! My name is Ellie the Elephant. I am responsible for waste management training on this planet. Welcome to our one and only planet -- Planet Earth.", "We have a big problem to solve."
    , "There is so much waste. For each type of waste, we need to take different actions. For instance, some waste can be recycled and some cannot. The problem is many of us cannot categorize waste properly. ", 
    "Your mission is to learn the different types of waste and collect magical plants from the planets, by interacting with different waste, and answering questions about what you can do to the waste.", 
    "Let's first head to the Recyclable Planet, which is the blue planet on the map."],
        nextpage:null
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["Welcome to the Planet of Recylacble Waste. On this planet, you will learn about recyclable waste and how to recycle them.", 
        "So, what makes something recyclable? For a waste to be recyclable, there must be a technology that recycles it and turns it into something more valuable.", 
        "Common recyclable items are: newspapers, paper towels, cardboards, aluminum, plastic, glass, steel cans, and plastic.", 
        "Trash bins are often color-coded. Red bins contain plastic waste. Green bins contain glass waste. Yellow bins contain steel cans. And last but not least, Blue bins contain paper waste.",
        ],
        //if isQuestion is true, 
        //we are accessing the questions from questions.js
        nextpage:2
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[0],
        nextpage:3
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[1],
        nextpage:4
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[2],
        nextpage:5
    },

    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[3],
        nextpage:6
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: false,
        background:"recyclable.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["Congratulations! Now you know where to throw your waste into. Let's plant some seeds to celebrate this achievement!"],
        nextpage:7
    },
    {
        place:"Planet of Recyclable Waste",
        npc:"",
        isGame: true,
        gameComponent:['seed1.PNG','seed2.PNG','seed3.PNG'],
        background:"recyclable.png", //background without seeds
        isStone: false,
        isQuestion:false,
        dialogue:"Click on the seeds to plant!",
        nextpage:8
    },
    {
        place:"Zero Waste Land",
        npc:"",
        isGame: false,
        background:"1_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Here is your flower.", 
        "By the way, I heard something is happening on ElectroWaste World. Maybe we should go check that place out?"],
        nextpage:null
    },
    {
        place:"ElectroWaste World",
        npc:"",
        isGame: false,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hey, look at this place! Them humans produced so much electronic waste.",
        "Wait, you don't know what electronic waste is? Well well. Let me explain. Look at your surrounding.",
        "There are so many old TVs, old computer monitors, and old cell phones lying around. These products are electronic waste. They can contain heavy metals like cadmium, lead, copper, and chromium that can contaminate the environment.", 
        "DO NOT dispose of these items in the trash or your recycling bins. They need to be treated differently.", 
        "You need to find an e-waste disposal service and hand them your electronic waste.",
        "They will recyle it for you."],
        nextpage:10
    }
,
    {
        place:"ElectroWaste World",
        npc:"",
        isGame: false,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[4],
        nextpage:12
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Moon: Thank you North Fairy. That made me feel better. Now, I feel just as good as the sun."],
        nextpage:12
    },
    {
        place:"ElectroWaste World",
        npc:"",
        isGame: false,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[5],
        nextpage:21
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[6],
        nextpage:14
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[7],
        nextpage:15
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[8],
        nextpage:16
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[9],
        nextpage:17
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[10],
        nextpage:18
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[11],
        nextpage:19
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[12],
        nextpage:20
    },
    {
        place:"ElectroWaste",
        npc:"",
        isGame: true,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:false,
        gameComponent:['star.PNG','star.PNG','star.PNG'],
        dialogue:["Help me collect some sparkle dust so that I illuminate brighter!"],
        nextpage:21
    },
    {
        place:"ElectroWaste World",
        npc:"",
        isGame: false,
        background:"futuristic_with_ellie.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Great! Now that you know about electronic waste, be more careful with those old devices!"],
        nextpage:23
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[13],
        nextpage:23
    }
,
    {
        place:"Zero Waste Land",
        npc:"",
        isGame: false,
        background:"2_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Here is your second plant. Now to the Organic Waste Universe!"],
        nextpage:null
    },
    {
        place:"Organic Waste Universe",
        npc:"",
        isGame: false,
        background:"forest.jpg",
        isStone: false,
        isQuestion:false,
        dialogue:["Welcome to the Organic Waste Universe", 
        "Organic waste is any biodegradable material that comes from either a plant or an animal", 
        "Some examples include cut flowers, branches, leaves. Food waste also counts!", 
        "So how does one recycle organic waste?", 
        "It's easy. You separate your organic waste from other waste. Then, you compost. Easy, right?"],
        nextpage:25
    },
    {
        place:"Organic Waste Universe",
        npc:"",
        isGame: false,
        background:"forest.jpg",
        isStone: false,
        isQuestion:true,
        dialogue:questions[14],
        nextpage:29
    },
    {
        place:"Organic Waste Universe",
        npc:"",
        isGame: false,
        background:"forest.jpg",
        isStone: false,
        isQuestion:true,
        dialogue:questions[15],
        nextpage:29
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[16],
        nextpage:28
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[17],
        nextpage:29
    },
    {
        place:"Organic Waste Universe",
        npc:"",
        isGame: false,
        background_change:2,
        background:"hour_glass.png",
        background2:"3_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Well, that's quick right?! That's because organic waste is the easiest to recycle!"],
        nextpage:null
    }
    ,
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hello, you must be the human everyone's been talking about.", "I am the Well of Wellness. I make sure everyone is doing well. Let's see...", "Are you maintaining your wellness!"],
        nextpage:31
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[18],
        nextpage:32
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[19],
        nextpage:33
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["Well, you've come a long way. It's probably been a tough journey.", "The final stone is inside the well. Pull up the bucket from the well to find the final stone."],
        nextpage:34
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: true,
        background:"well.png",
        gameComponent:['rope.png'],
        isStone: false,
        isQuestion:false,
        dialogue: ["Click on the rope to pull up the bucket."],
        nextpage:35
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well_water.png",
        isStone: true,
        isQuestion:false,
        dialogue: ["The journey is complete! Let's head back."],
        nextpage:36
    },
    {
        place:"Home",
        npc:"",
        isGame: false,
        background:"intro.jpg",
        isStone: true,
        isQuestion:false,
        dialogue: ["Thank you for collecting all the stones. ...or recollecting your mind ;)"],
        nextpage:null
    }
]

playerPosition=0;

