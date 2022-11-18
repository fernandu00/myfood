import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { setCurrentItem } from "../features/menu/menuSlice";
import { useState } from "react";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const AdminAddNewItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = "http://192.168.15.14:5000";

  //   /menu/update/id

  //   const handleCreateProduct = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const resp = await axios.post(`${url}/menu/new/`, {
  //         title: updateProduct.productTitle,
  //         desc: updateProduct.productDesc,
  //         unit_price: updateProduct.productPrice,
  //         category: updateProduct.productCat,
  //       });
  //       console.log(resp.data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }

  //     toast.success("item criado!");
  //     navigate("/admin/menu/new");
  //   };

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    desc: "",
    cat: "",
    link: "",
  });
  const [file, setFile] = useState(null);

  const handleCreateNewItem = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      // firebase image upload
      const imageRef = ref(storage, `/images/${file.name} + ${Date.now()}`);
      await uploadBytes(imageRef, file);
      const link = await getDownloadURL(imageRef);

      // add image link to state
      setNewProduct({ ...newProduct, link: link });

      // saves product to database

      const newItem = await axios.post(`${url}/menu/new`, {
        title: newProduct.title,
        desc: newProduct.desc,
        unit_price: newProduct.price,
        category: newProduct.cat,
        picture: newProduct.link,
      });
      console.log(newItem);
      setNewProduct({ title: "", price: "", desc: "", cat: "", link: "" });
      navigate("/admin/menu/new");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="single-product-main">
      <div className="container">
        <Link to="/admin/menu/new">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>
      {file && <img src={URL.createObjectURL(file)} className="img-new-item" />}
      <label htmlFor="file-input">
        {" "}
        <h4>Imagem</h4>
        {!file && <BiImageAdd className="icon" />}
        <input
          style={{ display: "none" }}
          type="file"
          id="file-input"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      <div className="update-product">
        <label htmlFor="title">Nome </label>
        <input
          type="text"
          id="title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              title: e.target.value,
            })
          }
        />
      </div>

      <div className="update-product">
        <label htmlFor="price">Preço </label>
        <input
          type="number"
          min="1"
          max="999"
          id="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              price: e.target.value,
            })
          }
        />
        <label htmlFor="desc">Descrição</label>
        <textarea
          rows="3"
          cols="23"
          type="text"
          id="desc"
          value={newProduct.desc}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              desc: e.target.value,
            })
          }
        />
        <label htmlFor="cat">Categoria </label>
        <input
          type="text"
          id="cat"
          value={newProduct.cat}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              cat: e.target.value,
            })
          }
        />
      </div>
      <button className="btn" onClick={handleCreateNewItem}>
        Cadastrar
      </button>
    </main>
  );
};

export default AdminAddNewItem;
