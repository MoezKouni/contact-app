import React from 'react'

const EditForm = ({handleChange, user, editContact, setShowModal}) => {
    return(
        <div className="backdrop">
            <div className="edit-modal-body">
                <h1 className="text-center">Edit User</h1>
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <label>Firstname:</label>
                        <input type="text" value={user.firstname} name="firstname" onChange={handleChange}/>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <label>Lastname:</label>
                        <input type="text" value={user.lastname} name="lastname" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <label>Address:</label>
                        <input type="text" value={user.address} name="address" onChange={handleChange}/>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <label>Sexe:</label>
                        <select name="sexe" onChange={handleChange} defaultValue={user.sexe}>
                            <option value="">choose</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <label>Visibility:</label>
                        <select name="isPublic" onChange={handleChange} defaultValue={user.isPublic}>
                            <option value="">choose</option>
                            <option value="true">Public</option>
                            <option value="false">Private</option>
                        </select>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <label>Relation:</label>
                        <select name="relation" onChange={handleChange} defaultValue={user.relation}>
                            <option value="">choose</option>
                            <option value="colleague">Colleague</option>
                            <option value="family">Family</option>
                            <option value="best friend">Best Friend</option>
                            <option value="friend">Friend</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <label>Email Address:</label>
                        <input type="text" value={user.email} name="email" onChange={handleChange}/>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <label>Phone Number:</label>
                        <input type="text" value={user.phone} name="phone" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex flex-column">
                        <label>Occupation:</label>
                        <input type="text" value={user.occupation} name="occupation" onChange={handleChange}/>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-2">
                    <button className="edit-btn mr-2" onClick={setShowModal}>Cancel</button>
                    <button className="edit-btn" onClick={editContact}>Confirm</button>
                </div>
                        </div>
                    </div>
    )
}

export default EditForm
