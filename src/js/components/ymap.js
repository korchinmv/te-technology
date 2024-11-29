const mapPage = document.querySelector(".contacts__map");

initMap();
async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    mapPage,

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [37.588144, 55.733842],

        // Уровень масштабирования
        zoom: 10,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}

// ymaps.ready(function () {
//   var contactsMap = new ymaps.Map(mapPage, {
//     center: [53.188125, 50.204021],
//     zoom: 15,
//   });
// });

// map.addChild(
//   new YMapDefaultSchemeLayer({
//     customization: PASTE_JSON_HERE,
//   })
// );
