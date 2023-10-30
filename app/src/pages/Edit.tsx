import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IEdit, IMovieAdd } from "../type";
import Layout from "../components/layout";
import { updateMovie } from "../services/api";
import Form from "../components/MovieForm";
import Modal from "../components/modal";

const EditForm: React.FC<IEdit> = ({ movie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editValue = {
    title: movie.title,
    year: movie.year,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Getting info of ", id);
  }, [id]);

  async function handleEditMovie(editedmovie: IMovieAdd) {
    try {
      const response = await updateMovie(editedmovie, movie.id);
      console.log(response);
      setIsModalOpen(true);
      setEditError(null);
    } catch (error) {
      console.log(error);
      setEditError("Error editing the movie.");
    }
  }

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    setEditError(null);
    navigate("/");
  };

  return (
    <>
      <Layout title={`EditMovie${movie.title}`}>
        <Form
          handleAddMovie={handleEditMovie}
          emptyMovie={editValue}
          type="edit"
        />
      </Layout>

      <Modal isOpen={isModalOpen} onClose={closeModalAndNavigate}>
        {editError ? editError : "Successfully edited"}
      </Modal>
    </>
  );
};

export default EditForm;
