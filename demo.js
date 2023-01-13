for (var i=0;i<5;i++){
    var x = ""
    for (var j=0;j<5-i;j++) x+=" ";
    for (var j=0;j<2*i+1;j++) x+="1"
    console.log(x);
}

let input;
do{
    input = prompt("em an com chua")
    if (input == 'roi'){
        prompt ("em co muon an banh trang mieng k?")
    }
    else if (input == 'chua'){
        prompt("em muon an com voi suon sao chua ngot k?")
    }
}
while(input == 'roi' || input =='chua')


var myArr = [9,7,0,8,123,456,387]