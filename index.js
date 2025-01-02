// 1.	Create a List and Append to the Body
// Create an unordered list (<ul>) with five list items (<li>), each containing unique text. Append the <ul> to the <body>.


// let ul=document.createElement("ul")
// for(let i=1;i<=5;i++){
//     let li=document.createElement("li")
//     ul.appendChild(li);
//     li.innerText=`hello world => ${i}`
// }
// console.log(ul)
// document.body.appendChild(ul)


// 2.	Create a Paragraph Inside a Div and Append to the Body
// Create a <div> element, and inside it, add a <p> element with some descriptive text. Append the <div> to the <body>.


// let div=document.createElement("div");
// let p=document.createElement("p");
// div.appendChild(p);
// p.innerText="dom is a document object model,in this every tag is considered as object"
// console.log(div)
// document.body.appendChild(div)




// 3.	Build a Nested Structure and Append to the Body
// Create a <div> containing a <h1> heading and a <p> paragraph, both with distinct text. Append the <div> to the <body>.


// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let p=document.createElement("p")
// div.appendChild(h1);
// h1.innerText="Java script"
// div.appendChild(p);
// p.innerText="java script is awesome"
// document.body.appendChild(div)
// console.log(div)






// 4.	Generate a Table Row and Append to the Body
// Create a <table> element with a single row (<tr>) and three cells (<td>), each containing some text. Append the <table> to the <body>.


// let table=document.createElement("table")
// // console.log(table);
// let tr=document.createElement("tr");
// table.appendChild(tr)
// // console.log(table)
// for(let i=1;i<=3;i++){
//     let td=document.createElement("td")
//     tr.appendChild(td)
//     td.innerText=`sreya - ${i}`
// }
// console.log(table)
// document.body.appendChild(table)


// 5.	Add Multiple Buttons and Append to the Body
// Create a <div> and append five <button> elements to it, each with unique text for the button label. Append the <div> to the <body>.


// let div=document.createElement("div");
// for(let i=1;i<=5;i++){
//     let button=document.createElement("button")
//     div.appendChild(button)
//     button.innerText=`submit ${i}`
// }
// console.log(div)
// document.body.appendChild(div)