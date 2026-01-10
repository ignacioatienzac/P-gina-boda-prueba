
export interface EventDetail {
  title: string;
  time: string;
  location: string;
  address: string;
  description: string;
  image: string;
}

export interface RSVPData {
  name: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  dietary: string;
  message: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}
