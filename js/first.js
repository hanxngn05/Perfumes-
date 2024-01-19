
/* Makes the checkbox only allow 2 items to be selected */
document.querySelectorAll('.all_scents input[type=checkbox]').forEach(el=>{
    el.addEventListener('change', function(){
        if (el.closest('.all_scents').querySelectorAll('input:checked').length > 3 ){
        this.setCustomValidity('There is a maximum of three items that can be selected')
        this.checked = false
        this.reportValidity()
        // error will not show because checkboxes are hidden with css design
        }else{
            // add scent to data collection / store it
        }
    })
});