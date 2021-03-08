import imgOne from "../images/img-1.jpg";
import imgTwo from "../images/img-2.jpg";
import imgThree from "../images/img-3.jpg";
import imgFour from "../images/img-4.jpg";

const rusMonths = [`января`, `февраля`, `марта`, `апреля`, `мая`, `июня`, `июля`, `августа`, `сентября`, `октября`, `ноября`, `декбаря`];
const engMonths = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const destinationImages = [imgOne, imgTwo, imgThree, imgFour];

export const formatDate = (date) => {
  const yyyy = date.getFullYear();
  const mm = (`0` + (date.getMonth() + 1)).slice(-2);
  const dd = (`0` + date.getDate()).slice(-2);

  return `${yyyy}-${mm}-${dd}`;
};

export const formatDateToRus = (date) => {
  const yyyy = date.getFullYear();
  const month = rusMonths[date.getMonth()];
  const dd = (`0` + date.getDate()).slice(-2);

  return `${dd} ${month} ${yyyy}`;
};

export const formatDateToEng = (str) => {
  const yyyy = str.slice(0, 4);
  const month = engMonths[Number(str.slice(5, 7)) - 1];
  const dd = str.slice(8, 10);

  return `${dd} ${month}, ${yyyy}`;
};

export const AppRoute = {
  FLIGHTS: `/`,
  LOGIN: `/login`,
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const getAuthStatus = () => {
  return sessionStorage.length === 0 ? AuthStatus.NO_AUTH : AuthStatus.AUTH;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
