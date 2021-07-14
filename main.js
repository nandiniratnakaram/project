var i = 0;

function update()
{
    i++;
    var number_of_family_member_in_array = 6;
    if(i > number_of_family_member_in_array)
    {
        i = 0;
    }
    var updateimg = images[i];
    var updatename = names[i];

    document.getElementById("myimage").src = updateimg;
    document.getElementById("myname").innerHTML = updatename;
}