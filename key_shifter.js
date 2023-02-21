function inputPrompt()
{
        var charsToShift = prompt("Enter the string to be shifted: ");
        return charsToShift;
}

function rotationsInput()
{
        var rotation = prompt("Enter the shift amount: ");
        return rotation;
}

var userString = inputPrompt();
var rotations = rotationsInput();

var res = '';

function rotateAlphabets(b)
{
    var rotations = b;
    var shifts = 1;
		var j = 0;
		var place = 0;
		var placeAfterShift = 0;
		for(var i = 0; i < rotations; i++)
        {
                for(j = 0; j < userString.length; j++)
                {
						place = userString.charCodeAt(j);
						placeAfterShift = place + shifts;
						//INPUT SANITATION FOR ALPHABET ONLY
						//UPPERCASE
						if(place < 91 && place > 64)
						{
							if(placeAfterShift > 90)
							{
								placeAfterShift = 64 + (placeAfterShift - 90);
							}
							
							res = res + String.fromCharCode(placeAfterShift);
						}
						//lowercase
						else if(place < 123 && place > 96)
						{
							if(placeAfterShift > 122)
							{
								placeAfterShift = 96 + (placeAfterShift - 122);
							}
							res = res + String.fromCharCode(placeAfterShift);
						}
						else
						{
							res = res + "<ERR>";
						}
                }
                document.write(res + "<br/>");
				if(shifts<26)
				{
					shifts+=1;
				}
				else
				{
					shifts = 1;
				}
                res = '';
        }
}

rotateAlphabets(rotations);
