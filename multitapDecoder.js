var encryptedText=prompt("Insert the text to decrypt here.");
var keymap = [];

keymap[2]="a";
keymap[22]="b";
keymap[222]="c";

keymap[3]="d";
keymap[33]="e";
keymap[333]="f";

keymap[4]="g";
keymap[44]="h";
keymap[444]="i";

keymap[5]="j";
keymap[55]="k";
keymap[555]="l";

keymap[6]="m";
keymap[66]="n";
keymap[666]="o";

keymap[7]="p";
keymap[77]="q";
keymap[777]="r";
keymap[7777]="s";

keymap[8]="t";
keymap[88]="u";
keymap[888]="v";

keymap[9]="w";
keymap[99]="x";
keymap[999]="y";
keymap[9999]="z";

keymap[100]=" ";
keymap[101]="\r\n";
keymap[123]=",";
keymap[234]=":";
keymap[345]="!";
keymap[456]=".";
keymap[567]=";";
keymap[678]="?";
keymap[789]="-";


function decryptMobile(encrypted)
{
	toArr=encrypted.split(" ");
	var matched="";
	var numStr = "";
	for(a=0;a<toArr.length;a++)
	{	
		let regXp=/2{1,}|3{1,}|4{1,}|5{1,}|6{1,}|7{1,}|8{1,}|9{1,}|\.|,|:|!|;|\?|-/g;
		matched+=(toArr[a].match(regXp))+',100,';
	}
	
	for(var b=0;b<matched.length-1; b++)
	{
		if(matched[b].includes(' '))
		{
			matched[b].replace(' ','100');
		}
		
		if(matched[b]==',' && matched[b-1]==',' && matched[b+1]==',')
		{
			var add="123";
			var newMatched=matched.substring(0,b) + add + matched.substring(b,matched.length+add.length);
			matched=newMatched;
		}
		
		if(matched[b].includes(':'))
		{
			matched[b].replace(':','234');
		}
		
		if(matched[b].includes('!'))
		{
			matched[b].replace('!','345');
		}
		
		if(matched[b].includes('.'))
		{
			matched[b].replace('.','456');
		}
		
		if(matched[b].includes(';'))
		{
			matched[b].replace(';','567');
		}
		
		if(matched[b].includes('?'))
		{ 
			matched[b].replace('?','678');
		}
		
		if(matched[b].includes('-'))
		{
			matched[b].replace('-','789');
		}
		document.write(matched[b]);
		numStr+=matched[b];
	}
	
	var numArr=numStr.split(",");
	for(c=0; c<numArr.length-1; c++)
	{
		if(keymap[numArr[c]])
		{
			document.write(keymap[numArr[c]]);
		}
		else
		{
			document.write(numArr[c]);
		}
	}
}

decryptMobile(encryptedText);
