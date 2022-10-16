questions=[
    {
        reverse:true,
        number:1,
        question:"Let's test your knowledge on Recyclable Waste. Imagine that you just drink a can of coke, what is the color of the bin that you would throw the can into?", 
        choices:["Red","Green", "Yellow", "Blue"],
        answer:"",
        reaction:["Oops, that is not right. Remember yellow bins contain steel cans.","Great! If everybody knows that yellow bins contain steel cans, there will be a lot less unrecycled steel cans waste!"],
        react: [0, 0, 1, 0]
    },
    {
        reverse:false,
        number:2,
        question:"Imagine that you found a stack of old newspaper in your basement. You don't know what to do with the newspaper and think of throwing them all. What is the color of the bin that you would throw the newspaper into?", 
        choices:["Red","Green", "Yellow", "Blue"],
        answer:"",
        reaction:["Oops, that is not right. Remember blue bins contain paper waste.", "Great! If everybody knows that blue bins contain paper waste, there will be a lot less unrecycled paper waste!"],
        react: [0, 0, 0, 1]
    },
    {
        reverse:false,
        number:3,
        question:"Imagine that you dropped a glass by accident, and it shattered. What is the color of the bin that you would throw the broken pieces into?", 
        choices:["Red","Green", "Yellow", "Blue"],
        answer:"",
        reaction:["Oops, that is not right. Remember green bins contain glass waste.", "Great! If everybody knows that green bins contain glass waste, there will be a lot less unrecycled glass waste!"],
        react: [0, 1, 0, 0]
    },
    {
        reverse:false,
        number:4,
        question:"You arrived home after grocery-shopping at Walmart. There is so much plastic bags lying around the kitchen now. What is the color of the bins that you would throw the plastic bags into?", 
        choices:["Red","Green", "Yellow", "Blue"],
        answer:"",
        reaction:["Oops, that is not right. Remember red bins contain plastic waste.", "Great! If everybody knows that red bins contain plastic waste, there will be a lot less unrecycled plastic waste!"],
        react: [1, 0, 0, 0]
    },
    {
        reverse:false,
        number:5,
        question:"What is electronic waste?", 
        choices:["Broken electronic devices", "Waste that can contain heavy metals like cadmium, lead, copper, and chromium that can contaminate the environment.", "Rusty and old phones and computers", "Waste that has electric circuits"],
        answer:"",
        reaction:["Oops, that is not right. Electronic waste is waste that can contain heavy metals like cadmium, lead, copper, and chromium that can contaminate the environment.", "Great! You are correct."],
        react: [0, 1, 0, 0]
    },
    {
        reverse:true,
        number:6,//this
        question:"When you have an old electronic device that you no longer use, what should you do about it?", 
        choices:["Find an e-waste disposal service","Leave it outside", "Find a blue bin and throw it inside the bin", "Donate to a waste agent"],
        answer:"",
        reaction:["Ouch, that's not right. You need to find an e-waste disposal service", "Yep yep. You got it right!"],
        react: [1, 0, 0, 0]
    },
    {
        reverse:false,
        number:7,
        question:"I felt sad.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more. How often did you feel depressed last week?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:8,
        question:"I felt depressed", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["How often did you feel happy last week?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:true,
        number:9,//this
        question:"I was happy.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I wonder how you did around family and friends. Did you feel better around them?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:10,
        question:"I felt that I could not shake off the blues even with help from my family or friends.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more about your emotions."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:11,
        question:"I felt fearful.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {        
        reverse:true,
        number:12,//this
        question:"I enjoyed life.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:13,
        question:"I had crying spells.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see. You've certainly made me day better by talking to me."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:true,
        number:14,//this
        question:"I feel hopeful about my future.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Here are your stones. Goodbye friend."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:15,
        question:"What actions do you need to take when it comes to organic waste?", 
        choices:["No action","Throw them into a green bin", "Find an e-waste agent", "Compost"],
        answer:"",
        reaction:["No no no. You compost organic waste.", "Yes, that's right!"],
        react: [0, 0, 0, 1]
    },
    {
        reverse:false,
        number:16,
        question:"I had trouble keeping my mind on what I was doing.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Anything else?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:17,
        question:"I was bothered by things that usually don’t bother me.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:18,
        question:"I felt that everything I did was an effort.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:19,
        question:"My sleep was restless.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Great Job!","I see. What about your eating?"],
        react: [0, 1, 1, 1]
    },
    {
        reverse:false,
        number:20,
        question:"I did not feel like eating; my appetite was poor.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Way to go!","I see."],
        react: [0, 1, 1, 1]
    },
]