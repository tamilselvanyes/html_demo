let container_div = document.createElement('div');
container_div.className="container";
let row_div = document.createElement('div');
row_div.className="row";
let col_div = document.createElement('div');
col_div.className="col-1";
document.body.append(container_div,row_div,col_div);

row_div.append(col_div);
container_div.append(row_div);
document.body.append(container_div);
console.log("TAMIL")