ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185073737896,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: [] // это отключает элементы управления
    },
    {
        suppressMapOpenBlock: true, // это отключает некоторые элементы внизу карты
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [48.872185073737896,2.354223999999991] // координаты точки
        }
    });

    // var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'img/subtract.svg',
    //     iconImageSize: [30, 42],
    //     iconImageOffset: [-3, -42]
    // });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}
