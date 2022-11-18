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

const AdminEditSingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { menuItems, currentItem } = useSelector((store) => store.menu);

  const url = "http://192.168.15.14:5000";

  //   /menu/update/id

  const currentProduct = menuItems.find((item) => item._id === id);
  const { unit_price, title, picture, desc, category } = currentProduct;

  dispatch(setCurrentItem(currentProduct));

  //   update product
  const handleProductUpdate = async (id) => {
    try {
      const resp = await axios.patch(`${url}/menu/update/${id}`, {
        title: updateProduct.productTitle,
        desc: updateProduct.productDesc,
        unit_price: updateProduct.productPrice,
        category: updateProduct.productCat,
      });
      console.log(resp.data);
    } catch (error) {
      toast.error(error.message);
    }

    toast.success("item atualizado!");
    navigate("/admin/menu/new");
  };

  const deleteProduct = async (id) => {
    try {
      const resp = await axios.delete(`${url}/menu/delete/${id}`);
      setModal(false);
      navigate("/admin/menu/new");
      toast.success("item excluído");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [file, setFile] = useState("");
  const [updateProduct, setUpdateProduct] = useState({
    productTitle: title,
    productPrice: unit_price,
    productDesc: desc,
    productCat: category,
  });
  const [modal, setModal] = useState(false);

  return (
    <main className="single-product-main">
      {modal && (
        <div className="modal">
          <div className="modal-element">
            <h4>Tem certeza que quer deletar o item?</h4>
            <div className="button-container">
              <button
                className="btn modal-btn success"
                onClick={() => deleteProduct(id)}
              >
                Sim
              </button>
              <button
                className="btn modal-btn error"
                onClick={() => setModal(false)}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <Link to="/admin/menu/new">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>

      {file ? (
        <img src={URL.createObjectURL(file)} className="img-new-item" />
      ) : (
        <img src={picture} alt={title} className="img-edit-product" />
      )}

      <div className="update-product">
        <label htmlFor="file-input">
          {" "}
          Imagem
          {!file && <BiImageAdd className="icon add-image-icon" />}
          <input
            style={{ display: "none" }}
            type="file"
            id="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <label htmlFor="title">Nome </label>
        <input
          type="text"
          id="title"
          value={updateProduct.productTitle}
          onChange={(e) =>
            setUpdateProduct({
              ...updateProduct,
              productTitle: e.target.value,
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
          value={updateProduct.productPrice}
          onChange={(e) =>
            setUpdateProduct({
              ...updateProduct,
              productPrice: e.target.value,
            })
          }
        />
        <label htmlFor="desc">Descrição</label>
        <textarea
          rows="3"
          cols="23"
          type="text"
          id="desc"
          value={updateProduct.productDesc}
          onChange={(e) =>
            setUpdateProduct({
              ...updateProduct,
              productDesc: e.target.value,
            })
          }
        />
        <label htmlFor="cat">Categoria </label>
        <input
          type="text"
          id="cat"
          value={updateProduct.productCat}
          onChange={(e) =>
            setUpdateProduct({
              ...updateProduct,
              productCat: e.target.value,
            })
          }
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          handleProductUpdate(id);
        }}
      >
        atualizar
      </button>
      <button className="btn delete-btn" onClick={() => setModal(true)}>
        excluir!
      </button>
    </main>
  );
};

export default AdminEditSingleProduct;
