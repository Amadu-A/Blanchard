ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76036893311881,37.61470110778741],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
        controls: [] // это отключает элементы управления

    },
    {
        suppressMapOpenBlock: true, // это отключает некоторые элементы внизу карты
    });

    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [48.872185073737896,2.354223999999991] // координаты точки
    //     }
    // });

    var myPlacemark = new ymaps.Placemark([55.76036893311881,37.61470110778741], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);

    //отключаем зум колёсиком мышки
    myMap.behaviors.disable('scrollZoom');
    // myMap.behaviors.disable('drag');

    //на мобильных устройствах... (проверяем по userAgent браузера)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //... отключаем перетаскивание карты
        myMap.behaviors.disable('drag');
    }
}
