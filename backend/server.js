const express = require('express');
const Word = require('./Classes/Word');
const Info = require('./Classes/Info');

const app = express();


app.get("/codenames", (req, res)=>{
    let a1 = new Word("Apple","Red", 0);
    let a2 = new Word("Ball","Blue", 0);
    let a3 = new Word("Cat","Black", 0);
    let a4 = new Word("Dog","yellow", 0);
    let a5 = new Word("five","Red", 0);
    let a6 = new Word("six","Red", 0);
    let a7 = new Word("seven","Red", 0);
    let a8 = new Word("eight","Red", 0);
    let a9 = new Word("nine","Red", 0);
    let a10 = new Word("ten","Red", 0);
    let a11 = new Word("eleven","Red", 0);
    let a12 = new Word("rose","Red", 0);
    let a13 = new Word("orange","Blue", 0);
    let a14 = new Word("bat","Blue", 0);
    let a15 = new Word("mat","Blue", 0);
    let a16 = new Word("air","Blue", 0);
    let a17 = new Word("water","Blue", 0);
    let a18 = new Word("sun","Blue", 0);
    let a19 = new Word("heat","Blue", 0);
    let a20 = new Word("stock","Blue", 0);
    let a21 = new Word("tesla","yellow", 0);
    let a22 = new Word("matter","yellow", 0);
    let a23 = new Word("school","yellow", 0);
    let a24 = new Word("college","yellow", 0);
    let a25 = new Word("university","yellow", 0);
    let allWords = [a1, a2, a3, a4, a5, a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25];
    
    let info = new Info ("red", 8, 9);

    res.send({ allWords : allWords, info: info });
});

app.listen("8000", ()=>{ console.log("Server is listening on port 8000")});