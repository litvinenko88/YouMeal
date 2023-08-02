import styles from "./Navigation.module.css";

import icon1 from "../../assets/icons/btn-1.png";
import icon2 from "../../assets/icons/btn-2.png";
import icon3 from "../../assets/icons/btn-3.png";
import icon4 from "../../assets/icons/btn-4.png";
import icon5 from "../../assets/icons/btn-5.png";
import icon6 from "../../assets/icons/btn-6.png";
import icon7 from "../../assets/icons/btn-7.png";
import icon8 from "../../assets/icons/btn-8.png";
import icon9 from "../../assets/icons/btn-9.png";
import NavigationList from "./NavigationList";

const ICONS_ARRAY = [
  {
    icons: icon1,
    text: "Бургеры",
    link: "https://gist.githubusercontent.com/litvinenko88/9d58c8d9576ada4b43465919cd1ac5bf/raw/9424d0c276e3dfe4b0e22af37379800b168eba02/burger.json",
  },
  {
    icons: icon2,
    text: "Закуски",
    link: "https://gist.githubusercontent.com/litvinenko88/24c9c9f39e8df448c03a2d50dbe0cc3f/raw/7f149e2a1ae2efac5d4b1b7f889684278cec12f9/snacks.json",
  },
  {
    icons: icon3,
    text: "Хот-доги",
    link: "https://gist.githubusercontent.com/litvinenko88/7edf6e45fcabb96fb66971ba18a2eb47/raw/7dcbd5a00551af19cf8c1e6b33dce925a43d5ee1/hot-dog.json",
  },
  {
    icons: icon4,
    text: "Комбо",
    link: "https://gist.githubusercontent.com/litvinenko88/7b6c0ff2da1d97fd6cfac469612d1606/raw/21137663ce1db24ec4017538ce8a0c99c6b46570/combo.json",
  },
  {
    icons: icon5,
    text: "Шаурма",
    link: "https://gist.githubusercontent.com/litvinenko88/c816662f3fc86c9e73906d69dc7245ad/raw/746ed14f425d2f8760a627c2ebb1249839cd325a/shawarma.json",
  },
  {
    icons: icon6,
    text: "Пицца",
    link: "https://gist.githubusercontent.com/litvinenko88/d319097f210e808253fc765022b5521e/raw/231bef77cb517dda794dae549a6508b4a793c0a6/pizza.json",
  },
  {
    icons: icon7,
    text: "Вок",
    link: "https://gist.githubusercontent.com/litvinenko88/71504dca7f3444e907cdb6bdd41dc585/raw/87197c39bcd61c1e023f57076d96826c786df0a8/wok.json",
  },
  {
    icons: icon8,
    text: "Дессерт",
    link: "https://gist.githubusercontent.com/litvinenko88/63386ddb357175b69e276313539def5c/raw/5d97f425fd340e6765cff4bffb1af8077d2cc253/dessert.json",
  },
  {
    icons: icon9,
    text: "Соусы",
    link: "https://gist.githubusercontent.com/litvinenko88/7346740421d93cdaf2033b72d07aa3ed/raw/1d99c907bbc6c3be9e7f55dcf2cdb351a215859d/sauces.json",
  },
];

function Navigation() {
  return (
    <ul className={styles.wrapper}>
      {ICONS_ARRAY.map((item) => (
        <NavigationList icons={item.icons} text={item.text} />
      ))}
    </ul>
  );
}

export default Navigation;
