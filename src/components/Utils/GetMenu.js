import axios from "axios";

async function GetMenu(data) {
  const url = data.menu.map((item) => item.link);

  try {
   //  const response = await axios.get(url)
   //  console.log(response);
  } catch (err) {}
  //   console.log(data);
}

export default GetMenu;
