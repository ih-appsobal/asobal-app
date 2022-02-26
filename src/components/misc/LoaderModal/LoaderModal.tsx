import { CircularProgress } from '@mui/material';
import './LoaderModal.css'

const LoaderModal = () => {
  return (
    <div className="LoaderModal">
      <CircularProgress color="secondary"/>
    </div>
  );
};

export default LoaderModal;