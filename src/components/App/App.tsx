import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { APIResult, fetchImages } from "../../images-api";

export default function App() {
  const [fetchedData, setFetchedData] = useState<APIResult[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSubmit = (searchValue: string): void => {
    setSearchWord(searchValue);
    setFetchedData([]);
    setPage(1);
  };

  useEffect(() => {
    if (searchWord) {
      const fetchData = async (): Promise<void> => {
        try {
          setError("");
          setLoading(true);
          const data: APIResult[] = await fetchImages(searchWord, page);
          if (data.length > 0) {
            setFetchedData([...fetchedData, ...data]);
          } else {
            throw new Error("We found nothing by your request... =(");
          }
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [searchWord, page]);

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleCardClick = (imgUrl: string, imgAlt: string): void => {
    setModalUrl(imgUrl);
    setModalAlt(imgAlt);
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="content-container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery data={fetchedData} onClick={handleCardClick} />
      <Loader isVisible={loading} />
      {error && <ErrorMessage message={error} />}
      {fetchedData.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore}>
          {error ? "Try again" : "Load more"}
        </LoadMoreBtn>
      )}
      <ImageModal
        onClose={handleModalClose}
        isOpen={isModalOpen}
        url={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}
