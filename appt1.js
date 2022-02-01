const express = require('express')
const cookieparser = require('cookie-parser')
var port = 7077

var app= express()
app.use(cookieparser())  //creating the middleware cookieparser

//cookies 
var students ={

    "students":[
        {"name" : "Shirin", "rank" : 2},
        {"name" : "Nehal", "rank" : 4},
        {"name" : "Mohit", "rank" : 1},
        {"name" : "Kalpit", "rank" : 3},
        {"name" : "Shyla", "rank" : 5},
    ]
}

var staffs ={
    
    "staffs" : [
        {"name" : "SK", "subject" : "Maths"},
        {"name" : "GR", "subject" : "English"},
        {"name" : "AD", "subject" : "Physics"},
 
    ]
}

var subjects ={

    "subjects" :[
        {"sub1" : "Maths"},
        {"sub2" : "English"},
        {"sub3" : "Physics"},

    ]
}

var exams ={

    "exams" :[
        {"exam1" : "Mid Term", "fullmarks" : 50},
        {"exam2" : "End Term", "fullmarks" : 100},
    ]
}

app.get("/",function(req,res){
    res.send("<body style='background-color:bisque;color:darkcyan'><h2>Cookies : School Data Management</h2></body>")
})

//add cookies
app.get("/add", function(req,res){

    res.cookie("studentck", students)
    res.cookie("staffck", staffs)
    res.cookie("subjectck", subjects)
    res.cookie("examck", exams)
    res.send("<body style='background-color:bisque;color:darkcyan'><h2>School Data Management : Cookies Created !</h2></body>")
})

//show all cookies
app.get("/all",function(req,res){
    //var json= JSON.parse(req.cookies)
    res.send(req.cookies)
})

//show specific cookie
app.get("/view/staff", function(req, res){
    
    res.send(req.cookies["staffck"])
})

app.get("/delete/exams", function(req,res){
    res.clearCookie("examck");
    res.send("<body style='background-color:bisque;color:darkcyan'><h2>School Data Management : Exam Cookies Cleared !</h2></body>")
})

app.get("/deleteall", function(req,res){
   
    res.clearCookie("studentck")
    res.clearCookie("staffck")
    res.clearCookie("subjectck")
    res.clearCookie("examck")
    res.send("<body style='background-color:bisque;color:darkcyan'><h2>School Data Management : All Cookies Cleared !</h2></body>")
})

app.listen(port, ()=>console.log("Server active at ", port))