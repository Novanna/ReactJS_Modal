import React, { useState} from 'react';
import ModalShow from './ModalShow';
import Modal from 'react-modal';
import './FormGroup.css';

//Form element Object, untuk Map function
let formElements = [{
    label : "Name",
    ph: "Type your full name here",
    key: "uname"
},{
    label : "Job",
    ph: "Type your current job here",
    key: "ujob"
},{
    label : "Domicile",
    ph: "Type your domicile (city) here",
    key:"udom"
},{
    label : "Phone Number",
    ph: "+(62)",
    key: "uphone"
},{
    label : "GitHub",
    ph: "github.com/",
    key: "ugit"
},{
    label : "Email",
    ph: "youremail@bla.com",
    key: "uemail"
}]

function FormGroup() {
    //form type
    const [formData, setFormData] = useState({});

    const handleChange = (value, key) => {
        setFormData({...formData, ...{ [key]: value }});
    }

    //img
    const [selectedImg, setSelectedImg] = useState("");

    const addImgHandler = (e) => {
        let src = URL.createObjectURL(e.target.files[0]);
        setSelectedImg(src);
    }

    //modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=> {
        setModalIsOpen(true)
        console.log(formData);
    }

    const setModalIsOpenToFalse =()=> {
        setModalIsOpen(false)
    }

    const modalStyle = {
        content : {
            top: '40%',
            left: '30%',
            transform: 'translate(-20%, -40%)'
        }
    }

  return (
    <div className='card'>
      <form> 
          {/* map function */}
          {formElements.map(formElement =>{
              return <div>
                  <div className='form-label'>
                    {formElement.label}
                  </div>
                  <input 
                   className='form-input'
                   value={formData[formElement.key]}
                   placeholder={formElement.ph}
                   onChange={(e) =>{
                       //e.preventDefault(); //setelah klik back to default form
                       handleChange(e.target.value, formElement.key)
                    }}
                  />
              </div>
          })}
          
          {/* input form foto */}
          <p className="form-label">
              Photo
          </p>
          <input 
            type="file" 
            className="form-file"
            onChange={addImgHandler}
          />

          <button
          className="btn"
          onClick= { (e) => {e.preventDefault();
                   setModalIsOpenToTrue() }}
          >Process</button>

          <div>
            <Modal
            isOpen={modalIsOpen}
            style={modalStyle}
            //className="Modal-style"
            onRequestClose={()=> setModalIsOpen(true)}
            > 
               
            <button 
                className="btn-close" 
                onClick={setModalIsOpenToFalse}
            >
                close
            </button>
                <ModalShow 
                    userName = {formData["uname"]}
                    userJob = {formData["ujob"]}
                    userDom = {formData["udom"]}
                    userPhoto = {selectedImg}
                    userPhone = {formData["uphone"]}
                    userGit = {formData["ugit"]}
                    userEmail = {formData["uemail"]}
                />
            </Modal>
          </div>

      </form>
    </div>
  );
}

export default FormGroup;
