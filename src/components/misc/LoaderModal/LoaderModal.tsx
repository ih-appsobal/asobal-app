import { CircularProgress } from '@mui/material';
import './LoaderModal.css'

const LoaderModal = () => {
  return (
    <div className="LoaderModal">
      <CircularProgress color="primary"/>
    </div>
  );
};

export default LoaderModal;