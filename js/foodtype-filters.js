'use strict';

function setUpFoodtypeFilter() {
    var foodtype;
    var foodtypeList = [];
    $('.product').each(function() {
        foodtype = $(this).attr('data-foodtype');
        if(foodtype && foodtypeList.indexOf(foodtype) < 0) {
            foodtypeList.push(foodtype);
        }
    });
    foodtypeList.sort();
    foodtypeList.forEach(function(foodtype) {
        var optionTag = `<option value="${foodtype}">${foodtype}</option>`;
        $('#foodtype-filter').append(optionTag);
    });
};
setUpFoodtypeFilter();

function handleFoodtypeFilter() {
    $('#foodtype-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-foodtype="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};

handleFoodtypeFilter();