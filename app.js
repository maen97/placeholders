require(["jquery"], function ($) {

    let clixCollection = $('.js-clix-collection');

    if (clixCollection.length > 0) {
        require([
            'splider'
        ], function () {
            let clixCollectionCms = clixCollection.find('.twins-widget');

            clixCollectionCms.splider({
                default: {
                    type: 'slide',
                    pagination: false,
                    arrows: true
                },
                md: {
                    perPage: 2,
                    gap: 20
                },
                lg: {
                    perPage: 3,
                    gap: 30,
                    arrows: true,


                }
            });
        });
    }

});
