export default function UploadPicture({ handlePictureParent }) {

    // Update picture handler
    const handlePictureChild = (event) => {
        const newPicture = event.target.files[0];
        handlePictureParent(newPicture);
    };

    return (
        <div className="inputDiv">
            <label className="fieldLabels">Upload Picture</label>
            <input type="file" accept="image/*" className="form-control bars"
                onChange={handlePictureChild}></input>
        </div>
    );
}