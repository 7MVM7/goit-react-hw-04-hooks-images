import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { fetchImages } from "./services/apiServices.js";
import Modal from "./Сomponents/Modal/Modal";
import Searchbar from "./Сomponents/Searchbar/Searchbar";
import ImageGallery from "./Сomponents/ImageGallery/ImageGallery";
import Button from "./Сomponents/Button/Button";
import Loader from "./Сomponents/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [reqStatus, setReqStatus] = useState("idle");

  useEffect(() => {
    if (reqStatus === "rejected") {
      toast.error("Приїхали, no match");
    }
  }, [reqStatus, images.length]);

  useEffect(() => {
    if (!query) return;

    async function onFetchImages() {
      try {
        setReqStatus("pending");
        const images = await fetchImages({ query, page });
        setReqStatus("resolve");
        if (images.length === 0) {
          toast.error("Приїхали, no match");
        }
        setImages((prevState) => [...prevState, ...images]);
      } catch (error) {
        setReqStatus("rejected");
      }
    }
    onFetchImages();
  }, [query, page]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    toggleModal();
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError(null);
  };

  return (
    <>
      {error && toast.error("OOO, something is wrong!")}
      <Searchbar onSubmit={handleSubmit} />
      {reqStatus === "pending" && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onSelect={handleSelectImage} />
      )}
      {images.length > 0 && <Button onClick={() => setPage(page + 1)} />}
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={selectedImage} />
      )}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}
export default App;
