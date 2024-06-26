ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map(document.getElementById('map'), {
        // center: [40.386515, 71.783323],
        center: [40.382475, 71.785041],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter());

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.events
        .add('mouseenter', function (e) {
            e.get('target').options.set('preset', 'islands#redIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        });
}
