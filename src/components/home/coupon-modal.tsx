import { useEffect, useState } from 'react';
import ModalPopup from '../common/modal-popup';
import './coupon-modal.css';

const CouponModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    // Show the modal on component mount
    openModal();
  }, []);

  return (
    <div>
      <ModalPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        showCloseButton={true}
        className="coupon-modal"
        closeButtonClassName="flex justify-center items-center"
      >
        <div className="row">
          <div className="col-md-6">
            <img src="img/popup-img.jpg" className="img-fluid img-pop" />
          </div>
          <div className="col-md-6">
            <div className="content-block mx-auto text-center">
              <h2>15% OFF</h2>
              <h6>Just for you!</h6>
              <p>Sign Up and get your first discount now!</p>
              <input type="text" className="mb-2" placeholder="Mobile Number" />
              <input type="text" placeholder="Your email" />
              <br />
              <button type="button" className="btn btn-primary get-btn">
                Get My 15%
              </button>
              <p>No thanks, I am not into savings</p>
            </div>
          </div>
        </div>
      </ModalPopup>
    </div>
  );
};

export default CouponModal;
