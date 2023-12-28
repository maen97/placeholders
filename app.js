require(["jquery"], function ($) {

    let sustainabilityCollection = $('.js-sustainability-collection');

    if (sustainabilityCollection.length > 0) {
        require([
            'splider'
        ], function () {
            let sustainabilityCollectionCms = sustainabilityCollection.find('.twins-widget');

            sustainabilityCollectionCms.splider({
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
