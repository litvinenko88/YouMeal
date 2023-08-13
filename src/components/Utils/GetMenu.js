import axios from "axios";

async function GetMenu(data) {
  const url = data.menu.map((item) => item.link);

  try {
    const response = await axios.get(url[data.activ - 1]);
    return response;
  } catch (err) {
    console.log(`Непредвиденная ошибка ${err} перезагрузите страницу`);
    return false;
  }
}

export default GetMenu;
