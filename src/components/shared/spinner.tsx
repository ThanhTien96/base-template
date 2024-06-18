import { Image } from "antd";
import React from "react";
import loading_gif from 'assets/loading/loading.gif'
const Spinner: React.FC = () => (
  <div className="absolute top-0 left-0 bg-white/70 h-[100vh] w-[100vw] z-50 flex justify-center items-center">
    <Image preview={false} src={loading_gif} width={80} />
  </div>
);

export default Spinner;
