import ModalBase from "../ui/ModalBase";
import Create from "./Create";

const CreateModal = ({ open, onClose }) => {
  return (
    <ModalBase open={open} onClose={onClose} title="Create your own Pokemon">
      <Create className="w-full"/>
    </ModalBase>
  );
}

export default CreateModal;
