let newBtn = document.createElement("button");
newBtn.innerText = "Click Here!";
console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // Add at the end of node(inside)

// div.prepend(newBtn); Add at the start of node (inside)

// div.before(newBtn); Add before the node (outside)

// div.after(newBtn); Add after the node (outside)



let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi,I am new! </i>";

document.querySelector("body").prepend(newHeading);

// Delete Element: how we can delete paragraph

let para = document.querySelector("p");
para.remove();