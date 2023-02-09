import { IconButton } from "@mui/material";
import { click } from "@testing-library/user-event/dist/click";

const userDelete = (props) => {
    const index = props.index;
    const handleDelete = props.handleDelete;
    const handleDeleteclic = () => {
    const option = window.confirm("¿Está seguro que desea eliminar el usuario?");
    if (option === true){
        handleDelete(index);
    }
}
  
    return (
        <IconButton onClick={handleDeleteclic} color="primary">
        </IconButton > 
    )
}

export default userDelete;