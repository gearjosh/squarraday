import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get(`/api/square`);
    return res.data || [];
  },
  create: async (form) => {
    let res = await axios.post(`/api/square`,{
      title: form.title,
      alt: form.alt,
      size: form.size,
      hoverText: form.hoverText,
      img: form.img,
      available: form.available,
      guestArtist: form.guestArtist,
      special: form.special
    });
  }
};
