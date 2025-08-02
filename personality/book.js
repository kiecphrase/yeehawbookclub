/*

TOGGLEVIEW
--------------------------------------------------------------
function to change what project is displayed on the page.
--------------------------------------------------------------
ins:
    the_id = id of project clicked

outs:
    none

*/
function toggleview(the_id){

    let full_id = "" + the_id + "_body";
    console.log(full_id)
    document.getElementById(full_id).classList.toggle("no_c");
}