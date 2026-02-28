import { getAhriImageUrls } from "@/utils/getImgUrl";
import React, { useEffect, useState } from "react";

const Image: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = getAhriImageUrls();
    setImageUrls(urls);
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <div>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Ahri image ${index}`}
            style={{ width: "200px", height: "auto", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Image;
