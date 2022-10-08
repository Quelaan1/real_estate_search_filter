declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module 'react-datepicker';

interface Properties {
  id: number;
  imgUrl: string;
  isPopular: boolean;
  price: number;
  isFavorite: boolean;
  title: string;
  location: string;
  beds: number;
  bathrooms: number;
  size: string;
  propertyType: string;
  notAvailabeOn: string[];
}
