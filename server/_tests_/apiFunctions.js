import axios from 'axios';

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  axios.get(`http://localhost:3000/db/products/1/styles`)
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  }
);

export default getSingleProduct;