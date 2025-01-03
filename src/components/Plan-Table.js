import React, { useState } from "react";
import "./../styles/Plan-table.css"; // Import du fichier CSS
import defaultImage from "./img/planTable.jpg"; // Importer l'image par défaut

function PlanTable() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(defaultImage);
    const [isZoomed, setIsZoomed] = useState(false);
    const [scale, setScale] = useState(1); // Échelle de zoom
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false); // État de déplacement
    const [dragStart, setDragStart] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile && selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);
      } else {
        alert("Veuillez sélectionner un fichier image valide (jpg, png, gif, etc.).");
      }
    };
  
    const handleZoomClick = () => {
      setIsZoomed(true);
    };
  
    const handleCloseZoom = () => {
      setIsZoomed(false);
      setScale(1); // Réinitialiser le zoom
      setPosition({ x: 0, y: 0 }); // Réinitialiser la position
    };
  
    const handleMouseDown = (event) => {
      setDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
    };
  
    const handleMouseMove = (event) => {
      if (dragging) {
        const deltaX = event.clientX - dragStart.x;
        const deltaY = event.clientY - dragStart.y;
        setPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));
        setDragStart({ x: event.clientX, y: event.clientY });
      }
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleWheel = (event) => {
      const zoomChange = event.deltaY > 0 ? -0.1 : 0.1;
      setScale((prevScale) => Math.min(Math.max(prevScale + zoomChange, 0.5), 3)); // Limiter le zoom entre 0.5x et 3x
    };
  
    return (
      <div className="file-uploader-container">
        <h2>Chargez une image et visualisez-la</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <div className="preview-zone">
          <img
            src={previewUrl}
            alt="Aperçu"
            className="image-preview"
            onClick={handleZoomClick}
          />
        </div>
        <a
          href={previewUrl} // Permet le téléchargement de l'image actuelle (par défaut ou téléchargée)
          download={file ? file.name : "default-image.jpg"} // Nom du fichier téléchargé
          className="file-download-link"
        >
          Télécharger l'image
        </a>
        {file ? (
          <p className="placeholder-text">
            Image téléchargée. Vous pouvez la télécharger ou la zoomer.
          </p>
        ) : (
          <p className="placeholder-text">
            Aucune image téléchargée. Image par défaut affichée.
          </p>
        )}
        {isZoomed && (
          <div
            className="zoom-modal"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Arrêter le déplacement si la souris quitte la zone
            onWheel={handleWheel} // Gestion du zoom avec la molette
          >
            <img
              src={previewUrl}
              alt="Zoom"
              className="zoomed-image"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              }}
            />
            <button className="close-modal" onClick={handleCloseZoom}>
              Fermer
            </button>
          </div>
        )}
      </div>
    );
  }

export default PlanTable;