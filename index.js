//1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

function schedule(days){
    days.forEach((day) =>{
        switch(day){
            case "Monday":
            console.log("Deliver parcel")
            break;
            case "Tuesday":
            console.log("Deliver mail")
            break;
            case "Friday":
            console.log("Deliver newspapers")
            break;
            default:
            console.log("Delivery not done today")
            break;
        }
    })
}
const days =["Monday","Tuesday","Thursday","Friday","Sunday"]
schedule(days)

//2. Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

function bookStatuses(availability){
    for(let i=0; i<availability.length; i++){
        
        if(availability[i] =="available"){
            console.log("Ready to lend")
        }
        else if(availability[i]=="checked out"){
            console.log("Borrowed")
        }else{
            console.log("Book not available")
        }

    }
}
const availability =["available","checked out","available","not available"]
bookStatuses(availability)

//3. Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function checkAges(age){
    for(let i=0; i<age.length; i++){
        if(age[i] >= 18){
            console.log(`Your age is ${age[i]}, you are an adult`)
        }
        else{
            console.log(`Your age is ${age[i]}, you are a minor`)
        }
    }
}
const age =[12,34,20,8,17,29,30]
checkAges(age)

//4. Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

function countdown(remainingLives){
    let lives=5;
    while (lives>=0){
        console.log(`You have ${lives} lives left`);
    lives--
    }
}
countdown(5)


5. //Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
const feedback=["disappointing","Great!","Expectations not met","Useful product"];
function userFeedback(feedback){
   let i=0;
    do{
        

        console.log(`User feedback is: ${feedback[i]}`)
        i++
    } while(i<feedback.length)
}
userFeedback(feedback)


//6.Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

function userStatus(loginStatuses){
    loginStatuses.forEach((loginStatus)=>{
        switch(loginStatus){
            case "logged in":
            console.log("Welcome back!")
            break;
            default:
            console.log("Please log in")
            break;
        }
    })
}
    
const loginStatuses=["logged in","not logged in","logged in"]
userStatus(loginStatuses)



//7. Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

function priority(tickets){
    tickets.forEach((ticket) =>{
        switch(ticket){
            case "high":
            console.log("Handle right now")
            break;
            case "medium":
            console.log("Handle as soon as possible")
            break;
            case "low":
            console.log("Handle as soon as you can")
            break;
            default:
            console.log("Ticket not a priority")
            break;
        }
    })
}
const tickets=["high","low","high","medium","low","medium","urgent"]
priority(tickets)

//8. Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function countDown(remSeconds){
    let seconds =10
    while (seconds >=0){
        {console.log(`You have ${seconds} seconds remaining`)
        seconds--
    }
    }
}
countDown(10)

